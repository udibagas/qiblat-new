<template>
	<div>
		<div class="d-flex justify-content-between">
			<div>
				<el-page-header @back="$router.go(-1)" content="CONTACT">
				</el-page-header>
			</div>
			<el-button
				size="small"
				type="success"
				@click="save"
				icon="el-icon-circle-check"
				>SAVE</el-button
			>
		</div>

		<el-card class="mt-4">
			<el-form label-position="left" label-width="150px">
				<el-row :gutter="30">
					<el-col :span="12">
						<div class="mb-4">Contact</div>
						<el-form-item label="Email">
							<el-input v-model="form.email" placeholder="Email"></el-input>
						</el-form-item>
						<el-form-item label="Phone">
							<el-input v-model="form.phone" placeholder="Phone"></el-input>
						</el-form-item>
						<el-form-item label="Address">
							<el-input
								type="textarea"
								rows="3"
								v-model="form.address"
								placeholder="Address"
							></el-input>
						</el-form-item>

						<el-form-item label="Google Maps URL">
							<el-input
								type="textarea"
								rows="2"
								v-model="form.map_url"
								placeholder="Google Maps URL"
							></el-input>
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<div class="mb-4">Social Media</div>
						<el-form-item label="Facebook">
							<el-input
								v-model="form.facebook"
								placeholder="Facebook"
							></el-input>
						</el-form-item>
						<el-form-item label="Instagram">
							<el-input
								v-model="form.facebook"
								placeholder="Instagram"
							></el-input>
						</el-form-item>
						<el-form-item label="Twitter">
							<el-input
								v-model="form.facebook"
								placeholder="Twitter"
							></el-input>
						</el-form-item>
						<el-form-item label="Youtube">
							<el-input
								v-model="form.facebook"
								placeholder="Youtube"
							></el-input>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
		</el-card>
	</div>
</template>

<script>
export default {
	layout: "admin",
	data() {
		return {
			form: {}
		};
	}
};
</script>

<style>
</style>
