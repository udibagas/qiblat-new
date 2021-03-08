<template>
	<div>
		<div class="d-flex justify-content-between">
			<div>
				<el-page-header @back="$router.go(-1)" content="CONTACT">
				</el-page-header>
			</div>
			<el-form inline>
				<el-form-item class="mb-0">
					<el-select
						v-model="locale"
						clearable
						placeholder="Locale"
						size="small"
						style="width: 170px"
						@change="getData"
					>
						<el-option
							v-for="locale in $i18n.locales"
							:key="locale.code"
							:value="locale.code"
							:label="locale.name"
						>
							<img
								:src="locale.flag"
								alt=""
								class="border mr-3"
								style="height: 15px; width: 20px"
							/>
							{{ locale.name }}
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item class="mb-0">
					<el-button
						type="success"
						size="small"
						@click="submit"
						icon="el-icon-circle-check"
						>SAVE</el-button
					>
				</el-form-item>
			</el-form>
		</div>

		<el-card class="mt-4" v-loading="loading">
			<el-form label-position="left" label-width="150px">
				<el-form-item label="Title" :class="{ 'is-error': errors.title }">
					<el-input v-model="component.title" placeholder="Title"></el-input>
					<div class="el-form-item__error" v-if="errors.title">
						{{ errors.title.join(",") }}
					</div>
				</el-form-item>

				<el-form-item
					label="Description"
					:class="{ 'is-error': errors.description }"
				>
					<el-input
						type="textarea"
						rows="3"
						v-model="component.description"
						placeholder="Description"
					></el-input>
					<div class="el-form-item__error" v-if="errors.description">
						{{ errors.description.join(",") }}
					</div>
				</el-form-item>

				<el-row :gutter="30">
					<el-col :span="12">
						<!-- <div class="mb-4">Contact</div> -->
						<el-form-item label="Email">
							<el-input v-model="body.email" placeholder="Email"></el-input>
						</el-form-item>
						<el-form-item label="Phone">
							<el-input v-model="body.phone" placeholder="Phone"></el-input>
						</el-form-item>
						<el-form-item label="Address">
							<el-input
								type="textarea"
								rows="4"
								v-model="body.address"
								placeholder="Address"
							></el-input>
						</el-form-item>

						<el-form-item label="Google Maps URL">
							<el-input
								type="textarea"
								rows="4"
								v-model="body.map_url"
								placeholder="Google Maps URL"
							></el-input>
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<!-- <div class="mb-4">Social Media</div> -->
						<el-form-item label="Facebook">
							<el-input
								v-model="body.facebook"
								placeholder="Facebook"
							></el-input>
						</el-form-item>
						<el-form-item label="Instagram">
							<el-input
								v-model="body.instagram"
								placeholder="Instagram"
							></el-input>
						</el-form-item>
						<el-form-item label="Twitter">
							<el-input v-model="body.twitter" placeholder="Twitter"></el-input>
						</el-form-item>
						<el-form-item label="Youtube">
							<el-input v-model="body.youtube" placeholder="Youtube"></el-input>
						</el-form-item>
						<el-form-item label="Snapchat">
							<el-input
								v-model="body.snapchat"
								placeholder="Snapchat"
							></el-input>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
		</el-card>
	</div>
</template>

<script>
import component from "~/mixins/component";

export default {
	layout: "admin",
	mixins: [component],

	data() {
		return {
			component: { name: "Contact" },
			body: {},
			locale: "en"
		};
	},

	methods: {
		submit() {
			this.component.body = JSON.stringify(this.body);
			this.save();
		}
	}
};
</script>

<style>
</style>
