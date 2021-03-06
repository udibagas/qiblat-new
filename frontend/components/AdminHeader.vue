<template>
	<div class="d-flex justify-content-between">
		<div class="d-flex" style="line-height: 60px">
			<h5 style="line-height: 60px" class="text-white">ADMIN PANEL</h5>
		</div>
		<div style="line-height: 60px">
			<el-dropdown @command="handleCommand">
				<span class="el-dropdown-link">
					<el-avatar
						style="margin-top: 10px"
						:size="40"
						icon="el-icon-user"
					></el-avatar>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="profile">Profile</el-dropdown-item>
					<el-dropdown-item command="logout">Logout</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		handleCommand(command) {
			console.log(command);
		}
	}
};
</script>
