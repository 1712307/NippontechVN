
$('html').on('click','.btn-introduce button', function() {
	var btn = $(this).attr('data-intro');
		$('.btn-introduce button').removeClass('active');
	$(this).addClass('active');	
	$('html').find('.content-introduce').hide();
	$('html').find('.content-introduce#' + btn).show();
	console.log('btn');

});

