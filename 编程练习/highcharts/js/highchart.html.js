$(function(){
	Highcharts.theme = {
	colors: ["#7cb5ec", "#55BF3B","#f7a35c", "#90ee7e", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
		 "#DF5353", "#7798BF", "#aaeeee"],
	chart: {
		backgroundColor: null,
		style: {
			fontFamily: "Dosis, sans-serif"
		}
	},
	title: {
		style: {
			fontSize: '16px',
			fontWeight: 'bold',
			textTransform: 'uppercase'
		}
	},
	tooltip: {
		borderWidth: 0,
		backgroundColor: 'rgba(219,219,216,0.8)',
		shadow: false
	},
	legend: {
		itemStyle: {
			fontWeight: 'bold',
			fontSize: '13px'
		}
	},
	
	
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
	$('#container1').highcharts({
		chart:{
			type:'areaspline',
			backgroundColor:'#fcfaf2'
		},
		title:{
			text:'Average fruit consumption during one week',
			style:{
				color:'#592c63',
				fontFamily:'微软雅黑',
				fontSize:'20px'
			},
			x:0,
			y:15
		},
		legend:{
			align:'left',
			layout:'horizontal',
			verticalAlign:'top',
			floating:true,
			x:70,
			y:0

		},
		xAxis:{
			categories:[
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday',
				'Sunday'
			],
			labels:{
				rotation:-45
			}
		},
		yAxis:{
			title:{
				text:'Fruit units'
			}
		},
		plotOptions:{
			areaspline:{
				fillOpacity:0.5,
			}
		},
		series: [{
            name: 'John',
            data: [3, 4, 3, 5, 4, 10, 12]
        }, {
            name: 'Jane',
            data: [1, 3, 4, 3, 3, 5, 4]
        }]

	})
})