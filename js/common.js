document.addEventListener('DOMContentLoaded', function () {

	//Query
	const preIpoEl = document.getElementById('preipo')

	const backendAPI = 'https://pp.investlink.io'

	async function getPreIpoData() {
		try {
			let fbResponse = await axios.get(`${backendAPI}/preipo/`)
			if (fbResponse.data) {

				let data = fbResponse.data

				data.forEach(item => {
					let template = `
					<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
						<a href="https://dm.investlink.io/cabinet/invest-idea/${item.id}" class="preipo-item">
							<div class="preipo-item__img">
								<img src="${backendAPI}/${item.idea_info.poster_image_url}" alt="${item.idea_info.title}">
							</div>
						<div class="preipo-item__icon">
							<img src="${backendAPI}/${item.idea_info.icon_url}" alt="${item.idea_info.title}">
						</div>
						<div class="preipo-item__inset">
							<h4 class="preipo-item__title">${item.idea_info.title}</h4>
							<p class="preipo-item__description">${item.idea_info.short_description}</p>
							<ul class="preipo-item__tag">
								<li class="tag tag-blue">Финтех</li>
								<li class="tag tag-grey">Бизнес процессы</li>
							</ul>
						</div>
					</a>
				</div>
					`

					preIpoEl.insertAdjacentHTML('afterbegin', template)



				})

				let template = `
				 	<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
						<div class="preipo-item">
							<div class="preipo-item__img">
								<img src="images/preipo/1.jpg" alt="Outreach">
							</div>
						<div class="preipo-item__icon">
							<img src="images/preipo-icon/1.svg" alt="Outreach">
						</div>
						<div class="preipo-item__inset">
							<h4 class="preipo-item__title">${fbResponse[0].data.title}</h4>
							<p class="preipo-item__description">Intercom - разработчик платформы для общения с клиентами. </p>
							<ul class="preipo-item__tag">
								<li class="tag tag-blue">Финтех</li>
								<li class="tag tag-grey">Бизнес процессы</li>
							</ul>
						</div>
					</div>
				</div>
				 `
			}
		} catch (e) {
			console.log(e)
		}
	}

	getPreIpoData().then()


	$('.mobile-about__img').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.about-items-wrapper'
	})

	$('.about-items-wrapper').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		vertical: true,
		swipe: true,
		verticalSwiping: true,
		infinite: false,
		asNavFor: '.mobile-about__img'
	})

	$('.mobile-menu').hide();

	$('.hamburger').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('is-active');
		$('.mobile-menu').slideToggle('400');
		$('#mainTopLine').toggleClass('main-top-line');
		$('body').toggleClass('_body-lock');
	})

	$(".faq-wrapper .faq-description").hide().prev().click(function () {
		$(this).parents(".faq-wrapper").find(".faq-description").not(this).slideUp().prev().removeClass("active");
		$(this).next().not(":visible").slideDown().prev().addClass("active");
	});

	function animateValue(id, start, end, duration) {
		if (start === end) return;
		var range = end - start;
		var current = start;
		var increment = end > start ? 1 : -1;
		var stepTime = Math.abs(Math.floor(duration / range));
		var obj = document.getElementById(id);
		var timer = setInterval(function () {
			current += increment;
			obj.innerHTML = current;
			if (current == end) {
				clearInterval(timer);
			}
		}, stepTime);
	}

	// main-top-line
	// var header = $("#mainTopLine");
	// var scrollChange = 90;
	// $(window).scroll(function() {
	// 		var scroll = $(window).scrollTop();

	// 		if (scroll >= scrollChange) {
	// 				header.removeClass('main-top-line');
	// 		} else {
	// 				header.addClass("main-top-line");
	// 		}
	// });

	particlesJS("particles-js", {
		"particles": {
			"number": {
				"value": 150,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 200,
					"height": 200
				}
			},
			"opacity": {
				"value": 0.1,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 0.1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#77C850",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 6,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "grab"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 140,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	});
	
	
	/* ---- stats.js config ---- */
	
	var count_particles, stats, update;
	stats = new Stats;
	stats.setMode(0);
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.left = '0px';
	stats.domElement.style.top = '0px';
	document.body.appendChild(stats.domElement);
	count_particles = document.querySelector('.js-count-particles');
	update = function() {
		stats.begin();
		stats.end();
		if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
			count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
		}
		requestAnimationFrame(update);
	};
	requestAnimationFrame(update);

})
