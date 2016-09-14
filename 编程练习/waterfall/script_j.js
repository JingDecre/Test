$(window).on('load',function(){
	waterfall();
	var dataInt = {'data':[{'src':'22.jpg'},{'src':'23.jpg'},{'src':'24.jpg'},{'src':'25.jpg'},{'src':'26.jpg'},{'src':'27.jpg'}]};
	$(window).on('scroll',function(){
		if(checkScroll){
			$.each(dataInt.data,function(index,element){
				var oPin = $('<div>').addClass('pin').appendTo($('#main'));
				var oBox = $('<div>').addClass('box').appendTo(oPin);
				$('<img>').attr('src','./images/'+$(element).attr('src')).appendTo(oBox);
				waterfall();
			})
		}
	});

})

function waterfall(){
	var $boxs = $('#main>div');
	var w = $boxs.eq(0).outerWidth();
	var cols =Math.floor($(window).width()/w) ;
	$('#main').width(w*cols).css('margin','0 auto');
	var hArr=[];
	$.each($boxs,function(index,element){
		var h = $boxs.eq(index).outerHeight();
		if(index < cols){
			hArr[index] = h;
		}else{
			var minH = Math.min.apply(null,hArr);
			var minHIndex = $.inArray(minH,hArr);
			$boxs.eq(index).css({
				'position':'absolute',
				'top':minH +'px',
				'left': $boxs.eq(minHIndex).position().left
			});
			hArr[minHIndex] +=$boxs.eq(index).outerHeight();
		}

	})
}

function checkScroll(){
	var $boxs = $('#main>div');
	var lastBoxH = $boxs.last().get(0).offsetTop + Math.floor($boxs.last().height()/2);
	var scrollTop = $(window).scrollTop();
	var documentH = $(document).height();
	return lastBoxH<(scrollTop+documentH)?true:false;
}