<template>
	<el-container>
		<el-aside :width="collapse ? 'auto' : '220px'">
			<Menu :collapse="collapse" />
		</el-aside>
		<el-container>
			<el-header>
				<AdminHeader
					@collapse-menu="collapse = !collapse"
					:collapse="collapse"
				/>
			</el-header>

			<el-main>
				<Nuxt />
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
export default {
	middleware: ["auth"],
	data() {
		return {
			collapse: false
		};
	}
};
</script>

<style scoped>
.el-header {
	border-bottom: 1px solid #ddd;
	background: #417b3e;
}

.el-main {
	height: calc(100vh - 60px);
	overflow: auto;
}
</style>
