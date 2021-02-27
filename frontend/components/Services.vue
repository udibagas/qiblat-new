<template>
	<section id="services">
		<div class="container" data-aos="fade-up">
			<header class="section-header wow fadeInUp">
				<h3>PROGRAM KAMI</h3>
				<p>
					Berikut adalah beberapa program yang kami kelola yang Anda bisa turut
					berpartisipas di dalamnya.
				</p>
			</header>

			<div class="row">
				<div
					v-for="program in programs"
					:key="program.title"
					class="col-lg-4 col-md-6 box"
					data-aos="fade-up"
					data-aos-delay="300"
				>
					<div class="card shadow" style="height: 180px">
						<div class="card-body">
							<!-- <div class="icon"><i class="bi bi-bar-chart"></i></div> -->
							<img
								:src="program.img"
								class="icon"
								style="width: 100px; margin-right: 20px"
								alt=""
							/>
							<h4 class="title ml-3">
								<a href="">{{ program.title }}</a>
							</h4>
							<p class="description ml-3">
								{{ program.description }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {

  data() {
    return {
      programs: [
        {
          img: '/assets/img/program/mushaf.png',
          title: 'Percetakan Mushaf',
          description: '"Barangsiapa yang membaca Al Qu\'ran maka setian hurufnya akan mendapatkan kebaikan"'
        },
        {
          img: '/assets/img/program/masjid.png',
          title: 'Pembangunan Masjid',
          description: '"Barangsiapa yang membangun masjid maka allah akan bangunkan baginya semisalnya di surga"'
        },
        {
          img: '/assets/img/program/sumur.png',
          title: 'Penggalian Sumur',
          description: '"Sedekah terbaik adalah menyediakan air"'
        },
        {
          img: '/assets/img/program/dai.png',
          title: 'Pengiriman Da\'i',
          description: '“Siapakah yang lebih baik perkataannya daripada orang yang menyeru kepada Allah, mengerjakan amal yang saleh, ...'
        },
        {
          img: '/assets/img/program/imam.png',
          title: 'Pengiriman Imam',
          description: '“Barangsiapa menunjukkan kepada suatu kebaikan, ia akan mendapatkan pahala orang yang melakukannya”'
        },
        {
          img: '/assets/img/program/mujamma.png',
          title: 'Mujamma\' Ta\'limi (Islamic Center)',
          description: 'Melahirkan generasi Qur\'ani dan menghapus kejahilan dari mereka dengan ilmu dan tarbiyyah'
        },
        {
          img: '/assets/img/program/sedekah.png',
          title: 'Sedekah',
          description: 'Tidak akan berkurang harta karena sedekah'
        },
        {
          img: '/assets/img/program/tahfidz.png',
          title: 'Tahfidz Al Qua\'an',
          description: '"Sebaik-baik kalian adalah orang yang belajar Al-Qur\'an dan mengajarkannya"'
        },
        {
          img: '/assets/img/program/op-karyawan.png',
          title: 'Operasional Karyawan',
          description: '"Sesungguhnya orang yang paling baik yang engkau ambil pekerja ialah yang kuat dan dapat dipercaya"'
        },
        {
          img: '/assets/img/program/makan.png',
          title: 'Makan Untuh Dhuafa',
          description: 'Pembagian makan dan program dakwah untk dhuafa'
        },
        {
          img: '/assets/img/program/sedekah1.png',
          title: 'Sedekah Harian',
          description: 'Donasikan berapa saja yang Anda inginkan dalam sekali donasi, kemudian Kami menyalurkannya setiap pagi untuk Anda dengan jumlah 1 Dolar Amerika setiap hari (atau sesuai keinginan Anda)'
        },
      ]
    }
  }

}
</script>

<style>
</style>
