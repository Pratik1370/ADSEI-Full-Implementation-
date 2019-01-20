
$(document).ready(function () {
	var xhttp = new XMLHttpRequest();
	var respons;
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			//  alert(this.responseText);
			//  console.log(this.responseText);
            respons = this.responseText;
            // respons = JSON.parse(respons);
            localStorage.setItem('single_country_heat_cities', respons);
// console.log(respons);
// console.log(typeof respons);
            // showHeatmap(respons);
            // showPieS(respons);
            console.log(respons);

		}
    };
    var start_year = localStorage.getItem('start_year');
    var end_year = localStorage.getItem('end_year');
    var c1 = localStorage.getItem('selected_country');
    console.log(start_year+'---'+end_year+'---'+c1);
    xhttp.open("GET", "http://localhost:5000/cities_data?name="+c1+"&start_year="+start_year+'&end_year='+end_year, true);
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
//   console.log(result_data);
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
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
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
console.log(country_name);
    var hours = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var days = data.years_arr;

data = data.heat_array;
// var data = [[0,0,-2],[0,1,-11],[0,2,2],[0,3,3],[0,4,10],[0,5,14],[0,6,16],[0,7,17],[0,8,11],[0,9,7],[0,10,0],[0,11,1],[1,0,-1],[1,1,0],[1,2,-1],[1,3,4],[1,4,8],[1,5,13],[1,6,16],[1,7,15],[1,8,10],[1,9,8],[1,10,3],[1,11,0],[2,0,-3],[2,1,-5],[2,2,-2],[2,3,2],[2,4,10],[2,5,13],[2,6,16],[2,7,15],[2,8,12],[2,9,4],[2,10,2],[2,11,-5],[3,0,-13],[3,1,-9],[3,2,-3],[3,3,4],[3,4,11],[3,5,13],[3,6,21],[3,7,18],[3,8,11],[3,9,5],[3,10,0],[3,11,-8],[4,0,-5],[4,1,-12],[4,2,-2],[4,3,4],[4,4,9],[4,5,15],[4,6,20],[4,7,16],[4,8,12],[4,9,7],[4,10,4],[4,11,2],[5,0,-5],[5,1,-10],[5,2,-1],[5,3,2],[5,4,10],[5,5,12],[5,6,17],[5,7,15],[5,8,12],[5,9,6],[5,10,3],[5,11,-7],[6,0,-6],[6,1,-3],[6,2,-8],[6,3,2],[6,4,12],[6,5,17],[6,6,17],[6,7,17],[6,8,null],[6,9,null],[6,10,null],[6,11,null]];
console.log(data);
// console.log(data.country_name);
data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

option = {
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