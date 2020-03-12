$('html').on('click','.img-click',function() {
	console.log('click');
    var select = $(this).attr('data-img');
    $('.img-click').css("opacity","0.5");
    $(this).css("opacity","1");
    $('html').find('div.slides ul li').removeClass('hienlen');
    $('html').find('div.slides ul li .ani-text-product h1').removeClass('style-ani-1');
    $('html').find('div.slides ul li .move-text p').removeClass('style-text-ani');
    $('html').find('div.slides ul li .bg-ani').removeClass('style-bg-ani');
    $('html').find('div.slides ul li#' + select).addClass("hienlen");
     $('html').find('div.slides ul li#' + select).find('.ani-text-product h1').addClass("style-ani-1");
      $('html').find('div.slides ul li#' + select).find('.move-text p').addClass("style-text-ani");
       $('html').find('div.slides ul li#' + select).find('.bg-ani').addClass("style-bg-ani");
});



document.addEventListener("DOMContentLoaded", function() {
	/* SLIDE */
	var list_img = document.querySelectorAll('.list-img li');
	var nut = document.querySelectorAll('div.nut ul li'),
		nuttrai = nut[0],
		nutphai = nut[1];
	var slides = document.querySelectorAll('div.slides ul li')
	var cuoicung = slides.length - 1;
	chuyenslide = function(){
		var vitrislideht = 0
		var slideht = document.querySelector('ul li.hienlen');
		for(var i = 0; slideht = slideht.previousElementSibling; vitrislideht++){

		}

		for(var i = 0; i < slides.length; i++){
			slides[i].classList.remove('hienlen');
		}
		if(vitrislideht == 0){
			vitrislideht = cuoicung + 1;
			slides[vitrislideht-1].classList.add('hienlen');
		}
		else{
		slides[vitrislideht-1].classList.add('hienlen');
		list_img[vitrislideht-1].style.opacity = '1';
		}

	}

	chuyenslidep = function(){

		var vitrislideht = 0;
		var slideht = document.querySelector('ul li.hienlen');
		for(var i = 0; slideht = slideht.previousElementSibling; vitrislideht++){

		}

		for(var i = 0; i < slides.length; i++){
			slides[i].classList.remove('hienlen');

		}
		if(vitrislideht == cuoicung){
			vitrislideht = -1;

		}

		slides[vitrislideht+1].classList.add('hienlen');
		list_img[vitrislideht+1].style.opacity = '1';
	}

	var text_big = document.querySelectorAll('.ani-text-product h1');

	/* AUTO - SLIDE */
	    auto();
    function auto(){
//     var thoigian = setInterval(function(){
//
// 		var vitrislideht = 0;
// 		var slideht = document.querySelector('ul li.hienlen');
// 		for(var i = 0; slideht = slideht.previousElementSibling; vitrislideht++){
//
// 		}
// 		for(var i = 0; i < slides.length; i++){
//
// 			slides[i].classList.remove('hienlen');
// 		}
// 		if(vitrislideht == cuoicung){
// 			vitrislideht = -1;
//
// 		}
//
// 		slides[vitrislideht+1].classList.add('hienlen');
//
//
//     },3000)
// // Tu dong chuyen slide
// 	var imgClick = document.querySelectorAll('.img-click');
//     for(var i = 0; i < imgClick.length; i++){
//         nuttrai.addEventListener('click',function () {
//             clearInterval(thoigian);
//
//         })
//         nutphai.addEventListener('click',function () {
//             clearInterval(thoigian);
//
//         })
//         imgClick[i].addEventListener('click',function () {
//             clearInterval(thoigian);
//
//         })
//     }

}

	nuttrai.addEventListener('click',chuyenslide);
	nutphai.addEventListener('click',chuyenslidep);


},false);