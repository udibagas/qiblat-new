<template>
	<div>
		<el-page-header @back="$router.go(-1)" content="SLIDES"> </el-page-header>

		<el-row :gutter="15" class="mt-5">
			<el-col
				:xs="24"
				:sm="24"
				:md="12"
				:lg="8"
				:xl="6"
				v-for="(slide, index) in allSlides"
				:key="index"
			>
				<el-card class="mb-3" shadow="hover" :body-style="{ padding: '0' }">
					<el-image style="height: 200px; width: 100%" :src="slide.img">
					</el-image>

					<el-progress
						class="m-3"
						:percentage="uploadProgress"
						v-if="showUploadProgress"
					></el-progress>

					<div class="text-center">
						<el-button
							type="text"
							icon="el-icon-upload2"
							@click="selectFile(index)"
						>
							{{ $t("Upload Image") }}
						</el-button>
					</div>

					<el-form class="p-3">
						<el-form-item>
							<el-input
								v-model="slide.title"
								placeholder="Title"
								@change="save"
							></el-input>
						</el-form-item>
						<el-form-item>
							<el-input
								@change="save"
								type="textarea"
								rows="5"
								v-model="slide.description"
								placeholder="Description"
							></el-input>
						</el-form-item>

						<el-row :gutter="10">
							<el-col :span="index < slides.length - 1 ? 12 : 24">
								<el-button
									type="primary"
									class="btn-block"
									size="small"
									icon="el-icon-check"
									>SAVE</el-button
								>
							</el-col>
							<el-col :span="12">
								<el-button
									v-if="index < slides.length - 1"
									type="danger"
									icon="el-icon-delete"
									class="btn-block"
									size="small"
								>
									DELETE
								</el-button>
							</el-col>
						</el-row>
					</el-form>
				</el-card>
			</el-col>
		</el-row>

		<!-- <input type="file" id="file" style="display: none" /> -->
	</div>
</template>

<script>
export default {
  layout: 'admin',

  async asyncData({$axios}) {
    const component = await $axios.$get(`api/component/Slider`);
    return { component };
  },

  computed: {
    allSlides() {
      this.slides.push({title: '', description: '', img: ''});
      return this.slides;
    }
  },

  data() {
    return {
      slides: [],
      uploadProgress: 0,
      showUploadProgress: false,
      componentName: 'Slider'
    }
  },

  methods: {
    selectFile(index) {
      let el = document.createElement('input');
      el.type = 'file';
      el.style = 'display:none';
      document.body.appendChild(el);
      el.click();
      el.addEventListener('change', (event) => this.upload(event, index))
      el.remove();
    },

    upload(event, index) {
      let formData = new FormData();
      formData.append('file', event.target.files[0]);

      this.showUploadProgress = true;
      this.$axios.$post('api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: progressEvent => {
          this.uploadProgress = Math.round( (progressEvent.loaded * 100) / progressEvent.total);
        }
      }).then(response => {
        console.log(response)
        this.slides[index].attachment = response;
      }).catch(error => {
        this.$message({
          message: error.response.data.message,
          type: 'error',
          showClose: true
        });
      }).finally(() => {
        this.uploadProgress = 0;
        this.showUploadProgress = false;
      })
    },

    save() {
      this.$axios.$put('api/component/Slider')
    }
  }

}
</script>

<style>
</style>
