<template>
	<el-card
		header="Latest Donation"
		style="height: 700px"
		:body-style="{ padding: '0' }"
	>
		<el-table :data="donations">
			<el-table-column label="Name" prop="name"></el-table-column>
			<el-table-column label="Country" prop="country"></el-table-column>
			<el-table-column label="Program" prop="program"></el-table-column>
			<el-table-column
				label="Amount"
				prop="amount"
				header-align="right"
				align="right"
			></el-table-column>
			<el-table-column
				label="Status"
				prop="status"
				header-align="center"
				align="center"
			></el-table-column>
		</el-table>
	</el-card>
</template>

<script>
export default {
	data() {
		return {
			donations: []
		};
	},

	mounted() {
		const params = {
			sort_column: "updated_at",
			sort_direction: "desc",
			per_page: 10,
			paginated: false
		};

		this.$axios
			.$get("api/donation/latest", { params })
			.then(response => (this.donations = response));
	}
};
</script>

<style>
</style>
