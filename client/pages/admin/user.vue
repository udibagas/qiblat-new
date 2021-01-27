<template>
	<div>
		<div class="flex justify-between">
			<div class="text-2xl text-green-700">Manage User</div>
			<div class="text-right">
				<el-button type="primary">NEW USER</el-button>
				<el-input
					prefix-icon="el-icon-search"
					placeholder="Search"
					v-model="keyword"
					@change="getData"
				></el-input>
			</div>
		</div>

		<el-table
			stripe
			height="calc(100vh - 220px)"
			v-loading="loading"
			:data="tableData"
			:default-sort="{ prop: 'name', order: 'asc' }"
			@filter-change="filterChange"
			@sort-change="sortChange"
		>
			<el-table-column
				type="index"
				:index="pagination.from"
				label="#"
			></el-table-column>

			<el-table-column
				prop="name"
				label="Name"
				sortable="custom"
			></el-table-column>

			<el-table-column
				prop="email"
				label="Email"
				sortable="custom"
			></el-table-column>

			<el-table-column
				prop="role"
				label="Role"
				sortable="custom"
			></el-table-column>

			<el-table-column
				fixed="right"
				header-align="center"
				align="center"
				width="150"
			>
				<template slot="header">
					<el-button
						type="text"
						@click.native.prevent="refreshData"
						icon="el-icon-refresh"
					></el-button>
				</template>

				<template slot-scope="scope">
					<el-button
						icon="el-icon-edit"
						type="text"
						@click.native.prevent="editData(scope.row)"
					></el-button>

					<el-button
						icon="el-icon-delete"
						type="text"
						@click.native.prevent="deleteData(scope.row.id)"
					></el-button>
				</template>
			</el-table-column>
		</el-table>

		<br />

		<el-row>
			<el-col :span="20">
				<el-pagination
					background
					layout="total, sizes, prev, pager, next"
					:current-page="pagination.current_page"
					@current-change="currentChange"
					@size-change="sizeChange"
					:page-size="Number(pagination.per_page)"
					:page-sizes="pageSizes"
					:total="pagination.total"
				></el-pagination>
			</el-col>
			<el-col :span="4" class="text-right">
				<small>
					Showing {{ pagination.from }} - {{ pagination.to }} of
					{{ pagination.total }}
				</small>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import crud from '@/mixins/crud'

export default {
	layout: 'admin',
	mixins: [crud],

	data() {
		return {
			url: '/api/user',
		}
	},
}
</script>
