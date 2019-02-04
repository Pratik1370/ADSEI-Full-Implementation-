
$(document).ready(function () {
	var xhttp = new XMLHttpRequest();
	var respons;
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
            respons = this.responseText;
            localStorage.setItem('single_country_heat_cities', respons);


		}
    };
    var start_year = localStorage.getItem('start_year');
    var end_year = localStorage.getItem('end_year');
    var c1 = localStorage.getItem('selected_country');
    xhttp.open("GET", "/cities_data?name="+c1+"&start_year="+start_year+'&end_year='+end_year, true);
	xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    

});


function show(){

    $("#echart_line").show();
    $("#textContent").hide();
    $("#chartContent").hide();
}
function showPie(){
    // document.getElementById('main').innerHTML="";
    var data = localStorage.getItem('single_country_heat_cities');
    var country_name = localStorage.getItem('selected_country');

    data = JSON.parse(data);
    var myChart = echarts.init(document.getElementById('main'));
    var result_data = data.cities_in_country;
    // specify chart configuration item and data
    option = {
        title: {
            text: country_name,
            left: 'center',
            top: 20
        },
    
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
    
        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series : [
            {
                name: country_name,
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data: result_data.sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'silver',
                        color: '#c23531'
                    }
                },
    
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };
       
    
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

    var textBox = document.getElementById("textContent");
    textBox.innerHTML="";
    var h4 = document.createElement("h4");
    var node = document.createTextNode(" Pie charts are best to use when you are trying to compare parts of a whole. They do not show changes over time.");
    h4.appendChild(node);

    textBox.appendChild(h4);
    $("#textContent").show();
    $("#echart_line").hide();
    $("#chartContent").show();

}


  
// <!--************************ This is the introduction of the heatmap chart ***********************-->
function showHeatmap(){
    var myChart = echarts.init(document.getElementById('main'));
    var data = localStorage.getItem('single_country_heat_cities');
    var country_name = localStorage.getItem('selected_country');

    data = JSON.parse(data);
    var hours = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var days = data.years_arr;

data = data.heat_array;
data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

option = {
    title: {
        text: country_name,
        subtext: 'Avg Temperature'
    },
    tooltip: {
        position: 'top'
    },
    animation: false,
    grid: {
        height: '50%',
        y: '10%'
    },
    xAxis: {
        type: 'category',
        data: hours,
        splitArea: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        data: days,
        splitArea: {
            show: true
        }
    },
    visualMap: {
        min: -20,
        max: 30,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%'
    },
    series: [{
        name: 'Temperature',
        type: 'heatmap',
        data: data,
        label: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};

    if (option && typeof option === "object") {     myChart.setOption(option, true); }

    var textBox = document.getElementById("textContent");
    textBox.innerHTML="";
    var h4 = document.createElement("h4");
    node =  document.createTextNode("By definition, Heat Maps are graphical representations of data that utilize color-coded systems. The primary purpose of Heat Maps is to better visualize the volume of locations/events within a dataset and assist in directing viewers towards areas on data visualizations that matter most.");
    h4.appendChild(node);

    textBox.appendChild(h4);
    $("#textContent").show();
    $("#echart_line").hide();
    $("#chartContent").show();
}