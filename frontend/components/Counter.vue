<template>
	<section id="facts">
		<div class="container" data-aos="fade-up">
			<header class="section-header">
				<h3>Pencapaian Donasi</h3>
				<p>
					Berikut adalah pencapaian donasi yang sudah kami kumpulkan dan
					distribusikan
				</p>
			</header>

			<div class="d-flex flex-wrap justify-content-center counters">
				<div
					class="text-center"
					v-for="counter in counters"
					:key="counter.title"
					style="min-width: 300px"
				>
					<div
						class="mb-3"
						style="
							border: 2px solid #00e36b;
							border-radius: 50%;
							width: 100px;
							height: 100px;
							margin: 0 auto;
						"
					>
						<img
							style="width: 60px; margin: 20px auto"
							:src="counter.img"
							alt=""
						/>
					</div>
					<span
						data-purecounter-start="0"
						:data-purecounter-end="counter.count"
						data-purecounter-duration="1"
						class="purecounter"
						>{{ counter.counter_label }}</span
					>
					<p class="font-weight-bold">{{ counter.title }}</p>
				</div>
			</div>

			<!-- <div class="facts-img">
				<img style="width:80px" src="assets/img/facts-img.png" alt="" class="img-fluid" />
			</div> -->
		</div>
	</section>
</template>

<script>
export default {
  data() {
    return {
      counters: [
        {
          img: '/assets/img/counter-icon/4.png',
          title: 'Motor Da\'wah',
          count: '27',
          label_count: '27'
        },
        {
          img: '/assets/img/counter-icon/1.png',
          title: 'Sumur',
          count: '3547',
          label_count: '3547'
        },
        {
          img: '/assets/img/counter-icon/5.png',
          title: 'Content Da\'wah',
          count: '600000',
          label_count: '600.000'
        },
        {
          img: '/assets/img/counter-icon/2.png',
          title: 'Mushaf Al Quran',
          count: '400000',
          label_count: '400.000'
        },
        {
          img: '/assets/img/counter-icon/3.png',
          title: 'Masjid',
          count: '537',
          label_count: '537'
        },
      ]
    }
  }
}
</script>

<style>
</style>
