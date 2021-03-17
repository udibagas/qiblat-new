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

		<div class="d-flex justifi-content-between" style="line-height: 60px">
			<el-dropdown @command="switchLanguage" style="margin-right: 30px">
				<span class="el-dropdown-link text-white">
					<img
						:src="activeLocale.flag"
						alt=""
						class="border mr-1"
						style="height: 15px; width: 20px"
					/>
					{{ activeLocale.name }}
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item
						v-for="l in $i18n.locales"
						:key="l.code"
						:command="l.code"
					>
						<img
							:src="l.flag"
							alt=""
							class="border mr-1"
							style="height: 15px; width: 20px"
						/>
						{{ l.name }}
					</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>

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

	computed: {
		activeLocale() {
			return this.$i18n.locales.find(l => l.code == this.$i18n.locale);
		}
	},

	methods: {
		handleCommand(command) {
			console.log(command);
			if (command == "logout") {
				this.$auth.logout().then(() => this.$router.push("/login"));
			}
		},

		switchLanguage(locale) {
			this.$i18n.setLocale(locale);
			this.$i18n.locale = locale;
		}
	}
};
</script>

<style scoped>
</style>
