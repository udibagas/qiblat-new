<template>
	<el-container>
		<el-aside width="220px">
			<el-menu
				:default-active="$route.path"
				router
				style="height: 100vh; overflow: auto"
			>
				<div class="text-center py-3">
					<img src="/assets/img/logo.png" style="height: 55px" alt="" />
				</div>
				<template v-for="(menu, i) in menus">
					<el-menu-item v-if="!menu.children" :key="i" :index="menu.link">
						<i :class="menu.icon"></i> {{ $t(menu.label) }}
					</el-menu-item>
					<el-submenu v-if="menu.children" :key="i" :index="menu.link || ''">
						<template slot="title">
							<i :class="menu.icon"></i> {{ $t(menu.label) }}
						</template>
						<el-menu-item
							v-for="(submenu, j) in menu.children"
							:key="j"
							:index="submenu.link"
						>
							<i :class="submenu.icon"></i> {{ $t(submenu.label) }}
						</el-menu-item>
					</el-submenu>
				</template>
			</el-menu>
		</el-aside>
		<el-container>
			<el-header>
				<AdminHeader />
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
			menus: [
				{
					icon: "el-icon-data-analysis",
					label: "Dashboard",
					link: "/admin"
				},
				{
					icon: "el-icon-star-off",
					label: "Program",
					link: "/admin/program"
				},
				{
					icon: "el-icon-money",
					label: "Donation",
					link: "/admin/donation"
				},
				{
					icon: "el-icon-edit-outline",
					label: "Blog",
					link: "/admin/blog"
				},
				{
					icon: "el-icon-document-copy",
					label: "Component",
					link: "/component",
					children: [
						{
							icon: "el-icon-picture-outline",
							label: "Slider",
							link: "/admin/component/Slider"
						},
						{
							icon: "el-icon-document-copy",
							label: "About",
							link: "/admin/component/About"
						},
						{
							icon: "el-icon-bell",
							label: "Call to Action",
							link: "/admin/component/Cta"
						},
						{
							icon: "el-icon-s-data",
							label: "Achievement",
							link: "/admin/component/Achievement"
						},
						{
							icon: "el-icon-picture-outline",
							label: "Gallery",
							link: "/admin/component/Gallery"
						},
						{
							icon: "el-icon-location-information",
							label: "Contact", // include map, and social media
							link: "/admin/component/Contact"
						}
					]
				},
				{
					icon: "el-icon-s-operation",
					label: "Setting",
					children: [
						{
							icon: "el-icon-user",
							label: "User",
							link: "/admin/user"
						},
						{
							icon: "el-icon-s-flag",
							label: "Language",
							link: "/admin/language"
						}
					]
				}
			]
		};
	}
};
</script>

<style>
.el-header {
	border-bottom: 1px solid #ddd;
	background: #417b3e;
}

.el-menu {
	/* background-color: rgb(208, 252, 212); */
}

.el-main {
	height: calc(100vh - 60px);
	overflow: auto;
}
</style>
