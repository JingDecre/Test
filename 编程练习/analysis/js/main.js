requirejs.config({
	paths:{
		jquery:'jquery',
		highchart:'highcharts'
	}
});
requirejs(['jquery','ana'],function($,ana){
	ana.container_1();
	ana.container_2();
	ana.container_3();
	ana.container_4();
});


