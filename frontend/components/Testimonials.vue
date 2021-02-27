<template>
	<section id="testimonials" class="section-bg">
		<div class="container" data-aos="fade-up">
			<header class="section-header">
				<h3>Testimonials</h3>
			</header>

			<div
				class="testimonials-slider swiper-container"
				data-aos="fade-up"
				data-aos-delay="100"
			>
				<carousel :per-page="1" autoplay loop>
					<slide v-for="i in 5" :key="i">
						<div class="testimonial-item">
							<img
								src="assets/img/testimonial-1.jpg"
								class="testimonial-img"
								alt=""
							/>
							<h3>Saul Goodman</h3>
							<h4>Ceo &amp; Founder</h4>
							<p>
								<img
									src="assets/img/quote-sign-left.png"
									class="quote-sign-left"
									alt=""
								/>
								Proin iaculis purus consequat sem cure digni ssim donec
								porttitora entum suscipit rhoncus. Accusantium quam, ultricies
								eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
								<img
									src="assets/img/quote-sign-right.png"
									class="quote-sign-right"
									alt=""
								/>
							</p>
						</div>
					</slide>
					<!-- End testimonial item -->
				</carousel>
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
