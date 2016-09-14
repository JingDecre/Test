requirejs.config({
	paths: {
		jquery: 'jquery',
		validate:'validate'
	}
});

requirejs(['jquery','validate'], function($,validate) { //$用来指代模块的这里表示'jquery'模块
	$('body').css('background-color','red');
	console.log(validate.isEqual(1,1));
});
