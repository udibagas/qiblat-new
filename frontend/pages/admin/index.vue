<template>
	<div>
		<div class="row">
			<div class="col">
				<el-card>
					<div class="text-muted">Donation Today</div>
					<h1 class="text-success">Rp. 4.000.000,-</h1>
				</el-card>
			</div>
			<div class="col">
				<el-card>
					<div class="text-muted">Donation This Month</div>
					<h1 class="text-info">Rp. 4.000.000,-</h1>
				</el-card>
			</div>
			<div class="col">
				<el-card>
					<div class="text-muted">Total Donation</div>
					<h1 class="text-danger">Rp. 4.000.000,-</h1>
				</el-card>
			</div>
		</div>

		<div class="row mt-4">
			<div class="col">
				<LatestDonation />
			</div>
			<div class="col">
				<LatestVisit />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	layout: "admin"
};
</script>

<style>
</style>
