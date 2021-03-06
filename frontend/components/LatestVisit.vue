<template>
	<el-card
		header="Latest Donation"
		style="height: 600px"
		:body-style="{ padding: '0' }"
	>
		<el-table :data="visitors">
			<el-table-column label="Time"></el-table-column>
			<el-table-column label="IP Address"></el-table-column>
			<el-table-column label="URL"></el-table-column>
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
