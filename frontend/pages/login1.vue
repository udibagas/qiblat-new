<script>
import { authFackMethods, notificationMethods } from "~/store/helpers";
import { mapState } from "vuex";
import { required, email } from "vuelidate/lib/validators";

/**
 * Login component
 */
export default {
    layout: "auth",
    data() {
      return {
        email: "",
        password: "",
        submitted: false,
        authError: null,
        tryingToLogIn: false,
        isAuthError: false,
      };
    },
    validations: {
      email: { required, email, },
      password: { required, },
    },
    computed: {
      ...mapState("modules/authfack", ["status"]),
      notification() {
        return this.$store ? this.$store.state.modules.notification : null;
      },
    },
    methods: {
      ...authFackMethods,
      ...notificationMethods,
      // Try to log the user in with the username
      // and password they provided.
      tryToLogIn() {
        this.submitted = true;
        // stop here if form is invalid
        this.$v.$touch();

        if (this.$v.$invalid) {
          return;
        } else {
          this.$auth.loginWith('laravelSanctum', {
            data: {
              email: this.email,
              password: this.password,
            }
          })
        }
      },
    },
};
</script>

<template>
	<div>
		<div class="home-btn d-none d-sm-block">
			<nuxt-link to="/" class="text-dark">
				<i class="mdi mdi-home-variant h2"></i>
			</nuxt-link>
		</div>
		<div class="account-pages my-5 pt-sm-5">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="text-center">
							<nuxt-link to="/" class="mb-5 d-block auth-logo">
								<img
									src="~/assets/images/logo-dark.png"
									alt
									height="22"
									class="logo logo-dark"
								/>
								<img
									src="~/assets/images/logo-light.png"
									alt
									height="22"
									class="logo logo-light"
								/>
							</nuxt-link>
						</div>
					</div>
				</div>
				<div class="row align-items-center justify-content-center">
					<div class="col-md-8 col-lg-6 col-xl-5">
						<div class="card">
							<div class="card-body p-4">
								<div class="text-center mt-2">
									<h5 class="text-primary">Welcome Back !</h5>
									<p class="text-muted">Sign in to continue to Qiblat.</p>
								</div>
								<div class="p-2 mt-4">
									<b-alert
										v-model="isAuthError"
										variant="danger"
										class="mt-3"
										dismissible
										>{{ authError }}</b-alert
									>

									<div
										v-if="notification.message"
										:class="'alert ' + notification.type"
									>
										{{ notification.message }}
									</div>

									<b-form @submit.prevent="tryToLogIn">
										<b-form-group
											id="input-group-1"
											label="Email"
											label-for="input-1"
										>
											<b-form-input
												id="input-1"
												v-model="email"
												type="text"
												placeholder="Enter email"
												:class="{ 'is-invalid': submitted && $v.email.$error }"
											></b-form-input>
											<div
												v-if="submitted && $v.email.$error"
												class="invalid-feedback"
											>
												<span v-if="!$v.email.required"
													>Email is required.</span
												>
												<span v-if="!$v.email.email"
													>Please enter valid email.</span
												>
											</div>
										</b-form-group>

										<b-form-group id="input-group-2">
											<div class="float-right">
												<nuxt-link
													to="/account/forgot-password"
													class="text-muted"
													>Forgot password?</nuxt-link
												>
											</div>
											<label for="input-2">Password</label>
											<b-form-input
												id="input-2"
												v-model="password"
												type="password"
												placeholder="Enter password"
												:class="{
													'is-invalid': submitted && $v.password.$error,
												}"
											></b-form-input>
											<div
												v-if="submitted && !$v.password.required"
												class="invalid-feedback"
											>
												Password is required.
											</div>
										</b-form-group>
										<div class="custom-control custom-checkbox">
											<input
												id="customControlInline"
												type="checkbox"
												class="custom-control-input"
											/>
											<label
												class="custom-control-label"
												for="customControlInline"
												>Remember me</label
											>
										</div>
										<div class="mt-3 text-right">
											<b-button type="submit" variant="primary" class="w-sm"
												>Log In</b-button
											>
										</div>
										<div class="mt-4 text-center">
											<div class="signin-other-title">
												<h5 class="font-size-14 mb-3 title">Sign in with</h5>
											</div>

											<ul class="list-inline">
												<li class="list-inline-item">
													<a
														href="javascript:void()"
														class="social-list-item bg-primary text-white border-primary"
													>
														<i class="mdi mdi-facebook"></i>
													</a>
												</li>
												<li class="list-inline-item">
													<a
														href="javascript:void()"
														class="social-list-item bg-info text-white border-info"
													>
														<i class="mdi mdi-twitter"></i>
													</a>
												</li>
												<li class="list-inline-item">
													<a
														href="javascript:void()"
														class="social-list-item bg-danger text-white border-danger"
													>
														<i class="mdi mdi-google"></i>
													</a>
												</li>
											</ul>
										</div>

										<div class="mt-4 text-center">
											<p class="mb-0">
												Don't have an account ?
												<nuxt-link
													to="/account/register"
													class="font-weight-medium text-primary"
													>Signup now</nuxt-link
												>
											</p>
										</div>
									</b-form>
								</div>
								<!-- end card-body -->
							</div>
							<!-- end card -->
						</div>
						<div class="mt-5 text-center">
							<!-- <p>
								© {{ new Date().getFullYear() }} Minible. Crafted with
								<i class="mdi mdi-heart text-danger"></i> by Themesbrand
							</p> -->
						</div>
						<!-- end row -->
					</div>
					<!-- end col -->
				</div>
				<!-- end row -->
			</div>
		</div>
	</div>
</template>

<style lang="scss" module></style>
