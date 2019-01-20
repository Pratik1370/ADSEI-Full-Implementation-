/**
 * Resize function without multiple trigger
 * 
 * Usage:
 * $(window).smartresize(function(){  
 *     // code here
 * });
 */
(function ($, sr) {
	// debouncing function from John Hann
	// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
	var debounce = function (func, threshold, execAsap) {
		var timeout;

		return function debounced() {
			var obj = this, args = arguments;
			function delayed() {
				if (!execAsap)
					func.apply(obj, args);
				timeout = null;
			}

			if (timeout)
				clearTimeout(timeout);
			else if (execAsap)
				func.apply(obj, args);

			timeout = setTimeout(delayed, threshold || 100);
		};
	};

	// smartresize 
	jQuery.fn[sr] = function (fn) { return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery, 'smartresize');
/**
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/

var CURRENT_URL = window.location.href.split('#')[0].split('?')[0],
	$BODY = $('body'),
	$MENU_TOGGLE = $('#menu_toggle'),
	$SIDEBAR_MENU = $('#sidebar-menu'),
	$SIDEBAR_FOOTER = $('.sidebar-footer'),
	$LEFT_COL = $('.left_col'),
	$RIGHT_COL = $('.right_col'),
	$NAV_MENU = $('.nav_menu'),
	$FOOTER = $('footer');


// /Sidebar

var randNum = function () {
	return (Math.floor(Math.random() * (1 + 40 - 20))) + 20;
};


// Panel toolbox
$(document).ready(function () {
	$('.collapse-link').on('click', function () {
		var $BOX_PANEL = $(this).closest('.x_panel'),
			$ICON = $(this).find('i'),
			$BOX_CONTENT = $BOX_PANEL.find('.x_content');

		// fix for some div with hardcoded fix class
		if ($BOX_PANEL.attr('style')) {
			$BOX_CONTENT.slideToggle(200, function () {
				$BOX_PANEL.removeAttr('style');
			});
		} else {
			$BOX_CONTENT.slideToggle(200);
			$BOX_PANEL.css('height', 'auto');
		}

		$ICON.toggleClass('fa-chevron-up fa-chevron-down');
	});

	$('.close-link').click(function () {
		var $BOX_PANEL = $(this).closest('.x_panel');

		$BOX_PANEL.remove();
	});
});
// /Panel toolbox

// Tooltip
$(document).ready(function () {
	$('[data-toggle="tooltip"]').tooltip({
		container: 'body'
	});
});
// /Tooltip

// Progressbar
// if ($(".progress .progress-bar")[0]) {
// 	$('.progress .progress-bar').progressbar();
// }
// /Progressbar

// Switchery
$(document).ready(function () {
	if ($(".js-switch")[0]) {
		var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
		elems.forEach(function (html) {
			var switchery = new Switchery(html, {
				color: '#26B99A'
			});
		});
	}
});
// /Switchery


// iCheck
$(document).ready(function () {
	if ($("input.flat")[0]) {
		$(document).ready(function () {
			$('input.flat').iCheck({
				checkboxClass: 'icheckbox_flat-green',
				radioClass: 'iradio_flat-green'
			});
		});
	}
});
// /iCheck

// Table
$('table input').on('ifChecked', function () {
	checkState = '';
	$(this).parent().parent().parent().addClass('selected');
	countChecked();
});
$('table input').on('ifUnchecked', function () {
	checkState = '';
	$(this).parent().parent().parent().removeClass('selected');
	countChecked();
});

var checkState = '';

$('.bulk_action input').on('ifChecked', function () {
	checkState = '';
	$(this).parent().parent().parent().addClass('selected');
	countChecked();
});
$('.bulk_action input').on('ifUnchecked', function () {
	checkState = '';
	$(this).parent().parent().parent().removeClass('selected');
	countChecked();
});
$('.bulk_action input#check-all').on('ifChecked', function () {
	checkState = 'all';
	countChecked();
});
$('.bulk_action input#check-all').on('ifUnchecked', function () {
	checkState = 'none';
	countChecked();
});

function countChecked() {
	if (checkState === 'all') {
		$(".bulk_action input[name='table_records']").iCheck('check');
	}
	if (checkState === 'none') {
		$(".bulk_action input[name='table_records']").iCheck('uncheck');
	}

	var checkCount = $(".bulk_action input[name='table_records']:checked").length;

	if (checkCount) {
		$('.column-title').hide();
		$('.bulk-actions').show();
		$('.action-cnt').html(checkCount + ' Records Selected');
	} else {
		$('.column-title').show();
		$('.bulk-actions').hide();
	}
}



// Accordion
$(document).ready(function () {
	$(".expand").on("click", function () {
		$(this).next().slideToggle(200);
		$expand = $(this).find(">:first-child");

		if ($expand.text() == "+") {
			$expand.text("-");
		} else {
			$expand.text("+");
		}
	});
});

// NProgress
if (typeof NProgress != 'undefined') {
	$(document).ready(function () {
		NProgress.start();
	});

	$(window).load(function () {
		NProgress.done();
	});
}


//hover and retain popover when on popover content
var originalLeave = $.fn.popover.Constructor.prototype.leave;
$.fn.popover.Constructor.prototype.leave = function (obj) {
	var self = obj instanceof this.constructor ?
		obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type);
	var container, timeout;

	originalLeave.call(this, obj);

	if (obj.currentTarget) {
		container = $(obj.currentTarget).siblings('.popover');
		timeout = self.timeout;
		container.one('mouseenter', function () {
			//We entered the actual popover – call off the dogs
			clearTimeout(timeout);
			//Let's monitor popover content instead
			container.one('mouseleave', function () {
				$.fn.popover.Constructor.prototype.leave.call(self, self);
			});
		});
	}
};

$('body').popover({
	selector: '[data-popover]',
	trigger: 'click hover',
	delay: {
		show: 50,
		hide: 400
	}
});


function gd(year, month, day) {
	return new Date(year, month - 1, day).getTime();
}


/* INPUTS */

function onAddTag(tag) {
	alert("Added a tag: " + tag);
}

function onRemoveTag(tag) {
	alert("Removed a tag: " + tag);
}

function onChangeTag(input, tag) {
	alert("Changed a tag: " + tag);
}


function init_charts() {

	//console.log('run_charts  typeof [' + typeof (Chart) + ']');

	if (typeof (Chart) === 'undefined') { return; }

	//console.log('init_charts');


	Chart.defaults.global.legend = {
		enabled: false
	};
}

/* ECHRTS */


function init_echarts(xx) {
	xx = JSON.parse(xx);
	//console.log(xx.single_country_Unc_temp);
	// console.log(typeof JSON.parse(xx));
	if (typeof (echarts) === 'undefined') { return; }
	//console.log('init_echarts');


	var theme = {
		color: [
			'#e74c3c', '#e67e22', '#3447db', '#3498db',
			'#dbc134', '#34b9db', '#dba834', '#bfd3b7'
		],

		title: {
			itemGap: 8,
			textStyle: {
				fontWeight: 'normal',
				color: '#408829'
			}
		},

		dataRange: {
			color: ['#1f610a', '#97b58d']
		},

		toolbox: {
			color: ['#408829', '#408829', '#408829', '#408829']
		},

		tooltip: {
			backgroundColor: 'rgba(0,0,0,0.5)',
			axisPointer: {
				type: 'line',
				lineStyle: {
					color: '#408829',
					type: 'dashed'
				},
				crossStyle: {
					color: '#408829'
				},
				shadowStyle: {
					color: 'rgba(200,200,200,0.3)'
				}
			}
		},

		dataZoom: {
			dataBackgroundColor: '#eee',
			fillerColor: 'rgba(64,136,41,0.2)',
			handleColor: '#408829'
		},
		grid: {
			borderWidth: 0
		},

		categoryAxis: {
			axisLine: {
				lineStyle: {
					color: '#408829'
				}
			},
			splitLine: {
				lineStyle: {
					color: ['#eee']
				}
			}
		},

		valueAxis: {
			axisLine: {
				lineStyle: {
					color: '#408829'
				}
			},
			splitArea: {
				show: true,
				areaStyle: {
					color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
				}
			},
			splitLine: {
				lineStyle: {
					color: ['#eee']
				}
			}
		},
		timeline: {
			lineStyle: {
				color: '#408829'
			},
			controlStyle: {
				normal: { color: '#408829' },
				emphasis: { color: '#408829' }
			}
		},

		k: {
			itemStyle: {
				normal: {
					color: '#68a54a',
					color0: '#a9cba2',
					lineStyle: {
						width: 1,
						color: '#408829',
						color0: '#86b379'
					}
				}
			}
		},
		force: {
			itemStyle: {
				normal: {
					linkStyle: {
						strokeColor: '#408829'
					}
				}
			}
		},
		chord: {
			padding: 4,
			itemStyle: {
				normal: {
					lineStyle: {
						width: 1,
						color: 'rgba(128, 128, 128, 0.5)'
					},
					chordStyle: {
						lineStyle: {
							width: 1,
							color: 'rgba(128, 128, 128, 0.5)'
						}
					}
				},
				emphasis: {
					lineStyle: {
						width: 1,
						color: 'rgba(128, 128, 128, 0.5)'
					},
					chordStyle: {
						lineStyle: {
							width: 1,
							color: 'rgba(128, 128, 128, 0.5)'
						}
					}
				}
			}
		},
		textStyle: {
			fontFamily: 'Arial, Verdana, sans-serif'
		}
	};


	//echart Bar

	if ($('#mainb').length) {



		var echartBar = echarts.init(document.getElementById('mainb'), theme);

		echartBar.setOption({
			title: {
				text: 'Temperature of Australia',
				subtext: '2010'
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['Uncertain AVG Temp', 'AVG Temp']
			},
			toolbox: {
				show: false
			},
			calculable: false,
			xAxis: [{
				type: 'category',
				data: []
				// data: ['1?', '2?', '3?', '4?', '5?', '6?', '7?', '8?', '9?', '10?', '11?', '12?']
			}],
			yAxis: [{
				type: 'value'
			}],
			series: [{
				name: 'AVG Temp',
				type: 'bar',
				data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
				//xx.single_country_temp,
				markPoint: {
					data: [{
						type: 'max',
						name: '???'
					}, {
						type: 'min',
						name: '???'
					}]
				},
				markLine: {
					data: [{
						type: 'average',
						name: '???'
					}]
				}
			}, {
				name: 'AVG Uncertain Temp',
				type: 'bar',
				data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
				//data: xx.single_country_Unc_temp,
				markPoint: {
					data: [{
						name: 'sales',
						value: 182.2,
						xAxis: 7,
						yAxis: 183,
					}, {
						name: 'purchases',
						value: 2.3,
						xAxis: 11,
						yAxis: 3
					}]
				},
				markLine: {
					data: [{
						type: 'average',
						name: '???'
					}]
				}
			}]
		});

	}

	//year dropdown values
	$.each(xx.all_years, function(key, value) {   
		$('.yearselect')
			.append($("<option></option>")
					   .attr("value",value)
					   .attr("id",value)
					   .text(value)); 

		$('.yearselect2')
		.append($("<option></option>")
					.attr("value",value)
					.attr("id",value)
					.text(value)); 
					   
   });

	//echart Line

	if ($('#echart_line').length) {

		//highest temperature inmonth
var tem_max;
var mon_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
tem_max = Math.max.apply(null, xx.cities);
var tem = xx.cities.indexOf(tem_max);
$('#HighTem').text(tem_max);
$('#HighTemMon').text(mon_names[tem]);
if(tem_max < 22){
	$('#high').hide();
	$('#medium').hide();
	$('#low').show();
}else if(tem_max > 22 && tem_max < 31){
	$('#high').hide();
	$('#medium').show();
	$('#low').hide();
}else{
	$('#high').show();
	$('#medium').hide();
	$('#low').hide();
}

		var echartLine = echarts.init(document.getElementById('echart_line'), theme);
		var data = [];
		// for (key in xx.cities) {
			//console.log(xx.cities[key]);
			var obj_data = {
				name:  localStorage.getItem('start_year'),
				// name: key,
				type: 'line',
				smooth: true,
				itemStyle: {
					normal: {
						// areaStyle: {
						// type: 'none'
						// }
					}
				},
				data: xx.cities
				// data: xx.cities[key]
			}
			data.push(obj_data);
		// }


		echartLine.setOption({
			title: {
				text: localStorage.getItem('selected_country'),
				subtext: 'Avg Temperature'
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				x: 220,
				y: 40,
				// data: Object.keys(xx.cities)
			},
			toolbox: {
				show: true,
				feature: {
					magicType: {
						show: true,
						title: {
							line: 'Line',
							bar: 'Bar'

						},
						type: ['line', 'bar']
					},
					restore: {
						show: true,
						title: "Restore"
					},
					saveAsImage: {
						show: true,
						title: "Save Image"
					}
				}
			},
			calculable: true,
			xAxis: [{
				name: '\n\n\n\n\n\n\nMonths',
				type: 'category',
				boundaryGap: false,
				data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			}],
			yAxis: [{
				type: 'value'
			}],
			series: data

		});

	}

	//echart Line

	if ($('#echart_line_2').length) {

		//highest temperature inmonth
var tem_max;
var mon_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
tem_max = Math.max.apply(null, xx.cities_2);
var tem = xx.cities_2.indexOf(tem_max);
$('#HighTem2').text(tem_max);
$('#HighTemMon2').text(mon_names[tem]);
if(tem_max < 22){
	$('#high2').hide();
	$('#medium2').hide();
	$('#low2').show();
}else if(tem_max > 22 && tem_max < 31){
	$('#high2').hide();
	$('#medium2').show();
	$('#low2').hide();
}else{
	$('#high2').show();
	$('#medium2').hide();
	$('#low2').hide();
}

		var echartLine = echarts.init(document.getElementById('echart_line_2'), theme);
		var data = [];
		// for (key in xx.cities_2) {
			//console.log(xx.cities[key]);
			var obj_data = {
				// name: key,
				name: localStorage.getItem('end_year'),
				type: 'line',
				smooth: true,
				itemStyle: {
					normal: {
						// areaStyle: {
						// type: 'none'
						// }
					}
				},
				data: xx.cities_2
				// data: xx.cities_2[key]
			}
			data.push(obj_data);
		// }


		echartLine.setOption({
			title: {
				text: localStorage.getItem('selected_country_2'),
				subtext: 'Avg Temperature'
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				x: 220,
				y: 40,
				// data: Object.keys(xx.cities_2)
			},
			toolbox: {
				show: true,
				feature: {
					magicType: {
						show: true,
						title: {
							line: 'Line',
							bar: 'Bar'

						},
						type: ['line', 'bar']
					},
					restore: {
						show: true,
						title: "Restore"
					},
					saveAsImage: {
						show: true,
						title: "Save Image"
					}
				}
			},
			calculable: true,
			xAxis: [{
				name: '\n\n\n\n\n\n\nMonths',
				type: 'category',
				boundaryGap: false,
				data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			}],
			yAxis: [{
				type: 'value'
			}],
			series: data

		});

	}




	function init_JQVmap() {
		//console.log('check init_JQVmap [' + typeof (VectorCanvas) + '][' + typeof (jQuery.fn.vectorMap) + ']' );	

		if (typeof (jQuery.fn.vectorMap) === 'undefined') { return; }

		//console.log('init_JQVmap');

		if ($('#world-map-gdp').length) {

			$('#world-map-gdp').vectorMap({
				map: 'world_en',
				backgroundColor: null,
				color: '#ffffff',
				hoverOpacity: 0.7,
				selectedColor: '#666666',
				enableZoom: true,
				showTooltip: true,
				values: sample_data,
				scaleColors: ['#E6F2F0', '#149B7E'],
				normalizeFunction: 'polynomial'
			});

		}

		if ($('#usa_map').length) {

			$('#usa_map').vectorMap({
				map: 'usa_en',
				backgroundColor: null,
				color: '#ffffff',
				hoverOpacity: 0.7,
				selectedColor: '#666666',
				enableZoom: true,
				showTooltip: true,
				values: sample_data,
				scaleColors: ['#E6F2F0', '#149B7E'],
				normalizeFunction: 'polynomial'
			});

		}

	};


	function init_skycons() {

		if (typeof (Skycons) === 'undefined') { return; }
		//console.log('init_skycons');

		var icons = new Skycons({
			"color": "#73879C"
		}),
			list = [
				"clear-day", "clear-night", "partly-cloudy-day",
				"partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
				"fog"
			],
			i;
		for (i = list.length; i--;)
			icons.set(list[i], list[i]);
		icons.play();

	}
	//echart Pie Collapse

	if ($('#echart_pie2').length) {

		var echartPieCollapse = echarts.init(document.getElementById('echart_pie2'), theme);

		echartPieCollapse.setOption({
			title: {
				text: 'Continental Visualisations',
				subtext: 'Avg Temperature (2013)\n\n',
				x: 'center',
				y: 'top'
			},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				x: 'center',
				y: 'bottom',
				data: ['Africa', 'Asia', 'Antarctica', 'Europe', 'Australia', 'North America', 'South America']
			},
			toolbox: {
				show: true,
				feature: {
					magicType: {
						show: true,
						type: ['pie', 'funnel']
					},
					restore: {
						show: true,
						title: "Restore"
					},
					saveAsImage: {
						show: true,
						title: "Save Image"
					}
				}
			},
			calculable: true,
			series: [{
				name: 'Average Temperature',
				type: 'pie',
				radius: [40, 180],
				center: ['50%', 250],
				roseType: 'area',
				x: '50%',
				max: 40,
				sort: 'ascending',
				data: xx.continent_data
			}]
		});

	}


	//echart Map

	if ($('#echart_world_map').length) {

		var echartMap = echarts.init(document.getElementById('echart_world_map'), theme);


		echartMap.setOption({
			title: {
				text: 'Global Climate Changes',
				subtext: 'Average Temperature 2013',
				x: 'center',
				y: 'top'
			},
			tooltip: {
				trigger: 'item',
				formatter: function (params) {
					var value = (params.value + '').split('.');
					value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') + '.' + value[1];
					return params.seriesName + '<br/>' + params.name + ' : ' + value;
				}
			},
			toolbox: {
				show: true,
				orient: 'vertical',
				x: 'right',
				y: 'center',
				feature: {
					mark: {
						show: true
					},
					// import:{
					// 	show:true,
					// 	title: "Import"
					// },
					dataView: {
						show: true,
						title: "Text View",
						lang: [
							"Text View",
							"Close",
							"Refresh",
						],
						readOnly: false
					},
					restore: {
						show: true,
						title: "Restore"
					},
					saveAsImage: {
						show: true,
						title: "Save Image"
					}
				}
			},
			dataRange: {
				min: 0,
				max: 35,
				text: ['High', 'Low'],
				realtime: false,
				calculable: true,
				color: ['#e74c3c', '#e67e22', '#3498db']
			},
			series: [{
				name: 'Average Temperature',
				type: 'map',
				mapType: 'world',
				roam: false,
				mapLocation: {
					y: 60
				},
				itemStyle: {
					emphasis: {
						label: {
							show: true
						}
					}
				},
				data: xx.world_map_data
			}]
		});

	}
	var compare = "";
	function eConsole(param) {
		if (typeof param.seriesIndex != 'undefined') {

			country_name = param.data.name;
			localStorage.setItem('selected_country', country_name);
			var start_year = 2001;
			var end_year = 2005;
			localStorage.setItem('start_year',start_year);
			localStorage.setItem('end_year',end_year);
			// var param_send = {start: start_year, end: end_year, country: country_name};
			window.location.href = 'visualisations_data?name=' + country_name+'&start_year='+start_year+'&end_year='+end_year;


		}
	}

	function eConsole_compare(param) {

		if (typeof param.seriesIndex != 'undefined') {

			if (compare == "") {
				compare = param.data.name;
				// localStorage.setItem('selected_country_2', compare);
			}
			else {

				country_name = param.data.name;
				// localStorage.setItem('selected_country', country_name);

				if (compare == country_name) {
					window.location.href = 'visualisations_data?name=' + country_name;
					compare = "";
				} else {
					window.location.href = 'visualisations_compare?name=' + country_name + '_' + compare;
					compare = "";
				}

			}



		}
	}
	echartMap.on('click', eConsole_compare);
	echartMap.on('dblclick', eConsole);
}



$(document).ready(function () {
	var xhttp = new XMLHttpRequest();
	var xx = {};
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			//  alert(this.responseText);
			//  console.log(this.responseText);
			xx = this.responseText;
			init_echarts(xx);

		}
	};
	xhttp.open("GET", "http://localhost:5000/users", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send();


	$("#upload_msg").hide();
	$('#file_submit').on('click', function (e) {

		$("#upload_msg").show();

	});

	$('#import_button').on('click', function (e) {

		window.location.href = "/import";
	});

	$('#bubblechart_button').on('click', function (e) {

		window.location.href = "/bubblechart";
	});

	$('#cities_button').on('click', function (e) {

		window.location.href = "/cities";
	});

	$('#dashboard_button').on('click', function (e) {

		window.location.href = "/dashboard";
	});

	$('#switch_button_map').on('click', function (e) {


		if ($("#switch_button_map").text() == "Switch to Continental Visualisations >") {

			$("#switch_button_map").text("Switch to Map Visualisations >");
			$("#pie_visualisaton").show();
			$("#map_visualisaton").hide();

		}
		else {
			$("#switch_button_map").text("Switch to Continental Visualisations >");
			$("#pie_visualisaton").hide();
			$("#map_visualisaton").show();
		}


	});

	var timer;

	$(function () {
		$('#line').loader('show', '<img src="../img/ring.gif">');
		$('#map_visualisaton').loader('show', '<img src="../img/ring.gif">');
		window.clearTimeout(timer);

		timer = window.setTimeout(function () {
			// When the time is 1.5 second after last input, hide the image.
			$('#line').loader('hide');
			$('#map_visualisaton').loader('hide');
			$("#pie_visualisaton").fadeOut();

		}, 7500);


	});


	init_charts();


});

// sidebar functions
$(document).ready(function () {
// 	$("#sidebar").mCustomScrollbar({
// 		theme: "minimal"
//   	 });


    $('#sideBarButton').on('click', function () {
//             // open or close navbar
			$('#sidebar').toggleClass('active');
// 			// close dropdowns
// 			$('.collapse.in').toggleClass('in');
// 			// and also adjust aria-expanded attributes we use for the open/closed arrows
// 			// in our CSS
// 			$('a[aria-expanded=true]').attr('aria-expanded', 'false');
		});
	

});
