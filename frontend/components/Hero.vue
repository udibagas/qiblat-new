<template>
	<el-carousel :interval="4000" height="100vh">
		<el-carousel-item v-for="(slider, i) in sliders" :key="i">
			<img :src="slider.img" style="width: 100%" alt="" />
			<!-- <h3 class="medium">{{ item }}</h3> -->
		</el-carousel-item>
	</el-carousel>
</template>

<script>
export default {
  data() {
    return {
      sliders: [
        {
          img: '/assets/img/hero-carousel/1.jpg',
          title: '',
          description: ''
        },
        {
          img: '/assets/img/hero-carousel/2.jpg',
          title: '',
          description: ''
        },
        {
          img: '/assets/img/hero-carousel/3.jpg',
          title: '',
          description: ''
        },
        {
          img: '/assets/img/hero-carousel/4.jpg',
          title: '',
          description: ''
        },
        {
          img: '/assets/img/hero-carousel/5.jpg',
          title: '',
          description: ''
        },
      ]
    }
  }

}
</script>

<style>
/* .el-carousel__item h3 {
	color: #475669;
	font-size: 14px;
	opacity: 0.75;
	line-height: 200px;
	margin: 0;
} */

.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
	background-color: #d3dce6;
}
</style>
