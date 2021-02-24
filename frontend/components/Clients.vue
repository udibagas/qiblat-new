<template>
	<section id="clients">
		<div class="container" data-aos="zoom-in">
			<header class="section-header">
				<h3>Our Clients</h3>
			</header>

			<div class="clients-slider swiper-container">
				<div class="swiper-wrapper align-items-center">
					<div class="swiper-slide">
						<img
							src="assets/img/clients/client-1.png"
							class="img-fluid"
							alt=""
						/>
					</div>
					<div class="swiper-slide">
						<img
							src="assets/img/clients/client-2.png"
							class="img-fluid"
							alt=""
						/>
					</div>
					<div class="swiper-slide">
						<img
							src="assets/img/clients/client-3.png"
							class="img-fluid"
							alt=""
						/>
					</div>
					<div class="swiper-slide">
						<img
							src="assets/img/clients/client-4.png"
							class="img-fluid"
							alt=""
						/>
					</div>
					<div class="swiper-slide">
						<img
							src="assets/img/clients/client-5.png"
							class="img-fluid"
							alt=""
						/>
					</div>
					<div class="swiper-slide">
						<img
							src="assets/img/clients/client-6.png"
							class="img-fluid"
							alt=""
						/>
					</div>
					<div class="swiper-slide">
						<img
							src="assets/img/clients/client-7.png"
							class="img-fluid"
							alt=""
						/>
					</div>
					<div class="swiper-slide">
						<img
							src="assets/img/clients/client-8.png"
							class="img-fluid"
							alt=""
						/>
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
		</div>
	</section>
</template>

<script>
import Swiper from 'swiper';

export default {
  mounted() {
    new Swiper('.clients-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 20
        }
      }
    });
  }
}
</script>
