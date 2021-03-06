<template>
	<section id="hero">
		<div class="hero-container">
			<div
				id="heroCarousel"
				class="carousel slide carousel-fade"
				data-bs-ride="carousel"
				data-bs-interval="5000"
			>
				<ol id="hero-carousel-indicators" class="carousel-indicators"></ol>

				<div class="carousel-inner" role="listbox">
					<div
						v-for="(slide, index) in slides"
						:key="index"
						class="carousel-item"
						style="background-image: url(assets/img/hero-carousel/1.jpg)"
					>
						<div class="carousel-container">
							<div class="container">
								<!-- <h2 class="animate__animated animate__fadeInDown">
									We are professional
								</h2>
								<p class="animate__animated animate__fadeInUp">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
								</p>
								<a
									href="#featured-services"
									class="btn-get-started scrollto animate__animated animate__fadeInUp"
									>Get Started</a
								> -->
							</div>
						</div>
					</div>
				</div>

				<a
					class="carousel-control-prev"
					href="#heroCarousel"
					role="button"
					data-bs-slide="prev"
				>
					<span
						class="carousel-control-prev-icon bi bi-chevron-left"
						aria-hidden="true"
					></span>
				</a>

				<a
					class="carousel-control-next"
					href="#heroCarousel"
					role="button"
					data-bs-slide="next"
				>
					<span
						class="carousel-control-next-icon bi bi-chevron-right"
						aria-hidden="true"
					></span>
				</a>
			</div>
		</div>
	</section>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          img: 'assets/img/hero-carousel/1.jpg',
          title: '',
          description: ''
        },
        {
          img: 'assets/img/hero-carousel/2.jpg',
          title: '',
          description: ''
        },
        {
          img: 'assets/img/hero-carousel/3.jpg',
          title: '',
          description: ''
        },
        {
          img: 'assets/img/hero-carousel/4.jpg',
          title: '',
          description: ''
        },
        // {
        //   img: '/assets/img/hero-carousel/5.jpg',
        //   title: '',
        //   description: ''
        // },
      ]
    }
  }
}
</script>

<style>
</style>
