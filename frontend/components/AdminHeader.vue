<template>
	<div class="d-flex justify-content-between">
		<div class="d-flex" style="line-height: 60px">
			<a
				href="#"
				@click.prevent="$emit('collapse-menu')"
				class="text-white"
				style="margin-right: 10px"
			>
				<i
					:class="{ 'el-icon-s-unfold': collapse, 'el-icon-s-fold': !collapse }"
				></i>
			</a>
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
	props: ["collapse"],
	methods: {
		handleCommand(command) {
			console.log(command);
		}
	}
};
</script>
