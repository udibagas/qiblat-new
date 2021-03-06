<template>
	<el-card style="width: 350px; margin: 200px auto 0">
		<div class="text-center mb-3">SILAKAN LOGIN</div>
		<el-form>
			<el-form-item>
				<el-input
					prefix-icon="el-icon-user"
					:placeholder="$t('Email')"
					v-model="form.email"
				></el-input>
			</el-form-item>
			<el-form-item>
				<el-input
					prefix-icon="el-icon-lock"
					type="password"
					:placeholder="$t('Password')"
					v-model="form.password"
				></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="success" class="btn-block" @click="login">
					{{ $t("Login") }}
				</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    login() {
      this.$auth.loginWith('laravelSanctum', { data: this.form }).then(response => {
        this.$router.push('/admin')
      }).catch(e => {
        this.$message({
          message: e.response.data.message,
          type: 'error',
          showClose: true
        })
      })
    }
  }

}
</script>

<style>
</style>
