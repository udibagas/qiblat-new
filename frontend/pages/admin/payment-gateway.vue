<template>
	<div>
		<div class="d-flex justify-content-between mb-3">
			<div>
				<el-page-header @back="$router.go(-1)" content="PAYMENT GATEWAY">
				</el-page-header>
			</div>

			<el-form inline @submit.native.prevent>
				<el-form-item class="mb-0">
					<el-button
						icon="el-icon-plus"
						size="small"
						type="success"
						@click="openForm({})"
						>NEW PAYMENT GATEWAY</el-button
					>
				</el-form-item>
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
				:index="pagination.from"
			></el-table-column>
			<el-table-column
				label="Provider"
				prop="provider"
				width="200"
			></el-table-column>
			<el-table-column label="API Key" prop="api_key"></el-table-column>
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

		<el-dialog title="PAYMENT GATEWAY" :visible.sync="showForm" width="600px">
			<el-form label-position="left" label-width="120px">
				<el-form-item label="Provider" :class="{ 'is-error': errors.provider }">
					<el-input v-model="form.provider" placeholder="Provider"></el-input>
					<div class="el-form-item__error" v-if="errors.provider">
						{{ errors.provider.join(",") }}
					</div>
				</el-form-item>

				<el-form-item label="API Key" :class="{ 'is-error': errors.api_key }">
					<el-input
						type="textarea"
						v-model="form.api_key"
						placeholder="API Key"
					></el-input>
					<div class="el-form-item__error" v-if="errors.api_key">
						{{ errors.api_key.join(",") }}
					</div>
				</el-form-item>
			</el-form>

			<template #footer>
				<el-button icon="el-icon-circle-close" @click="closeForm"
					>CANCEL</el-button
				>
				<el-button type="success" icon="el-icon-circle-check" @click="save"
					>SAVE</el-button
				>
			</template>
		</el-dialog>
	</div>
</template>

<script>
import crud from "@/mixins/crud";

export default {
	layout: "admin",

	mixins: [crud],

	data: () => {
		return {
			url: "/api/paymentGateway"
		};
	}
};
</script>
