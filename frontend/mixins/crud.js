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
      showForm: false,
      loading: false
    }
  },

  methods: {

    getData() {
      const params = {
        ...this.filters,
        page: this.pagination.current_page,
        pageSize: this.pagination.per_page,
        keyword: this.keyword,
        sortField: this.sortField,
        sortDirection: this.sortDirection
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
      const data = this.form;

      this.loading = true;

      this.$axios({ method, url, data }).then(res => {
        this.$message({
          message: res.data.message,
          type: 'info'
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
        this.$axios.delete(`${this.url}/${id}`).then(r => {
          this.$message({
            message: r.data.message,
            type: 'info'
          })
          this.fetchData()
        }).catch(e => {
          this.$message({
            message: e.response.data.message,
            type: 'error',
          })
        }).finally(() => this.loading = false);
      }).catch(e => console.log(e))
    },

    editData(data) {
      this.form = JSON.parse(JSON.stringify(data));
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
      this.sort = ''
      this.order = ''
      this.getData()
    },

    sizeChange(size) {
      this.pagination.per_page = size
			this.pagination.current_page = 1
			this.getData()
    },

  },

  mounted() {
    this.getData();
  }
}
