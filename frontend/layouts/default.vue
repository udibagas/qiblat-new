<template>
	<div>
		<Header />
		<Nuxt />
		<Footer />

		<a
			href="#"
			class="back-to-top d-flex align-items-center justify-content-center"
			><i class="bi bi-arrow-up-short"></i
		></a>
	</div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  head() {
    return {
      title: 'Yayasan Qiblat',
      meta: [
        {name: 'description', content: ''},
        {name: 'keywords', content: ''},
      ],
      link: [
        { rel: 'icon', href: '/assets/img/favicon.png'},
        { rel: 'apple-touch-icon', href: '/assets/img/apple-touch-icon.png'},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Montserrat:300,400,500,700'},
        { rel: 'stylesheet', href: '/assets/vendor/animate.css/animate.min.css'},
        { rel: 'stylesheet', href: '/assets/vendor/aos/aos.css'},
        { rel: 'stylesheet', href: '/assets/vendor/bootstrap/css/bootstrap.min.css'},
        { rel: 'stylesheet', href: '/assets/vendor/bootstrap-icons/bootstrap-icons.css'},
        { rel: 'stylesheet', href: '/assets/vendor/glightbox/css/glightbox.min.css'},
        { rel: 'stylesheet', href: '/assets/css/style.css'},
      ],
      script: [
        // { src: '/assets/vendor/aos/aos.js', body: true },
        { src: '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js', body: true },
        // { src: '/assets/vendor/glightbox/js/glightbox.min.js', body: true },
        { src: '/assets/vendor/isotope-layout/isotope.pkgd.min.js', body: true },
        { src: '/assets/vendor/php-email-form/validate.js', body: true },
        { src: '/assets/vendor/purecounter/purecounter.js', body: true },
        { src: '/assets/vendor/waypoints/noframework.waypoints.js', body: true },
        { src: '/assets/js/main.js', body: true },
      ]
    }
  },

  mounted() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
}
</script>
