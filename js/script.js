$(document).ready(function(){
	mainBanner();
	if ($(window).width() > 980) {
	   stickyNavbar();
	}
	mobileNavbar();
	popup();
	// eastZoom();
	// masonryGrid();
	// productdropDown();

	

	

	// $('.grid__masonry').masonry({
 //      "itemSelector": ".grid__masonry__li"
 //    });
});

var isproductdetail = document.getElementsByClassName('product-detail');   
if (isproductdetail.length > 0){
    $(document).ready(function(){
        eastZoom();
    });
}
var ispayment = document.getElementsByClassName('payment');   
if (ispayment.length > 0){
    $(document).ready(function(){
        uploadFile();
    });
}
var isaccount = document.getElementsByClassName('account');   
if (isaccount.length > 0){
    $(document).ready(function(){
        accountTab();
    });
}
var iscontact = document.getElementsByClassName('contact');   
if (iscontact.length > 0){
    $(document).ready(function(){
        masonryGrid();
    });
}




function stickyNavbar(){
	  if($(document).scrollTop() > 64){
	  	$('#main-navbar').addClass('sticky');
	  }
	  else{
	  	$('#main-navbar').removeClass('sticky');
	  }
	$(window).scroll(function(){
	  var sticky = $('#main-navbar'),
	      scroll = $(window).scrollTop();

	  if (scroll >= 65) sticky.addClass('sticky');
	  else sticky.removeClass('sticky');
	});
}

function uploadFile(){
  $(document).on('change', '.input__file__upload', function() {

    var fileName = $(this).val().replace('C:\\fakepath\\', '');

    console.log(fileName);

    $(this).parents('.input__file__wrap').find('.input-text').text(fileName);

  });
}

function productdropDown(){
	$('.product__filter__trigger').on('click', function(){

		if(!$(this).hasClass('clicked')){
			$(this).parents('.product__filter__list').addClass('open');
			$(this).addClass('clicked');
		}
		else{
			$(this).parents('.product__filter__list').removeClass('open');
			$(this).removeClass('clicked');
		}
	});
}

function mainBanner(){
	var mySwiper = new Swiper ('.swiper-container', {
	    // Optional parameters
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	    slidesPerView: 1,	
	    loop: true,
	    autoHeight: true,
        autoplay: 2000,
        effect: 'fade',
        fade: { crossfade: true },
        speed: 1300
	})  
}

function eastZoom(){
	var zoomConfig = $('#zoom_01').elevateZoom({
		zoomType: "inner",
		cursor: "crosshair",
		gallery:'gallery_01',
		galleryActiveClass: 'active'
	});

	$('.product__preview__item__link').on('click', function(){
		$('.product__preview__item').removeClass('active');
		$(this).parents('.product__preview__item').addClass('active');
	});

}

function masonryGrid(){
	$('.grid__masonry').masonry({
      "itemSelector": ".grid__masonry__li",
      percentPosition: true
    });
}

function mobileNavbar(){
	$(document).on('click', '#mobile-navbar-popup', function(){
		$('body').addClass('show-mobile-navbar');
	})

	$(document).on('click', '#mobile-navbar-close', function(){
		$('body').removeClass('show-mobile-navbar');
	})
}

function popup(){
	$(document).on('click', '#checkout-shipping', function(){
		$('body').addClass('show-popup');
	});

	$(document).on('click', '#close-popup', function(){
		$('body').removeClass('show-popup');
		$('#select-ship-address').val('');
		$('#ship-new-address').slideUp(300);	
	});

	$(document).on('change', '#select-ship-address', function(){

		// $(this).find("option:selected").each(function(){
		// 	console.log('asd');
		// 	if($(this).attr('value') == 'New'){
		// 		$('#ship-new-address').slideDown({
		// 			duration: 400,
  //                   easing: 'easeOutCubic'
		// 		});
		// 	}
		// 	else{
		// 		$('#ship-new-address').slideUp({
		// 			duration: 400,
  //                   easing: 'easeOutCubic'
		// 		});	
		// 	}

		// });


		$(this).find("option:selected").each(function(){
			console.log('asd');
			if($(this).attr('value') == 'New'){
				$('#ship-new-address').slideDown(300);
			}
			else{
				$('#ship-new-address').slideUp(300);	
			}

		});

	});

	// LOGIN
	$('#login-trigger').on('click', function(){
		$('body').addClass('show-popup-login');
	});

	// REGISTER
	$('#register-trigger').on('click', function(){
		$('body').addClass('show-popup-register');
	});

	// CLOSE
	$('.popup__overlay').on('click', function(event){
		if( $(event.target).is('.popup__overlay ') || $(event.target).is('.close-trigger') ) {
		  	$('body').removeClass('show-popup-register');
			$('body').removeClass('show-popup-login');
			$('body').removeClass('show-popup');
		}
	});
}

function accountTab(){
	// TAB
	$('.account__content__wrap:first').show();
	$('.account__sidebar li a').on('click', function(){
		var id = $(this).attr('id');

		$('#' + id + '-content').fadeIn(400).addClass();
		$('.account__content__wrap').not($('#' + id + '-content')).hide();
		$('.sidebar__item').removeClass('active__tab')
		$(this).parents('.sidebar__item').addClass('active__tab');
	});


	// INSIDE TAB
	$('#btn-edit-profile').on('click', function(){
		$('#edit-profile').fadeIn(400);
		$(this).parents('.list__profile').hide();
	});
	$('.btn-show-profile').on('click', function(){
		$('#show-profile').fadeIn(400);
		$(this).parents('.form__profile').hide();
	});


	$('.btn-edit-address').on('click', function(){
		$('#form-address').fadeIn(400);
		$(this).parents('.list__address').hide();
	});
	$('.btn-show-address').on('click', function(){
		$('#address-list').fadeIn(400);
		$(this).parents('.form__adress').hide();
	});


	// ORDER HISTORY
	$('.detail__order').on('click', function(){
		$('#order-history-detail').fadeIn(400);
		$(this).parents('#order-history').hide();
	});
	$('.order__history__back').on('click', function(){
		$('#order-history').fadeIn(400);
		$(this).parents('#order-history-detail').hide();
	});
}



	// (function() {
	// 	// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
	// 	if (!String.prototype.trim) {
	// 		(function() {
	// 			// Make sure we trim BOM and NBSP
	// 			var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	// 			String.prototype.trim = function() {
	// 				return this.replace(rtrim, '');
	// 			};
	// 		})();
	// 	}

	// 	[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
	// 		// in case the input is already filled..
	// 		if( inputEl.value.trim() !== '' ) {
	// 			classie.add( inputEl.parentNode, 'input--filled' );
	// 		}

	// 		// events:
	// 		inputEl.addEventListener( 'focus', onInputFocus );
	// 		inputEl.addEventListener( 'blur', onInputBlur );
	// 	} );

	// 	function onInputFocus( ev ) {
	// 		classie.add( ev.target.parentNode, 'input--filled' );
	// 	}

	// 	function onInputBlur( ev ) {
	// 		if( ev.target.value.trim() === '' ) {
	// 			classie.remove( ev.target.parentNode, 'input--filled' );
	// 		}
	// 	}
	// })();