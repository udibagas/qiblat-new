<template>
	<el-card :body-style="{ padding: '0' }">
		<div class="d-flex" slot="header">
			<div class="flex-grow-1 text-primary">User</div>
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
			<el-button icon="uil-filter" size="small" class="ml-2"></el-button>
			<el-button
				icon="el-icon-refresh"
				size="small"
				class="ml-2"
				@click="refresh"
			></el-button>
			<el-pagination
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
				layout="prev, next"
				:page-size="Number(pagination.per_page)"
				:page-sizes="pageSizes"
				:total="pagination.total"
			></el-pagination>

			<div style="line-height: 30px">
				{{ pagination.from }} - {{ pagination.to }} of
				{{ pagination.total }}
			</div>
		</div>
		<el-table :data="tableData" stripe min-height="calc(100vh - 190px)">
			<el-table-column
				label="#"
				type="index"
				:index="pagination.form"
			></el-table-column>
			<el-table-column label="Name" prop="name"></el-table-column>
			<el-table-column label="Email" prop="email"></el-table-column>
		</el-table>
	</el-card>
</template>

<script>
import crud from '../../mixins/crud'

export default {
  mixins: [crud],

  data: () => {
    return {
      url: '/api/user'
    }
  },
}
</script>

<style>
</style>
