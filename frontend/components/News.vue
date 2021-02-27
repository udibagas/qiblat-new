<template>
	<section id="testimonials" class="section-bg">
		<div class="container" data-aos="fade-up">
			<header class="section-header">
				<h3>BERITA DAN ARTIKEL</h3>
			</header>

			<div data-aos="fade-up" data-aos-delay="100">
				<carousel :per-page="3" autoplay loop>
					<slide v-for="i in 10" :key="i">
						<div class="card mx-3">
							<div style="height: 224px;overflow-hidden">
								<img
									src="assets/img/hero-carousel/3.jpg"
									style="height: 224px"
								/>
							</div>
							<div class="card-body">
								<a href=""
									><h3>37 Sumur telah selesai digali bulan September</h3></a
								>
								<div class="text-muted mb-3">02 Nov 2020</div>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Possimus, quis sapiente temporibus, odit omnis nemo repudiandae
								illo perspiciatis eius maiores voluptatem magnam doloribus
								officia quisquam iusto rerum voluptas non ad.
							</div>
						</div>
					</slide>
				</carousel>

				<!-- <div class="row">
					<div class="col-md-3 mb-3" v-for="i in 8" :key="i">
						<div class="card">
							<div style="overflow: hidden" class="mr-3">
								<img
									src="assets/img/hero-carousel/3.jpg"
									style="height: 200px"
								/>
							</div>
							<div class="card-body">
								<a href=""
									><h5 class="mb-1">
										37 Sumur telah selesai digali bulan September
									</h5></a
								>
								<div class="text-muted mb-3">02 Nov 2020</div>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Possimus, quis sapiente temporibus, odit omnis
							</div>
						</div>
					</div>
				</div> -->
			</div>
		</div>
	</section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: { Carousel, Slide }
}
</script>

<style>
</style>
