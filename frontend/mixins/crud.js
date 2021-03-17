export default {
  data() {
    return {
      tableData: [],
      pagination: {
        current_page: 1,
        from: 0,
        to: 0,
        total: 0,
        per_page: 15
      },
      pageSizes: [15, 20, 50, 100],
      keyword: '',
      filters: {},
      sortField: '',
      sortDirection: 'asc',
      errors: {},
      form: {},
      attachments: [],
      attachment: {},
      showForm: false,
      loading: false,
      uploadProgress: 0,
			showUploadProgress: false,
    }
  },

  methods: {

    getData() {
      const params = {
        ...this.filters,
        ...this.pagination,
        page: this.pagination.current_page,
        keyword: this.keyword,
        sortField: this.sortField,
        sortDirection: this.sortDirection,
        locale: this.$i18n.locale,
        paginated: true,
      };

      this.loading = true;

      this.$axios.$get(this.url, { params }).then(res => {
        this.tableData = res.data;
        const { current_page, from, to, total, per_page } = res
        this.pagination = { current_page, from, to, total, per_page: Number(per_page) };
      }).catch(e => {
        this.$message({
          message: e.response.data.message,
          type: 'error'
        })
      }).finally(() => this.loading = false);
    },

    save() {
      const url = this.form.id ? `${this.url}/${this.form.id}` : this.url;
      const method = this.form.id ? 'PUT' : 'POST';
      let data = this.form;
      data.attachment = this.attachment;
      data.attachments = this.attachments;
      data.locale = this.$i18n.locale;

      this.loading = true;

      this.$axios({ method, url, data }).then(res => {
        this.$message({
          message: res.data.message,
          type: 'success'
        });

        this.closeForm();
        this.getData();
      }).catch(e => {
        this.$message({
          message: e.response.data.message,
          type: 'error',
        });

        if (e.response.status == 422) {
          this.errors = e.response.data.errors;
        }
      }).finally(() => this.loading = false);
    },

    deleteData(id) {
      this.$confirm(this.$t('Confirm'), this.$t('Are you sure?'), { type: 'warning' }).then(() => {
        this.loading = true;
        this.$axios.$delete(`${this.url}/${id}`).then(r => {
          this.$message({
            message: r.message,
            type: 'success'
          })
          this.getData()
        }).catch(e => {
          this.$message({
            message: e.response.data.message,
            type: 'error',
          })
        }).finally(() => this.loading = false);
      }).catch(e => console.log(e))
    },

    openForm(data) {
      this.form = JSON.parse(JSON.stringify(data));

      if (this.form.attachments) {
        this.attachments = JSON.parse(JSON.stringify(this.form.attachments));
        this.attachment = JSON.parse(JSON.stringify(this.form.attachments[0]));
      }

      this.showForm = true;
    },

    closeForm() {
      this.errors = {};
      this.showForm = false;
    },

    sortChange(c) {
      if (c.prop != this.sortField || c.order != this.sortDirection) {
        this.sortField = c.prop;
        this.sortDirection = c.order == 'ascending' ? 'asc' : 'desc';
        this.pagination.current_page = 1;
				this.getData();
			}
    },

    filterChange(filter) {
      this.filters = {...this.filters, ...filter}
      this.pagination.current_page = 1
      this.getData()
    },

    currentChange(page) {
      this.pagination.current_page = page
			this.getData()
    },

    refreshData() {
      this.pagination.current_page = 1;
      this.keyword = ''
      this.sortField = ''
      this.sortDirection = ''
      this.getData()
    },

    sizeChange(size) {
      this.pagination.per_page = size
			this.pagination.current_page = 1
			this.getData()
    },

    upload(multiple = false) {
      let el = document.createElement('input');
      el.type = 'file';

      el.addEventListener('change', (event) => {
        let formData = new FormData();
        formData.append('file', event.target.files[0]);
        this.$axios.$post('/api/upload', formData, {
          headers: { 'Content-Type': 'application/form-data' },
          onUploadProgress: progressEvent => {
						this.uploadProgress = Math.round(
							(progressEvent.loaded * 100) / progressEvent.total
            );
            this.showUploadProgress = true
					}
        }).then(response => {
          if (multiple) {
            this.attachments.push(response);
          } else {
            this.attachment = response;
          }

          console.log(this.attachment)
        }).catch(e => {
          let message = 'Unhandled error';

          if (e.response.status == 413) {
            message = 'File too large';
          }

          if (e.response.status == 422 || e.response.status == 500) {
            message = e.response.data.message;
          }

          if (e.response.status == 422) {
            message += e.response.data.errors.file[0]
          }

          this.$message({ message, type: 'error', })
        }).finally(() => {
          this.uploadProgress = 0;
          this.showUploadProgress = false;
				});
      });

      el.click();
      el.remove();
    }

  },

  mounted() {
    this.getData();
  }
}
