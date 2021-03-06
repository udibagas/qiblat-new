export default {
  data() {
    return {
      errors: {}
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
      this.$axios.$get(`/api/component/${this.component.name}`).then(response => {
        this.component = response;
      }).catch(e => {
        this.$message({
          message: e.response.data.message,
          type: 'error',
          showClose: true
        });
      });
    }
  },

  mounted() {
    this.getData()
  }
}
