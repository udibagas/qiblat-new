<template>
	<section id="clients">
		<div class="container" data-aos="zoom-in">
			<header class="section-header">
				<h3>Our Clients</h3>
			</header>

			<div class="clients-slider swiper-container">
				<carousel class="align-items-center" :per-page="5" autoplay loop>
					<slide>
						<img
							src="assets/img/clients/client-1.png"
							class="img-fluid"
							alt=""
						/>
					</slide>
					<slide>
						<img
							src="assets/img/clients/client-2.png"
							class="img-fluid"
							alt=""
						/>
					</slide>
					<slide>
						<img
							src="assets/img/clients/client-3.png"
							class="img-fluid"
							alt=""
						/>
					</slide>
					<slide>
						<img
							src="assets/img/clients/client-4.png"
							class="img-fluid"
							alt=""
						/>
					</slide>
					<slide>
						<img
							src="assets/img/clients/client-5.png"
							class="img-fluid"
							alt=""
						/>
					</slide>
					<slide>
						<img
							src="assets/img/clients/client-6.png"
							class="img-fluid"
							alt=""
						/>
					</slide>
					<slide>
						<img
							src="assets/img/clients/client-7.png"
							class="img-fluid"
							alt=""
						/>
					</slide>
					<slide>
						<img
							src="assets/img/clients/client-8.png"
							class="img-fluid"
							alt=""
						/>
					</slide>
				</carousel>
			</div>
		</div>
	</section>
</template>

<script>
export default {
  mounted() {
  }
}
</script>
