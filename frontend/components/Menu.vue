<template>
	<el-menu
		:default-active="$route.path"
		router
		style="height: 100vh; overflow: auto"
		:collapse="collapse"
		active-text-color="#19853c"
	>
		<div class="text-center py-3">
			<img src="/assets/img/logo.png" style="height: 40px" alt="" />
		</div>
		<template v-for="(menu, i) in menus">
			<el-menu-item v-if="!menu.children" :key="i" :index="menu.link">
				<i :class="menu.icon"></i>
				<span slot="title">{{ $t(menu.label) }}</span>
			</el-menu-item>
			<el-submenu v-if="menu.children" :key="i" :index="menu.link || ''">
				<template slot="title">
					<i :class="menu.icon"></i>
					<span slot="title">{{ $t(menu.label) }} </span>
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
</template>

<script>
export default {
	props: ["collapse"],

	data() {
		return {
			menus: [
				{
					icon: "el-icon-data-analysis",
					label: "Dashboard",
					link: "/admin"
				},

				{
					icon: "el-icon-money",
					label: "Donation",
					link: "/admin/donation",
					children: [
						{
							icon: "el-icon-money",
							label: "Donation",
							link: "/admin/Donation"
						},
						{
							icon: "el-icon-s-claim",
							label: "Receipt",
							link: "/admin/receipt"
						},
						{
							icon: "el-icon-star-off",
							label: "Program",
							link: "/admin/program"
						},
						{
							icon: "el-icon-user",
							label: "Donor",
							link: "/admin/donor"
						}
					]
				},
				{
					icon: "el-icon-edit-outline",
					label: "Blog",
					link: "/admin/blog"
				},
				{
					icon: "el-icon-document-copy",
					label: "Front Page",
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
							icon: "el-icon-phone-outline",
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
							icon: "el-icon-s-finance",
							label: "Payment Gateway",
							link: "/admin/payment-gateway"
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
</style>
