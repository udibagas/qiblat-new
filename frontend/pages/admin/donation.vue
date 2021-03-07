<template>
	<div>
		<div class="d-flex justify-content-between mb-3">
			<div>
				<el-page-header @back="$router.go(-1)" content="DONATION">
				</el-page-header>
			</div>

			<el-form inline @submit.native.prevent>
				<el-form-item class="mb-0">
					<el-input
						:placeholder="$t('Search')"
						v-model="keyword"
						prefix-icon="el-icon-search"
						size="small"
						style="width: 200px"
						clearable
						@change="
							() => {
								pagination.current_page = 1;
								getData();
							}
						"
					></el-input>
				</el-form-item>
				<el-form-item class="mb-0">
					<el-button
						icon="el-icon-refresh"
						size="small"
						@click="refreshData"
					></el-button>
				</el-form-item>
			</el-form>
		</div>

		<el-table
			:data="tableData"
			stripe
			height="calc(100vh - 205px)"
			v-loading="loading"
		>
			<el-table-column
				label="#"
				type="index"
				:index="pagination.form"
			></el-table-column>
			<el-table-column label="Name" prop="name"></el-table-column>
			<el-table-column label="Email" prop="email"></el-table-column>
			<el-table-column label="Role" prop="role"></el-table-column>
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
	</div>
</template>

<script>
import crud from "@/mixins/crud";

export default {
	layout: "admin",
	mixins: [crud],

	data: () => {
		return {
			url: "/api/user"
		};
	}
};
</script>

<style>
/* .el-table {
	border-top: 1px solid #ddd;
} */
</style>
