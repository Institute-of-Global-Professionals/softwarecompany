$(document).ready(function(){
    //LANGUAGE SECTION
    $(document).ready(function(){
        $('.button').click(function(){
          $('ul').toggleClass('active')
        })
     });

     // STICKY MENU JS
     $(".js--sticky-menu").waypoint(function(direction){
      if(direction == "down"){
        $("nav").addClass("sticky");
      }else{
        $("nav").removeClass("sticky");
      }
    });

     // PAGEUP SECTION
     $(window).scroll(function(){
      if($(this).scrollTop() > 40){
        $('#topBtn').fadeIn();
      }else{
        $('#topBtn').fadeOut();
      }
      });

      $("#topBtn").click(function(){
        $('html,body').animate({scrollTop: 0},900)
       });

      // MIXIT UP BY WORK SECTION 
      var mixer = mixitup('.portfolio-container');

     // POPUP IMAGE GALLERY SECTION
     $('.portfolio-container').magnificPopup({
      delegate: '.a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1]
     },
     image: {
       tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
       titleSrc: function(item) {
       return item.el.attr('title') + '<small>by Mh Software Company</small>';
     }
   }
  });

  // CLIENT REVIEW SECTION 
  $('.owl-carousel').owlCarousel({
		margin: 15,
		items: 3,
		loop: true,
		autoplay: false,
		autoplayTimeou: 5000,
		responsiveClass: true,
		responsiveRefreshRate: true,
		responsive:{
			0:{
				items: 1
			},
			768:{
				items: 2
			},
			1000:{
				items: 3
			},
			1200:{
				items: 3
			},
			1920:{
				items: 3
			},
		}  		
	});

  // SMOOTH SCROLL ROE IE/ EDGE/ SAFARI
	$("a").on('click', function(event){
		
		if(this.hash !== "") {
			event.preventDefault();
			
			var hash = this.hash;
			
			$('html, body').animate({
			scrollTop: $(hash).offset().top
			}, 300, function(){
				window.location.hash = hash;
			});
		}
	});
  
});

// PAGE LOADING SECTION
$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).css({
      'overflow': 'visible'
  });
});

// MOBILE MENU
function openNav(){
  document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
  document.getElementById("myNav").style.width = "0%";
}

// FAQ SECTION
const accordion = document.getElementsByClassName('contentBox');
   
   for (i = 0; i<accordion.length; i++){
     accordion[i].addEventListener('click', function(){
	   this.classList.toggle('active')
	 });
}
