<template>
	<div>
		<div class="bg-gray-700 h-20">
			<el-select v-model="lang" @change="(v) => $i18n.setLocale(v)">
				<el-option
					v-for="locale in $i18n.locales"
					:key="locale.code"
					:label="locale.name"
					:value="locale.code"
				></el-option>
			</el-select>
		</div>
		<h1 class="text-5xl text-center mt-5">
			{{ $t('welcome') }}
		</h1>
	</div>
</template>

<script>
export default {
  data() {
    return {
      lang: this.$i18n.locale
    }
  }

}
</script>

<style>
</style>
