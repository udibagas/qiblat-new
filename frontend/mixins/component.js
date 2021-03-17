export default {
  data() {
    return {
      errors: {},
      loading: false,
      uploadProgress: 0,
      showUploadProgress: false,
      attachments: [],
      attachment: {},
    }
  },

  methods: {
    save() {
      const url = this.component.id ? `/api/component/${this.component.id}` : '/api/component';
      const method = this.component.id ? 'PUT' : 'POST';
      const data = this.component;

      this.loading = true;

      this.$axios({ method, url, data }).then(res => {
        this.$message({
          message: res.data.message,
          type: 'info'
        });

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

    getData() {
      this.loading = true;
      const params = { locale: this.$i18.n.locale }
      this.$axios.$get(`/api/component/getByName/${this.component.name}`, { params }).then(response => {
        this.component = response;

        if (this.component.name == 'Contact') {
          this.body = JSON.parse(response.body);
        }
      }).catch(e => {
        this.$message({
          message: e.response.data.message,
          type: 'error',
          showClose: true
        });
      }).finally(() => this.loading = false)
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
    this.getData()
  }
}
