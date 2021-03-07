<template>
	<el-card
		header="Visitor Statistic"
		style="height: 340px"
		:body-style="{ padding: '0' }"
	>
		<el-table :data="visitors">
			<el-table-column label="Country"></el-table-column>
			<el-table-column
				label="Visitor"
				header-align="right"
				align="right"
			></el-table-column>
		</el-table>
	</el-card>
</template>

<script>
export default {
	data() {
		return {
			visitors: []
		};
	}
};
</script>

<style>
</style>
