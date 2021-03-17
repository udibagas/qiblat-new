<template>
	<div>
		<div class="d-flex justify-content-between mb-3">
			<div>
				<el-page-header @back="$router.go(-1)" content="LANGUAGE">
				</el-page-header>
			</div>

			<el-form inline @submit.native.prevent>
				<el-form-item class="mb-0">
					<el-button
						icon="el-icon-plus"
						size="small"
						type="success"
						@click="openForm({})"
						>NEW TRANSLATION</el-button
					>
				</el-form-item>
				<el-form-item class="mb-0">
					<el-select
						v-model="filters.locale"
						clearable
						placeholder="Locale"
						size="small"
						style="width: 170px"
						@change="getData"
					>
						<el-option
							v-for="locale in $i18n.locales"
							:key="locale.code"
							:value="locale.code"
							:label="locale.name"
						>
							<img
								:src="locale.flag"
								alt=""
								class="border mr-3"
								style="height: 15px; width: 20px"
							/>
							{{ locale.name }}
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item class="mb-0">
					<el-input
						:placeholder="$t('Search')"
						v-model="keyword"
						prefix-icon="el-icon-search"
						size="small"
						style="width: 200px"
						clearable
						@change="
							() => {
								pagination.current_page = 1;
								getData();
							}
						"
					></el-input>
				</el-form-item>
			</el-form>
		</div>

		<el-table
			:data="tableData"
			stripe
			height="calc(100vh - 205px)"
			v-loading="loading"
		>
			<el-table-column
				label="#"
				type="index"
				:index="pagination.from"
			></el-table-column>

			<el-table-column label="Locale" prop="locale" width="180">
				<template slot-scope="scope">
					<img
						:src="$i18n.locales.find((l) => l.code == scope.row.locale).flag"
						alt=""
						class="border mr-3"
						style="height: 15px; width: 20px"
					/>
					{{ $i18n.locales.find((l) => l.code == scope.row.locale).name }}
				</template>
			</el-table-column>

			<el-table-column label="Key" prop="key"></el-table-column>
			<el-table-column label="Text" prop="text"></el-table-column>

			<el-table-column
				align="center"
				header-align="center"
				width="60px"
				fixed="right"
			>
				<template slot="header">
					<el-button
						icon="el-icon-refresh"
						type="text"
						@click="refreshData"
					></el-button>
				</template>

				<template slot-scope="scope">
					<el-dropdown>
						<span class="el-dropdown-link">
							<i class="el-icon-more"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item
								icon="el-icon-edit"
								@click.native.prevent="openForm(scope.row)"
								>Edit</el-dropdown-item
							>
							<el-dropdown-item
								icon="el-icon-delete"
								@click.native.prevent="deleteData(scope.row.id)"
								>Delete</el-dropdown-item
							>
						</el-dropdown-menu>
					</el-dropdown>
				</template>
			</el-table-column>
		</el-table>

		<el-pagination
			class="mt-3"
			background
			@current-change="
				(p) => {
					pagination.current_page = p;
					getData();
				}
			"
			@size-change="
				(s) => {
					pagination.per_page = s;
					getData();
				}
			"
			layout="prev, pager, next, sizes, total"
			:page-size="Number(pagination.per_page)"
			:page-sizes="pageSizes"
			:total="pagination.total"
		></el-pagination>

		<el-dialog title="TRANSLATION" :visible.sync="showForm" width="600px">
			<el-form label-position="left" label-width="100px">
				<el-form-item label="Locale" :class="{ 'is-error': errors.locale }">
					<el-select
						v-model="form.locale"
						clearable
						placeholder="Locale"
						style="width: 100%"
					>
						<el-option
							v-for="locale in $i18n.locales"
							:key="locale.code"
							:value="locale.code"
							:label="locale.name"
						>
							<img
								:src="locale.flag"
								alt=""
								class="border mr-3"
								style="height: 15px; width: 20px"
							/>
							{{ locale.name }}
						</el-option>
					</el-select>
					<div class="el-form-item__error" v-if="errors.locale">
						{{ errors.locale.join(",") }}
					</div>
				</el-form-item>

				<el-form-item label="Key" :class="{ 'is-error': errors.key }">
					<el-input
						type="textarea"
						v-model="form.key"
						placeholder="Key"
					></el-input>
					<div class="el-form-item__error" v-if="errors.key">
						{{ errors.key.join(",") }}
					</div>
				</el-form-item>

				<el-form-item label="Text" :class="{ 'is-error': errors.text }">
					<el-input
						type="textarea"
						v-model="form.text"
						placeholder="Text"
					></el-input>
					<div class="el-form-item__error" v-if="errors.text">
						{{ errors.text.join(",") }}
					</div>
				</el-form-item>
			</el-form>

			<template #footer>
				<el-button icon="el-icon-circle-close" @click="closeForm"
					>CANCEL</el-button
				>
				<el-button type="success" icon="el-icon-circle-check" @click="save"
					>SAVE</el-button
				>
			</template>
		</el-dialog>
	</div>
</template>

<script>
import crud from "@/mixins/crud";

export default {
	layout: "admin",

	mixins: [crud],

	data: () => {
		return {
			url: "/api/lang"
		};
	}
};
</script>
