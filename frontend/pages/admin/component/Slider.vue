<template>
	<div>
		<div class="d-flex justify-content-between mb-3">
			<div>
				<el-page-header @back="$router.go(-1)" content="SLIDES">
				</el-page-header>
			</div>
			<el-form inline @submit.native.prevent>
				<el-form-item class="mb-0">
					<el-button
						size="small"
						icon="el-icon-plus"
						type="success"
						@click="openForm({ component_id: component.id, content: {} })"
					>
						{{ $t("NEW SLIDER") }}
					</el-button>
				</el-form-item>
				<el-form-item class="mb-0">
					<el-input
						v-model="keyword"
						prefix-icon="el-icon-search"
						placeholder="Search"
						clearable
						size="small"
						@change="
							pagination.current_page = 1;
							getData();
						"
					></el-input>
				</el-form-item>
				<el-form-item class="mb-0">
					<el-button
						size="small"
						@click="refreshData"
						icon="el-icon-refresh"
					></el-button>
				</el-form-item>
			</el-form>
		</div>

		<el-table :data="tableData" :show-header="false" v-loading="loading">
			<el-table-column width="150px">
				<template slot-scope="scope">
					<el-image
						v-if="scope.row.attachments.length > 0"
						:src="scope.row.attachments[0].url"
						fit="cover"
						style="height: 100px"
					></el-image>
				</template>
			</el-table-column>
			<el-table-column>
				<template slot-scope="scope">
					<h3>{{ scope.row.content.title }}</h3>
					{{ scope.row.content.description }}
				</template>
			</el-table-column>

			<el-table-column
				align="center"
				header-align="center"
				width="60px"
				fixed="right"
			>
				<template slot="header">
					<el-button
						icon="el-icon-refresh"
						type="text"
						@click="refreshData"
					></el-button>
				</template>

				<template slot-scope="scope">
					<el-dropdown>
						<span class="el-dropdown-link">
							<i class="el-icon-more"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item
								icon="el-icon-edit"
								@click.native.prevent="openForm(scope.row)"
								>Edit</el-dropdown-item
							>
							<el-dropdown-item
								icon="el-icon-delete"
								@click.native.prevent="deleteData(scope.row.id)"
								>Delete</el-dropdown-item
							>
						</el-dropdown-menu>
					</el-dropdown>
				</template>
			</el-table-column>
		</el-table>

		<el-pagination
			class="mt-3"
			background
			@current-change="
				(p) => {
					pagination.current_page = p;
					getData();
				}
			"
			@size-change="
				(s) => {
					pagination.per_page = s;
					getData();
				}
			"
			layout="prev, pager, next, sizes, total"
			:page-size="Number(pagination.per_page)"
			:page-sizes="pageSizes"
			:total="pagination.total"
		></el-pagination>

		<el-dialog title="SLIDER" :visible.sync="showForm" width="750px">
			<div class="media">
				<div class="mr-3 text-center">
					<el-image
						:src="attachment.url"
						alt=""
						class="border border-2"
						style="width: 320px; height: 200px"
						fit="cover"
					></el-image>

					<el-button
						type="success"
						size="small"
						icon="el-icon-upload2"
						class="btn-block"
						@click="upload()"
					>
						{{ $t("Upload") }}
					</el-button>

					<el-progress
						class="mt-3"
						:percentage="uploadProgress"
						v-if="showUploadProgress"
					></el-progress>
				</div>
				<el-form class="media-body" label-position="top">
					<el-form-item :class="{ 'is-error': errors.title }">
						<el-input
							prefix-icon="el-icon-collection-tag"
							v-model="form.content.title"
							placeholder="Title"
						></el-input>
						<div class="el-form-item__error" v-if="errors.title">
							{{ errors.title.join(",") }}
						</div>
					</el-form-item>

					<el-form-item>
						<el-input
							type="textarea"
							:autosize="{ minRows: 2, maxRows: 10 }"
							v-model="form.content.description"
							placeholder="Description"
						></el-input>
					</el-form-item>

					<el-form-item>
						<el-input
							prefix-icon="el-icon-thumb"
							v-model="form.content.button_label"
							placeholder="Button Label"
						></el-input>
					</el-form-item>

					<el-form-item>
						<el-input
							prefix-icon="el-icon-link"
							v-model="form.content.url"
							placeholder="URL"
						></el-input>
					</el-form-item>
				</el-form>
			</div>

			<template #footer>
				<el-button size="small" icon="el-icon-circle-close" @click="closeForm">
					{{ $t("CANCEL") }}
				</el-button>
				<el-button
					size="small"
					type="success"
					icon="el-icon-circle-check"
					@click="save"
				>
					{{ $t("SAVE") }}
				</el-button>
			</template>
		</el-dialog>
	</div>
</template>

<script>
import crud from "@/mixins/crud";

export default {
	layout: "admin",
	mixins: [crud],

	async asyncData({ $axios, app }) {
		const params = { locale: app.i18n.locale };
		const component = await $axios.$get("api/component/getByName/Slider", {
			params
		});
		return { component };
	},

	data() {
		return {
			componentName: "Slider",
			url: "/api/componentItem",
			filters: { componentName: "Slider" },
			form: { content: {} }
		};
	}
};
</script>
