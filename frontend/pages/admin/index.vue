<template>
	<div>
		<div class="row">
			<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
				<el-card class="mb-3">
					<div class="text-muted">Donation Today</div>
					<h2 class="text-warning">Rp. 4.000.000,-</h2>
				</el-card>
			</div>
			<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
				<el-card class="mb-3">
					<div class="text-muted">Donation This Month</div>
					<h2 class="text-info">Rp. 4.000.000,-</h2>
				</el-card>
			</div>
			<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
				<el-card class="mb-3">
					<div class="text-muted">Total Donation</div>
					<h2 class="text-danger">Rp. 4.000.000,-</h2>
				</el-card>
			</div>
			<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
				<el-card class="mb-3">
					<div class="text-muted">Settled Donation</div>
					<h2 class="text-success">Rp. 4.000.000,-</h2>
				</el-card>
			</div>
		</div>

		<div class="row mt-1">
			<div class="col-lg-6 col-md-6 col-sm-12">
				<LatestDonation />
			</div>
			<div class="col-lg-6 col-md-6 col-sm-12">
				<LatestVisit class="mb-4" />
				<VisitorStatistic />
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
