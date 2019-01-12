// ************************This is the introduction of the bar chart*******************************
function showBar(){
    // document.getElementById('main').innerHTML="";
    var option=[];
  

  var myChart = echarts.init(document.getElementById('main'));
  
  // specify chart configuration item and data
  option = {
      title: {
            text: 'Bar Chart',
            subtext: '',
            left: 'center'
        },
      tooltip: {},
      legend: {
          data:['Total']
      },
      xAxis: {
          data: ["Apple","Oranges","Banana","Watermelon","Grapes","Pears"]
      },
      yAxis: {},
      series: [{
          name: 'Fruits',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
  };
 
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

    var textBox = document.getElementById("textContent");
    textBox.innerHTML="";
    var h4 = document.createElement("h4");
    var node = document.createTextNode("A Bar Graph is a graph that is drawn using rectangular bars to show how large each value is. The bars can be horizontal or vertical.");
     h4.appendChild(node);

     textBox.appendChild(h4);

}


// <!--************************ This is the introduction of the line chart ***********************-->
function showLine(){
    // document.getElementById('main').innerHTML="";
    var myChart = echarts.init(document.getElementById('main'));
  
    // specify chart configuration item and data
    var option = {
        title: {
            text: 'Line Chart',
            subtext: 'Number of People Through a Mall Everyday',
            left: 'center'
        },
        tooltip: {},
        legend: {
            data:['Total']
        },
        xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
            name: 'amount',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
    };

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

    var textBox = document.getElementById("textContent");
    textBox.innerHTML="";
    var h4 = document.createElement("h4");
    var node = document.createTextNode(" Line graphs are used to track changes over short and long periods of time. When smaller changes exist, line graphs are better to use than bar graphs. Line graphs can also be used to compare changes over the same period of time for more than one group.");
    h4.appendChild(node);

    textBox.appendChild(h4);

}

// <!--************************ This is the introduction of the pie chart ***********************-->
function showPie(){
    // document.getElementById('main').innerHTML="";
    var myChart = echarts.init(document.getElementById('main'));
  
    // specify chart configuration item and data
    option = {
        title: {
            text: 'Pie Chart',
            subtext: 'Pie Survey',
            left: 'center'
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
                name:'',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'Apple'},
                    {value:310, name:'Pumpkin'},
                    {value:274, name:'Custard'},
                    {value:235, name:'Meat Pie'},
                    {value:400, name:'Fruit'}
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(0, 0, 0)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(0, 0, 0)'
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
                        shadowColor: 'rgba(0, 0, 0)'
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

}

// <!--************************ This is the introduction of the scatter chart ***********************-->
function showScatter(){
    // document.getElementById('main').innerHTML="";
    var myChart = echarts.init(document.getElementById('main'));
  
    // specify chart configuration item and data
    option = {

        title: {
            text: 'Scatter Chart',
            subtext: '',
            left: 'center'
        },

        xAxis: {},
        yAxis: {},
        series: [{
            symbolSize: 20,
            data: [
                [10.0, 8.04],
                [8.0, 6.95],
                [13.0, 7.58],
                [9.0, 8.81],
                [11.0, 8.33],
                [14.0, 9.96],
                [6.0, 7.24],
                [4.0, 4.26],
                [12.0, 10.84],
                [7.0, 4.82],
                [5.0, 5.68]
            ],
            type: 'scatter'
        }]
    };
       
    
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

    var textBox = document.getElementById("textContent");
    textBox.innerHTML="";
    var h4 = document.createElement("h4");
    var node = document.createTextNode(" Scatter plots are similar to line graphs in that they use horizontal and vertical axes to plot data points. However, they have a very specific purpose. Scatter plots show how much one variable is affected by another. The relationship between two variables is called their correlation .");
    h4.appendChild(node);

    textBox.appendChild(h4);

    var h4 = document.createElement("h4");
    node =  document.createTextNode(" Scatter plots usually consist of a large body of data. The closer the data points come when plotted to making a straight line, the higher the correlation between the two variables, or the stronger the relationship.");
    h4.appendChild(node);

    textBox.appendChild(h4);

}

// <!--************************ This is the introduction of the map chart ***********************-->
function showMap(){
    // document.getElementById('main').innerHTML="";
    var myChart = echarts.init(document.getElementById('main'));
  
    // specify chart configuration item and data
    function randomData() {
        return Math.round(Math.random()*1000);
    }
    
    option = {
        title: {
            text: 'iphone销量',
            subtext: '纯属虚构',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data:['iphone3','iphone4','iphone5']
        },
        visualMap: {
            min: 0,
            max: 2500,
            left: 'left',
            top: 'bottom',
            text: ['高','低'],           
            calculable: true
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: 'iphone3',
                type: 'map',
                mapType: 'china',
                roam: false,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {name: '北京',value: randomData() },
                    {name: '天津',value: randomData() },
                    {name: '上海',value: randomData() },
                    {name: '重庆',value: randomData() },
                    {name: '河北',value: randomData() },
                    {name: '河南',value: randomData() },
                    {name: '云南',value: randomData() },
                    {name: '辽宁',value: randomData() },
                    {name: '黑龙江',value: randomData() },
                    {name: '湖南',value: randomData() },
                    {name: '安徽',value: randomData() },
                    {name: '山东',value: randomData() },
                    {name: '新疆',value: randomData() },
                    {name: '江苏',value: randomData() },
                    {name: '浙江',value: randomData() },
                    {name: '江西',value: randomData() },
                    {name: '湖北',value: randomData() },
                    {name: '广西',value: randomData() },
                    {name: '甘肃',value: randomData() },
                    {name: '山西',value: randomData() },
                    {name: '内蒙古',value: randomData() },
                    {name: '陕西',value: randomData() },
                    {name: '吉林',value: randomData() },
                    {name: '福建',value: randomData() },
                    {name: '贵州',value: randomData() },
                    {name: '广东',value: randomData() },
                    {name: '青海',value: randomData() },
                    {name: '西藏',value: randomData() },
                    {name: '四川',value: randomData() },
                    {name: '宁夏',value: randomData() },
                    {name: '海南',value: randomData() },
                    {name: '台湾',value: randomData() },
                    {name: '香港',value: randomData() },
                    {name: '澳门',value: randomData() }
                ]
            },
            {
                name: 'iphone4',
                type: 'map',
                mapType: 'china',
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {name: '北京',value: randomData() },
                    {name: '天津',value: randomData() },
                    {name: '上海',value: randomData() },
                    {name: '重庆',value: randomData() },
                    {name: '河北',value: randomData() },
                    {name: '安徽',value: randomData() },
                    {name: '新疆',value: randomData() },
                    {name: '浙江',value: randomData() },
                    {name: '江西',value: randomData() },
                    {name: '山西',value: randomData() },
                    {name: '内蒙古',value: randomData() },
                    {name: '吉林',value: randomData() },
                    {name: '福建',value: randomData() },
                    {name: '广东',value: randomData() },
                    {name: '西藏',value: randomData() },
                    {name: '四川',value: randomData() },
                    {name: '宁夏',value: randomData() },
                    {name: '香港',value: randomData() },
                    {name: '澳门',value: randomData() }
                ]
            },
            {
                name: 'iphone5',
                type: 'map',
                mapType: 'china',
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {name: '北京',value: randomData() },
                    {name: '天津',value: randomData() },
                    {name: '上海',value: randomData() },
                    {name: '广东',value: randomData() },
                    {name: '台湾',value: randomData() },
                    {name: '香港',value: randomData() },
                    {name: '澳门',value: randomData() }
                ]
            }
        ]
    };
    
       
    
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

    var textBox = document.getElementById("textContent");
    textBox.innerHTML="";
    var h4 = document.createElement("h4");
    var node = document.createTextNode("When it comes to data visualisation, everyone loves a map. More exciting than a chart, easier than an infographic.");
    h4.appendChild(node);

    textBox.appendChild(h4);
    
}

// <!--************************ This is the introduction of the candlestick chart ***********************-->
function showCandlestick(){
    var myChart = echarts.init(document.getElementById('main'));
  
    option = {
        title: {
            text: 'Candlestick Chart',
            subtext: '',
            left: 'center'
        },
        xAxis: {
            data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
        },
        yAxis: {},
        series: [{
            type: 'k',
            data: [
                [20, 30, 10, 35],
                [40, 35, 30, 55],
                [33, 38, 33, 40],
                [40, 40, 32, 42]
            ]
        }]
    };

    if (option && typeof option === "object") {     myChart.setOption(option, true); }

    var textBox = document.getElementById("textContent");
    textBox.innerHTML="";
    var h4 = document.createElement("h4");
    node =  document.createTextNode(" Candlesticks are an efficient way to view an asset's price chart. Candlesticks quickly show which way the price moved during a specific time period using colors, as well as how far the price moved during that period.");
    h4.appendChild(node);

    textBox.appendChild(h4);

}


// <!--************************ This is the introduction of the radar chart ***********************-->
function showRadar(){
    var myChart = echarts.init(document.getElementById('main'));
  
    option = {
        title: {
            text: 'Radar Chart',
            subtext: 'Number of User per Web Browser',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            backgroundColor : 'rgba(0,0,250,0.2)'
        },
        legend: {
            type: 'scroll',
            bottom: 10,
            data: (function (){
                var list = [];
                for (var i = 1; i <=28; i++) {
                    list.push(i + 2000 + '');
                }
                return list;
            })()
        },
        visualMap: {
            top: 'middle',
            right: 10,
            color: ['red', 'yellow'],
            calculable: true
        },
        radar: {
           indicator : [
               { text: 'IE8-', max: 400},
               { text: 'IE9+', max: 400},
               { text: 'Safari', max: 400},
               { text: 'Firefox', max: 400},
               { text: 'Chrome', max: 400}
            ]
        },
        series : (function (){
            var series = [];
            for (var i = 1; i <= 28; i++) {
                series.push({
                    name:'Browser（Data is not real）',
                    type: 'radar',
                    symbol: 'none',
                    lineStyle: {
                        width: 1
                    },
                    emphasis: {
                        areaStyle: {
                            color: 'rgba(0,250,0,0.3)'
                        }
                    },
                    data:[
                      {
                        value:[
                            (40 - i) * 10,
                            (38 - i) * 4 + 60,
                            i * 5 + 10,
                            i * 9,
                            i * i /2
                        ],
                        name: i + 2000 + ''
                      }
                    ]
                });
            }
            return series;
        })()
    };
    if (option && typeof option === "object") {     myChart.setOption(option, true); }

    var textBox = document.getElementById("textContent");
    textBox.innerHTML="";
    var h4 = document.createElement("h4");
    node =  document.createTextNode("A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point. The relative position and angle of the axes is typically uninformative.");
    h4.appendChild(node);

    textBox.appendChild(h4);

}
  
// <!--************************ This is the introduction of the heatmap chart ***********************-->
function showHeatmap(){
    var myChart = echarts.init(document.getElementById('main'));
  

var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a','10a','11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'];
var days = ['Saturday', 'Friday', 'Thursday',
        'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];

data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

option = {
    title: {
            text: 'Heatmap Chart',
            subtext: '',
            left: 'center'
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
        min: 0,
        max: 10,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%'
    },
    series: [{
        name: 'Punch Card',
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

}

// <!--************************ This is the introduction of the tree chart ***********************-->
function showTree(){
    var myChart = echarts.init(document.getElementById('main'));
    myChart.showLoading();

    var data1 = {
        "name": "flare",
        "children": [
            {
                "name": "data",
                "children": [
                    {
                         "name": "converters",
                         "children": [
                          {"name": "Converters", "value": 721},
                          {"name": "DelimitedTextConverter", "value": 4294}
                         ]
                    },
                    {
                        "name": "DataUtil",
                        "value": 3322
                    }
                ]
            },
            {
                "name": "display",
                "children": [
                    {"name": "DirtySprite", "value": 8833},
                    {"name": "LineSprite", "value": 1732},
                    {"name": "RectSprite", "value": 3623}
               ]
            },
            {
                "name": "flex",
                "children": [
                    {"name": "FlareVis", "value": 4116}
                ]
            },
            {
               "name": "query",
               "children": [
                {"name": "AggregateExpression", "value": 1616},
                {"name": "And", "value": 1027},
                {"name": "Arithmetic", "value": 3891},
                {"name": "Average", "value": 891},
                {"name": "BinaryExpression", "value": 2893},
                {"name": "Comparison", "value": 5103},
                {"name": "CompositeExpression", "value": 3677},
                {"name": "Count", "value": 781},
                {"name": "DateUtil", "value": 4141},
                {"name": "Distinct", "value": 933},
                {"name": "Expression", "value": 5130},
                {"name": "ExpressionIterator", "value": 3617},
                {"name": "Fn", "value": 3240},
                {"name": "If", "value": 2732},
                {"name": "IsA", "value": 2039},
                {"name": "Literal", "value": 1214},
                {"name": "Match", "value": 3748},
                {"name": "Maximum", "value": 843},
                {
                 "name": "methods",
                 "children": [
                  {"name": "add", "value": 593},
                  {"name": "and", "value": 330},
                  {"name": "average", "value": 287},
                  {"name": "count", "value": 277},
                  {"name": "distinct", "value": 292},
                  {"name": "div", "value": 595},
                  {"name": "eq", "value": 594},
                  {"name": "fn", "value": 460},
                  {"name": "gt", "value": 603},
                  {"name": "gte", "value": 625},
                  {"name": "iff", "value": 748},
                  {"name": "isa", "value": 461},
                  {"name": "lt", "value": 597},
                  {"name": "lte", "value": 619},
                  {"name": "max", "value": 283},
                  {"name": "min", "value": 283},
                  {"name": "mod", "value": 591},
                  {"name": "mul", "value": 603},
                  {"name": "neq", "value": 599},
                  {"name": "not", "value": 386},
                  {"name": "or", "value": 323},
                  {"name": "orderby", "value": 307},
                  {"name": "range", "value": 772},
                  {"name": "select", "value": 296},
                  {"name": "stddev", "value": 363},
                  {"name": "sub", "value": 600},
                  {"name": "sum", "value": 280},
                  {"name": "update", "value": 307},
                  {"name": "variance", "value": 335},
                  {"name": "where", "value": 299},
                  {"name": "xor", "value": 354},
                  {"name": "_", "value": 264}
                 ]
                },
                {"name": "Minimum", "value": 843},
                {"name": "Not", "value": 1554},
                {"name": "Or", "value": 970},
                {"name": "Query", "value": 13896},
                {"name": "Range", "value": 1594},
                {"name": "StringUtil", "value": 4130},
                {"name": "Sum", "value": 791},
                {"name": "Variable", "value": 1124},
                {"name": "Variance", "value": 1876},
                {"name": "Xor", "value": 1101}
               ]
              },
            {
               "name": "scale",
               "children": [
                {"name": "IScaleMap", "value": 2105},
                {"name": "LinearScale", "value": 1316},
                {"name": "LogScale", "value": 3151},
                {"name": "OrdinalScale", "value": 3770},
                {"name": "QuantileScale", "value": 2435},
                {"name": "QuantitativeScale", "value": 4839},
                {"name": "RootScale", "value": 1756},
                {"name": "Scale", "value": 4268},
                {"name": "ScaleType", "value": 1821},
                {"name": "TimeScale", "value": 5833}
               ]
            }
        ]
    };
    
    var data2 = {
        "name": "flare",
        "children": [
            {
                "name": "flex",
                "children": [
                    {"name": "FlareVis", "value": 4116}
                ]
            },
            {
                "name": "scale",
                "children": [
                    {"name": "IScaleMap", "value": 2105},
                    {"name": "LinearScale", "value": 1316},
                    {"name": "LogScale", "value": 3151},
                    {"name": "OrdinalScale", "value": 3770},
                    {"name": "QuantileScale", "value": 2435},
                    {"name": "QuantitativeScale", "value": 4839},
                    {"name": "RootScale", "value": 1756},
                    {"name": "Scale", "value": 4268},
                    {"name": "ScaleType", "value": 1821},
                    {"name": "TimeScale", "value": 5833}
               ]
            },
            {
                "name": "display",
                "children": [
                    {"name": "DirtySprite", "value": 8833}
               ]
            }
        ]
    };
    
    myChart.hideLoading();
    
    myChart.setOption(option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        legend: {
            top: '2%',
            left: '3%',
            orient: 'vertical',
            data: [{
                name: 'tree1',
                icon: 'rectangle'
            } ,
            {
                name: 'tree2',
                icon: 'rectangle'
            }],
            borderColor: '#c23531'
        },
        series:[
            {
                type: 'tree',
    
                name: 'tree1',
    
                data: [data1],
    
                top: '5%',
                left: '7%',
                bottom: '2%',
                right: '60%',
    
                symbolSize: 7,
    
                label: {
                    normal: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right'
                    }
                },
    
                leaves: {
                    label: {
                        normal: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    }
                },
    
                expandAndCollapse: true,
    
                animationDuration: 550,
                animationDurationUpdate: 750
    
            },
            {
                type: 'tree',
                name: 'tree2',
                data: [data2],
    
                top: '20%',
                left: '60%',
                bottom: '22%',
                right: '18%',
    
                symbolSize: 7,
    
                label: {
                    normal: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right'
                    }
                },
    
                leaves: {
                    label: {
                        normal: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    }
                },
    
                expandAndCollapse: true,
    
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    });

    if (option && typeof option === "object") {     myChart.setOption(option, true); }

    var textBox = document.getElementById("textContent");
    textBox.innerHTML="";
    var h4 = document.createElement("h4");
    node =  document.createTextNode("The tree diagram displays the hierarchical structure of your data. A common use is to display an organizational chart, but it can be used to visualize or explore any data broken down into multiple levels.");
    h4.appendChild(node);

    textBox.appendChild(h4);

}

// <!--************************ This is the introduction of the tree map ***********************-->
function showTreeMap(){
    var myChart = echarts.init(document.getElementById('main'));
    option = {
        series: [{
            type: 'treemap',
            data: [{
                name: 'nodeA',            // First tree
                value: 10,
                children: [{
                    name: 'nodeAa',       // First leaf of first tree
                    value: 4
                }, {
                    name: 'nodeAb',       // Second leaf of first tree
                    value: 6
                }]
            }, {
                name: 'nodeB',            // Second tree
                value: 20,
                children: [{
                    name: 'nodeBa',       // Son of first tree
                    value: 20,
                    children: [{
                        name: 'nodeBa1',  // Granson of first tree
                        value: 20
                    }]
                }]
            }]
        }]
    };

    if (option && typeof option === "object") {     myChart.setOption(option, true); }

    var textBox = document.getElementById("textContent");
    textBox.innerHTML="";
    var h4 = document.createElement("h4");
    node =  document.createTextNode("Use a treemap when space is constrained and you have a large amount of hierarchical data that you need to get an overview of. Treemaps should primarily be used with values that can be aggregated");
    h4.appendChild(node);

    textBox.appendChild(h4);

}

// <!--************************ This is the introduction of the sunburst***********************-->
function showSunburst(){
    var myChart = echarts.init(document.getElementById('main'));
    var data = [{
        name: 'Grandpa',
        children: [{
            name: 'Uncle Leo',
            value: 15,
            children: [{
                name: 'Cousin Jack',
                value: 2
            }, {
                name: 'Cousin Mary',
                value: 5,
                children: [{
                    name: 'Jackson',
                    value: 2
                }]
            }, {
                name: 'Cousin Ben',
                value: 4
            }]
        }, {
            name: 'Father',
            value: 10,
            children: [{
                name: 'Me',
                value: 5
            }, {
                name: 'Brother Peter',
                value: 1
            }]
        }]
    }, {
        name: 'Nancy',
        children: [{
            name: 'Uncle Nike',
            children: [{
                name: 'Cousin Betty',
                value: 1
            }, {
                name: 'Cousin Jenny',
                value: 2
            }]
        }]
    }];
    
    option = {
        title: {
            text: 'Sunbrust Chart',
            subtext: 'Family Tree',
            left: 'center'
        },
        series: {
            type: 'sunburst',
            // highlightPolicy: 'ancestor',
            data: data,
            radius: [0, '90%'],
            label: {
                rotate: 'radial'
            }
        }
    };
    if (option && typeof option === "object") {     myChart.setOption(option, true); }

    var textBox = document.getElementById("textContent");
    textBox.innerHTML="";
    var h4 = document.createElement("h4");
    node =  document.createTextNode("This type of visualisation shows hierarchy through a series of rings, that are sliced for each category node. Each ring corresponds to a level in the hierarchy, with the central circle representing the root node and the hierarchy moving outwards from it.");
    h4.appendChild(node);

    textBox.appendChild(h4);

}

// <!--************************ This is the introduction of the parallel Chart***********************-->
function showParallel(){
    var myChart = echarts.init(document.getElementById('main'));
    option = {
        title: {
            text: 'Parallel Chart',
            subtext: '',
            left: 'center'
        },
        parallelAxis: [
            {dim: 0, name: 'Price'},
            {dim: 1, name: 'Net Weight'},
            {dim: 2, name: 'Amount'},
            {
                dim: 3,
                name: 'Score',
                type: 'category',
                data: ['Excellent', 'Good', 'OK', 'Bad']
            }
        ],
        series: {
            type: 'parallel',
            lineStyle: {
                width: 4
            },
            data: [
                [12.99, 100, 82, 'Good'],
                [9.99, 80, 77, 'OK'],
                [20, 120, 60, 'Excellent']
            ]
        }
    };
    if (option && typeof option === "object") {     myChart.setOption(option, true); }

    var textBox = document.getElementById("textContent");
    textBox.innerHTML="";
    var h4 = document.createElement("h4");
    node =  document.createTextNode("This type of visualisation is used for plotting multivariate, numerical data. Parallel Coordinates Plots are ideal for comparing many variables together and seeing the relationships between them. For example, if you had to compare an array of products with the same attributes (comparing computer or cars specs across different models).");
    h4.appendChild(node);

    textBox.appendChild(h4);

}

// <!--************************ This is the introduction of the sankey Chart***********************-->
function showSankey(){
    var myChart = echarts.init(document.getElementById('main'));
    option = {
        series: {
            type: 'sankey',
            layout:'none',
            focusNodeAdjacency: 'allEdges',
            data: [{
                name: 'a'
            }, {
                name: 'b'
            }, {
                name: 'a1'
            }, {
                name: 'a2'
            }, {
                name: 'b1'
            }, {
                name: 'c'
            }],
            links: [{
                source: 'a',
                target: 'a1',
                value: 5
            }, {
                source: 'a',
                target: 'a2',
                value: 3
            }, {
                source: 'b',
                target: 'b1',
                value: 8
            }, {
                source: 'a',
                target: 'b1',
                value: 3
            }, {
                source: 'b1',
                target: 'a1',
                value: 1
            }, {
                source: 'b1',
                target: 'c',
                value: 2
            }]
        }
    };
    if (option && typeof option === "object") {     myChart.setOption(option, true); }

    var textBox = document.getElementById("textContent");
    textBox.innerHTML="";
    var h4 = document.createElement("h4");
    node =  document.createTextNode("Sankey diagrams are a specific type of flow diagram, in which the width of the arrows is shown proportionally to the flow quantity. Sankey diagrams put a visual emphasis on the major transfers or flows within a system. They are helpful in locating dominant contributions to an overall flow. Often, Sankey diagrams show conserved quantities within defined system boundaries.");
    h4.appendChild(node);

    textBox.appendChild(h4);

}

// <!--************************ This is the introduction of the Funnel Chart***********************-->
function showFunnel(){
    var myChart = echarts.init(document.getElementById('main'));
    option = {
        title: {
            text: 'Funnel chart'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        legend: {
            data: ['display','click','visit','consulting','orders']
        },
        calculable: true,
        series: [
            {
                name:'funnel chart',
                type:'funnel',
                left: '10%',
                top: 60,
                //x2: 80,
                bottom: 60,
                width: '80%',
                // height: {totalHeight} - y - y2,
                min: 0,
                max: 100,
                minSize: '0%',
                maxSize: '100%',
                sort: 'descending',
                gap: 2,
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    },
                    emphasis: {
                        textStyle: {
                            fontSize: 20
                        }
                    }
                },
                labelLine: {
                    normal: {
                        length: 10,
                        lineStyle: {
                            width: 1,
                            type: 'solid'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                },
                data: [
                    {value: 60, name: 'visit'},
                    {value: 40, name: 'consulting'},
                    {value: 20, name: 'orders'},
                    {value: 80, name: 'click'},
                    {value: 100, name: 'display'}
                ]
            }
        ]
    };
    
    if (option && typeof option === "object") {     myChart.setOption(option, true); }

    var textBox = document.getElementById("textContent");
    textBox.innerHTML="";
    var h4 = document.createElement("h4");
    node =  document.createTextNode("Funnel charts are a type of chart, often used to represent stages in a sales process[1] and show the amount of potential revenue for each stage. This type of chart can also be useful in identifying potential problem areas in an organization’s sales processes. A funnel chart is similar to a stacked percent bar chart.");
    h4.appendChild(node);

    textBox.appendChild(h4);

}

// <!--************************ This is the introduction of the Gauge Chart***********************-->
function showGauge(){
    var myChart = echarts.init(document.getElementById('main'));
    option = {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: 'Business indicator',
                type: 'gauge',
                detail: {formatter:'{value}%'},
                data: [{value: 50, name: 'complete rate'}]
            }
        ]
    };
    
    setInterval(function () {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        myChart.setOption(option, true);
    },2000);
    
    if (option && typeof option === "object") {     myChart.setOption(option, true); }

    var textBox = document.getElementById("textContent");
    textBox.innerHTML="";
    var h4 = document.createElement("h4");
    node =  document.createTextNode("The gauge is often used to present KPIs, for example, on an executive dashboard, and together with segmenting and color coding, it is an effective way of illustrating a performance result.");
    h4.appendChild(node);

    textBox.appendChild(h4);

}

// <!--************************ This is the introduction of the Themeriver Chart***********************-->
function showThemeriver(){
    var myChart = echarts.init(document.getElementById('main'));
    option = {

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    color: 'rgba(0,0,0,0.2)',
                    width: 1,
                    type: 'solid'
                }
            }
        },
    
        legend: {
            data: ['DQ', 'TY', 'SS', 'QG', 'SY', 'DD']
        },
    
        singleAxis: {
            top: 50,
            bottom: 50,
            axisTick: {},
            axisLabel: {},
            type: 'time',
            axisPointer: {
                animation: true,
                label: {
                    show: true
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    opacity: 0.2
                }
            }
        },
    
        series: [
            {
                type: 'themeRiver',
                itemStyle: {
                    emphasis: {
                        shadowBlur: 20,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                },
                data: [['2015/11/08',10,'DQ'],['2015/11/09',15,'DQ'],['2015/11/10',35,'DQ'],
                ['2015/11/11',38,'DQ'],['2015/11/12',22,'DQ'],['2015/11/13',16,'DQ'],
                ['2015/11/14',7,'DQ'],['2015/11/15',2,'DQ'],['2015/11/16',17,'DQ'],
                ['2015/11/17',33,'DQ'],['2015/11/18',40,'DQ'],['2015/11/19',32,'DQ'],
                ['2015/11/20',26,'DQ'],['2015/11/21',35,'DQ'],['2015/11/22',40,'DQ'],
                ['2015/11/23',32,'DQ'],['2015/11/24',26,'DQ'],['2015/11/25',22,'DQ'],
                ['2015/11/26',16,'DQ'],['2015/11/27',22,'DQ'],['2015/11/28',10,'DQ'],
                ['2015/11/08',35,'TY'],['2015/11/09',36,'TY'],['2015/11/10',37,'TY'],
                ['2015/11/11',22,'TY'],['2015/11/12',24,'TY'],['2015/11/13',26,'TY'],
                ['2015/11/14',34,'TY'],['2015/11/15',21,'TY'],['2015/11/16',18,'TY'],
                ['2015/11/17',45,'TY'],['2015/11/18',32,'TY'],['2015/11/19',35,'TY'],
                ['2015/11/20',30,'TY'],['2015/11/21',28,'TY'],['2015/11/22',27,'TY'],
                ['2015/11/23',26,'TY'],['2015/11/24',15,'TY'],['2015/11/25',30,'TY'],
                ['2015/11/26',35,'TY'],['2015/11/27',42,'TY'],['2015/11/28',42,'TY'],
                ['2015/11/08',21,'SS'],['2015/11/09',25,'SS'],['2015/11/10',27,'SS'],
                ['2015/11/11',23,'SS'],['2015/11/12',24,'SS'],['2015/11/13',21,'SS'],
                ['2015/11/14',35,'SS'],['2015/11/15',39,'SS'],['2015/11/16',40,'SS'],
                ['2015/11/17',36,'SS'],['2015/11/18',33,'SS'],['2015/11/19',43,'SS'],
                ['2015/11/20',40,'SS'],['2015/11/21',34,'SS'],['2015/11/22',28,'SS'],
                ['2015/11/23',26,'SS'],['2015/11/24',37,'SS'],['2015/11/25',41,'SS'],
                ['2015/11/26',46,'SS'],['2015/11/27',47,'SS'],['2015/11/28',41,'SS'],
                ['2015/11/08',10,'QG'],['2015/11/09',15,'QG'],['2015/11/10',35,'QG'],
                ['2015/11/11',38,'QG'],['2015/11/12',22,'QG'],['2015/11/13',16,'QG'],
                ['2015/11/14',7,'QG'],['2015/11/15',2,'QG'],['2015/11/16',17,'QG'],
                ['2015/11/17',33,'QG'],['2015/11/18',40,'QG'],['2015/11/19',32,'QG'],
                ['2015/11/20',26,'QG'],['2015/11/21',35,'QG'],['2015/11/22',40,'QG'],
                ['2015/11/23',32,'QG'],['2015/11/24',26,'QG'],['2015/11/25',22,'QG'],
                ['2015/11/26',16,'QG'],['2015/11/27',22,'QG'],['2015/11/28',10,'QG'],
                ['2015/11/08',10,'SY'],['2015/11/09',15,'SY'],['2015/11/10',35,'SY'],
                ['2015/11/11',38,'SY'],['2015/11/12',22,'SY'],['2015/11/13',16,'SY'],
                ['2015/11/14',7,'SY'],['2015/11/15',2,'SY'],['2015/11/16',17,'SY'],
                ['2015/11/17',33,'SY'],['2015/11/18',40,'SY'],['2015/11/19',32,'SY'],
                ['2015/11/20',26,'SY'],['2015/11/21',35,'SY'],['2015/11/22',4,'SY'],
                ['2015/11/23',32,'SY'],['2015/11/24',26,'SY'],['2015/11/25',22,'SY'],
                ['2015/11/26',16,'SY'],['2015/11/27',22,'SY'],['2015/11/28',10,'SY'],
                ['2015/11/08',10,'DD'],['2015/11/09',15,'DD'],['2015/11/10',35,'DD'],
                ['2015/11/11',38,'DD'],['2015/11/12',22,'DD'],['2015/11/13',16,'DD'],
                ['2015/11/14',7,'DD'],['2015/11/15',2,'DD'],['2015/11/16',17,'DD'],
                ['2015/11/17',33,'DD'],['2015/11/18',4,'DD'],['2015/11/19',32,'DD'],
                ['2015/11/20',26,'DD'],['2015/11/21',35,'DD'],['2015/11/22',40,'DD'],
                ['2015/11/23',32,'DD'],['2015/11/24',26,'DD'],['2015/11/25',22,'DD'],
                ['2015/11/26',16,'DD'],['2015/11/27',22,'DD'],['2015/11/28',10,'DD']]
            }
        ]
    };
    
    if (option && typeof option === "object") {     myChart.setOption(option, true); }

    var textBox = document.getElementById("textContent");
    textBox.innerHTML="";
    var h4 = document.createElement("h4");
    node =  document.createTextNode("ThemeRiver is a visualization that depicts thematic changes in a collection of documents over a period of time using a river metaphor. ThemeRivers allow users to identify trends and patterns within large sets of documents and to find unexpected occurrences or non-occurrences of themes or topics.");
    h4.appendChild(node);

    textBox.appendChild(h4);

}

// <!--************************ This is the introduction of the calendar Chart***********************-->
function showCalendar(){
    // console.log("running");
    var myChart = echarts.init(document.getElementById('main'));
    var dateList = [
        ['2017-1-1', '初四'],
        ['2017-1-2', '初五'],
        ['2017-1-3', '初六'],
        ['2017-1-4', '初七'],
        ['2017-1-5', '初八', '小寒'],
        ['2017-1-6', '初九'],
        ['2017-1-7', '初十'],
        ['2017-1-8', '十一'],
        ['2017-1-9', '十二'],
        ['2017-1-10', '十三'],
        ['2017-1-11', '十四'],
        ['2017-1-12', '十五'],
        ['2017-1-13', '十六'],
        ['2017-1-14', '十七'],
        ['2017-1-15', '十八'],
        ['2017-1-16', '十九'],
        ['2017-1-17', '二十'],
        ['2017-1-18', '廿一'],
        ['2017-1-19', '廿二'],
        ['2017-1-20', '廿三', '大寒'],
        ['2017-1-21', '廿四'],
        ['2017-1-22', '廿五'],
        ['2017-1-23', '廿六'],
        ['2017-1-24', '廿七'],
        ['2017-1-25', '廿八'],
        ['2017-1-26', '廿九'],
        ['2017-1-27', '三十'],
        ['2017-1-28', '正月'],
        ['2017-1-29', '初二'],
        ['2017-1-30', '初三'],
        ['2017-1-31', '初四'],
        ['2017-2-1', '初五'],
        ['2017-2-2', '初六'],
        ['2017-2-3', '初七', '立春'],
        ['2017-2-4', '初八'],
        ['2017-2-5', '初九'],
        ['2017-2-6', '初十'],
        ['2017-2-7', '十一'],
        ['2017-2-8', '十二'],
        ['2017-2-9', '十三'],
        ['2017-2-10', '十四'],
        ['2017-2-11', '十五'],
        ['2017-2-12', '十六'],
        ['2017-2-13', '十七'],
        ['2017-2-14', '十八'],
        ['2017-2-15', '十九'],
        ['2017-2-16', '二十'],
        ['2017-2-17', '廿一'],
        ['2017-2-18', '廿二', '雨水'],
        ['2017-2-19', '廿三'],
        ['2017-2-20', '廿四'],
        ['2017-2-21', '廿五'],
        ['2017-2-22', '廿六'],
        ['2017-2-23', '廿七'],
        ['2017-2-24', '廿八'],
        ['2017-2-25', '廿九'],
        ['2017-2-26', '二月'],
        ['2017-2-27', '初二'],
        ['2017-2-28', '初三'],
        ['2017-3-1', '初四'],
        ['2017-3-2', '初五'],
        ['2017-3-3', '初六'],
        ['2017-3-4', '初七'],
        ['2017-3-5', '初八', '驚蟄'],
        ['2017-3-6', '初九'],
        ['2017-3-7', '初十'],
        ['2017-3-8', '十一'],
        ['2017-3-9', '十二'],
        ['2017-3-10', '十三'],
        ['2017-3-11', '十四'],
        ['2017-3-12', '十五'],
        ['2017-3-13', '十六'],
        ['2017-3-14', '十七'],
        ['2017-3-15', '十八'],
        ['2017-3-16', '十九'],
        ['2017-3-17', '二十'],
        ['2017-3-18', '廿一'],
        ['2017-3-19', '廿二'],
        ['2017-3-20', '廿三', '春分'],
        ['2017-3-21', '廿四'],
        ['2017-3-22', '廿五'],
        ['2017-3-23', '廿六'],
        ['2017-3-24', '廿七'],
        ['2017-3-25', '廿八'],
        ['2017-3-26', '廿九'],
        ['2017-3-27', '三十'],
        ['2017-3-28', '三月'],
        ['2017-3-29', '初二'],
        ['2017-3-30', '初三'],
        ['2017-3-31', '初四'],
        ['2017-4-1', '初五'],
        ['2017-4-2', '初六'],
        ['2017-4-3', '初七'],
        ['2017-4-4', '初八', '清明'],
        ['2017-4-5', '初九'],
        ['2017-4-6', '初十'],
        ['2017-4-7', '十一'],
        ['2017-4-8', '十二'],
        ['2017-4-9', '十三'],
        ['2017-4-10', '十四'],
        ['2017-4-11', '十五'],
        ['2017-4-12', '十六'],
        ['2017-4-13', '十七'],
        ['2017-4-14', '十八'],
        ['2017-4-15', '十九'],
        ['2017-4-16', '二十'],
        ['2017-4-17', '廿一'],
        ['2017-4-18', '廿二'],
        ['2017-4-19', '廿三'],
        ['2017-4-20', '廿四', '穀雨'],
        ['2017-4-21', '廿五'],
        ['2017-4-22', '廿六'],
        ['2017-4-23', '廿七'],
        ['2017-4-24', '廿八'],
        ['2017-4-25', '廿九'],
        ['2017-4-26', '四月'],
        ['2017-4-27', '初二'],
        ['2017-4-28', '初三'],
        ['2017-4-29', '初四'],
        ['2017-4-30', '初五'],
        ['2017-5-1', '初六'],
        ['2017-5-2', '初七'],
        ['2017-5-3', '初八'],
        ['2017-5-4', '初九'],
        ['2017-5-5', '初十', '立夏'],
        ['2017-5-6', '十一'],
        ['2017-5-7', '十二'],
        ['2017-5-8', '十三'],
        ['2017-5-9', '十四'],
        ['2017-5-10', '十五'],
        ['2017-5-11', '十六'],
        ['2017-5-12', '十七'],
        ['2017-5-13', '十八'],
        ['2017-5-14', '十九'],
        ['2017-5-15', '二十'],
        ['2017-5-16', '廿一'],
        ['2017-5-17', '廿二'],
        ['2017-5-18', '廿三'],
        ['2017-5-19', '廿四'],
        ['2017-5-20', '廿五'],
        ['2017-5-21', '廿六', '小滿'],
        ['2017-5-22', '廿七'],
        ['2017-5-23', '廿八'],
        ['2017-5-24', '廿九'],
        ['2017-5-25', '三十'],
        ['2017-5-26', '五月'],
        ['2017-5-27', '初二'],
        ['2017-5-28', '初三'],
        ['2017-5-29', '初四'],
        ['2017-5-30', '初五'],
        ['2017-5-31', '初六'],
        ['2017-6-1', '初七'],
        ['2017-6-2', '初八'],
        ['2017-6-3', '初九'],
        ['2017-6-4', '初十'],
        ['2017-6-5', '十一', '芒種'],
        ['2017-6-6', '十二'],
        ['2017-6-7', '十三'],
        ['2017-6-8', '十四'],
        ['2017-6-9', '十五'],
        ['2017-6-10', '十六'],
        ['2017-6-11', '十七'],
        ['2017-6-12', '十八'],
        ['2017-6-13', '十九'],
        ['2017-6-14', '二十'],
        ['2017-6-15', '廿一'],
        ['2017-6-16', '廿二'],
        ['2017-6-17', '廿三'],
        ['2017-6-18', '廿四'],
        ['2017-6-19', '廿五'],
        ['2017-6-20', '廿六'],
        ['2017-6-21', '廿七', '夏至'],
        ['2017-6-22', '廿八'],
        ['2017-6-23', '廿九'],
        ['2017-6-24', '六月'],
        ['2017-6-25', '初二'],
        ['2017-6-26', '初三'],
        ['2017-6-27', '初四'],
        ['2017-6-28', '初五'],
        ['2017-6-29', '初六'],
        ['2017-6-30', '初七'],
        ['2017-7-1', '初八'],
        ['2017-7-2', '初九'],
        ['2017-7-3', '初十'],
        ['2017-7-4', '十一'],
        ['2017-7-5', '十二'],
        ['2017-7-6', '十三'],
        ['2017-7-7', '十四', '小暑'],
        ['2017-7-8', '十五'],
        ['2017-7-9', '十六'],
        ['2017-7-10', '十七'],
        ['2017-7-11', '十八'],
        ['2017-7-12', '十九'],
        ['2017-7-13', '二十'],
        ['2017-7-14', '廿一'],
        ['2017-7-15', '廿二'],
        ['2017-7-16', '廿三'],
        ['2017-7-17', '廿四'],
        ['2017-7-18', '廿五'],
        ['2017-7-19', '廿六'],
        ['2017-7-20', '廿七'],
        ['2017-7-21', '廿八'],
        ['2017-7-22', '廿九', '大暑'],
        ['2017-7-23', '閏六',],
        ['2017-7-24', '初二'],
        ['2017-7-25', '初三'],
        ['2017-7-26', '初四'],
        ['2017-7-27', '初五'],
        ['2017-7-28', '初六'],
        ['2017-7-29', '初七'],
        ['2017-7-30', '初八'],
        ['2017-7-31', '初九'],
        ['2017-8-1', '初十'],
        ['2017-8-2', '十一'],
        ['2017-8-3', '十二'],
        ['2017-8-4', '十三'],
        ['2017-8-5', '十四'],
        ['2017-8-6', '十五'],
        ['2017-8-7', '十六', '立秋'],
        ['2017-8-8', '十七'],
        ['2017-8-9', '十八'],
        ['2017-8-10', '十九'],
        ['2017-8-11', '二十'],
        ['2017-8-12', '廿一'],
        ['2017-8-13', '廿二'],
        ['2017-8-14', '廿三'],
        ['2017-8-15', '廿四'],
        ['2017-8-16', '廿五'],
        ['2017-8-17', '廿六'],
        ['2017-8-18', '廿七'],
        ['2017-8-19', '廿八'],
        ['2017-8-20', '廿九'],
        ['2017-8-21', '三十'],
        ['2017-8-22', '七月'],
        ['2017-8-23', '初二', '處暑'],
        ['2017-8-24', '初三'],
        ['2017-8-25', '初四'],
        ['2017-8-26', '初五'],
        ['2017-8-27', '初六'],
        ['2017-8-28', '初七'],
        ['2017-8-29', '初八'],
        ['2017-8-30', '初九'],
        ['2017-8-31', '初十'],
        ['2017-9-1', '十一'],
        ['2017-9-2', '十二'],
        ['2017-9-3', '十三'],
        ['2017-9-4', '十四'],
        ['2017-9-5', '十五'],
        ['2017-9-6', '十六'],
        ['2017-9-7', '十七', '白露'],
        ['2017-9-8', '十八'],
        ['2017-9-9', '十九'],
        ['2017-9-10', '二十'],
        ['2017-9-11', '廿一'],
        ['2017-9-12', '廿二'],
        ['2017-9-13', '廿三'],
        ['2017-9-14', '廿四'],
        ['2017-9-15', '廿五'],
        ['2017-9-16', '廿六'],
        ['2017-9-17', '廿七'],
        ['2017-9-18', '廿八'],
        ['2017-9-19', '廿九'],
        ['2017-9-20', '八月'],
        ['2017-9-21', '初二'],
        ['2017-9-22', '初三'],
        ['2017-9-23', '初四', '秋分'],
        ['2017-9-24', '初五'],
        ['2017-9-25', '初六'],
        ['2017-9-26', '初七'],
        ['2017-9-27', '初八'],
        ['2017-9-28', '初九'],
        ['2017-9-29', '初十'],
        ['2017-9-30', '十一'],
        ['2017-10-1', '十二'],
        ['2017-10-2', '十三'],
        ['2017-10-3', '十四'],
        ['2017-10-4', '十五'],
        ['2017-10-5', '十六'],
        ['2017-10-6', '十七'],
        ['2017-10-7', '十八'],
        ['2017-10-8', '十九', '寒露'],
        ['2017-10-9', '二十'],
        ['2017-10-10', '廿一'],
        ['2017-10-11', '廿二'],
        ['2017-10-12', '廿三'],
        ['2017-10-13', '廿四'],
        ['2017-10-14', '廿五'],
        ['2017-10-15', '廿六'],
        ['2017-10-16', '廿七'],
        ['2017-10-17', '廿八'],
        ['2017-10-18', '廿九'],
        ['2017-10-19', '三十'],
        ['2017-10-20', '九月'],
        ['2017-10-21', '初二'],
        ['2017-10-22', '初三'],
        ['2017-10-23', '初四', '霜降'],
        ['2017-10-24', '初五'],
        ['2017-10-25', '初六'],
        ['2017-10-26', '初七'],
        ['2017-10-27', '初八'],
        ['2017-10-28', '初九'],
        ['2017-10-29', '初十'],
        ['2017-10-30', '十一'],
        ['2017-10-31', '十二'],
        ['2017-11-1', '十三'],
        ['2017-11-2', '十四'],
        ['2017-11-3', '十五'],
        ['2017-11-4', '十六'],
        ['2017-11-5', '十七'],
        ['2017-11-6', '十八'],
        ['2017-11-7', '十九', '立冬'],
        ['2017-11-8', '二十'],
        ['2017-11-9', '廿一'],
        ['2017-11-10', '廿二'],
        ['2017-11-11', '廿三'],
        ['2017-11-12', '廿四'],
        ['2017-11-13', '廿五'],
        ['2017-11-14', '廿六'],
        ['2017-11-15', '廿七'],
        ['2017-11-16', '廿八'],
        ['2017-11-17', '廿九'],
        ['2017-11-18', '十月'],
        ['2017-11-19', '初二'],
        ['2017-11-20', '初三'],
        ['2017-11-21', '初四'],
        ['2017-11-22', '初五', '小雪'],
        ['2017-11-23', '初六'],
        ['2017-11-24', '初七'],
        ['2017-11-25', '初八'],
        ['2017-11-26', '初九'],
        ['2017-11-27', '初十'],
        ['2017-11-28', '十一'],
        ['2017-11-29', '十二'],
        ['2017-11-30', '十三'],
        ['2017-12-1', '十四'],
        ['2017-12-2', '十五'],
        ['2017-12-3', '十六'],
        ['2017-12-4', '十七'],
        ['2017-12-5', '十八'],
        ['2017-12-6', '十九'],
        ['2017-12-7', '二十', '大雪'],
        ['2017-12-8', '廿一'],
        ['2017-12-9', '廿二'],
        ['2017-12-10', '廿三'],
        ['2017-12-11', '廿四'],
        ['2017-12-12', '廿五'],
        ['2017-12-13', '廿六'],
        ['2017-12-14', '廿七'],
        ['2017-12-15', '廿八'],
        ['2017-12-16', '廿九'],
        ['2017-12-17', '三十'],
        ['2017-12-18', '十一月',],
        ['2017-12-19', '初二'],
        ['2017-12-20', '初三'],
        ['2017-12-21', '初四'],
        ['2017-12-22', '初五', '冬至'],
        ['2017-12-23', '初六'],
        ['2017-12-24', '初七'],
        ['2017-12-25', '初八'],
        ['2017-12-26', '初九'],
        ['2017-12-27', '初十'],
        ['2017-12-28', '十一'],
        ['2017-12-29', '十二'],
        ['2017-12-30', '十三'],
        ['2017-12-31', '十四']
    ];
    
    var heatmapData = [];
    var lunarData = [];
    for (var i = 0; i < dateList.length; i++) {
        heatmapData.push([
            dateList[i][0],
            Math.random() * 300
        ]);
        lunarData.push([
            dateList[i][0],
            1,
            dateList[i][1],
            dateList[i][2]
        ]);
    }
    
    
    option = {
        tooltip: {
            formatter: function (params) {
                return 'raining amount: ' + params.value[1].toFixed(2);
            }
        },
    
        visualMap: {
            show: false,
            min: 0,
            max: 300,
            calculable: true,
            seriesIndex: [2],
            orient: 'horizontal',
            left: 'center',
            bottom: 20,
            inRange: {
                color: ['#e0ffff', '#006edd'],
                opacity: 0.3
            },
            controller: {
                inRange: {
                    opacity: 0.5
                }
            }
        },
    
        calendar: [{
            left: 'center',
            top: 'middle',
            cellSize: [70, 70],
            yearLabel: {show: false},
            orient: 'vertical',
            dayLabel: {
                firstDay: 1,
                nameMap: 'cn'
            },
            monthLabel: {
                show: false
            },
            range: '2017-03'
        }],
    
        series: [{
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize: 1,
            label: {
                normal: {
                    show: true,
                    formatter: function (params) {
                        var d = echarts.number.parseDate(params.value[0]);
                        return d.getDate() + '\n\n' + params.value[2] + '\n\n';
                    },
                    textStyle: {
                        color: '#000'
                    }
                }
            },
            data: lunarData
        }, {
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize: 1,
            label: {
                normal: {
                    show: true,
                    formatter: function (params) {
                        return '\n\n\n' + (params.value[3] || '');
                    },
                    textStyle: {
                        fontSize: 14,
                        fontWeight: 700,
                        color: '#a00'
                    }
                }
            },
            data: lunarData
        }, {
            name: 'rainning amount',
            type: 'heatmap',
            coordinateSystem: 'calendar',
            data: heatmapData
        }]
    };
    
    if (option && typeof option === "object") {     myChart.setOption(option, true); }

    var textBox = document.getElementById("textContent");
    textBox.innerHTML="";
    var h4 = document.createElement("h4");
    node =  document.createTextNode("A calendar chart is a visualization used to show activity over the course of a long span of time, such as months or years. They're best used when you want to illustrate how some quantity varies depending on the day of the week, or how it trends over time.");
    h4.appendChild(node);

    textBox.appendChild(h4);

}

// <!--************************ This is the introduction of the Dataset Chart***********************-->
function showDataset(){
    // console.log("running");
    var myChart = echarts.init(document.getElementById('main'));
    option = {
        legend: {},
        tooltip: {},
        dataset: {
            source: [
                ['product', '2015', '2016', '2017'],
                ['Matcha Latte', 43.3, 85.8, 93.7],
                ['Milk Tea', 83.1, 73.4, 55.1],
                ['Cheese Cocoa', 86.4, 65.2, 82.5],
                ['Walnut Brownie', 72.4, 53.9, 39.1]
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'}
        ]
    };
    
    
    
    if (option && typeof option === "object") {     myChart.setOption(option, true); }

    var textBox = document.getElementById("textContent");
    textBox.innerHTML="";
    var h4 = document.createElement("h4");
    node =  document.createTextNode("You can use only certain chart types when displaying multiple datasets in a single report including Bar, Horizontal bar, Line, Column, Area, Spline");
    h4.appendChild(node);

    textBox.appendChild(h4);

}

// <!--************************ This is the introduction of the 3D Bar Chart***********************-->
function show3DBar(){
    // console.log("running");
    var myChart = echarts.init(document.getElementById('main'));
   
    var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a','10a','11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'];
var days = ['Saturday', 'Friday', 'Thursday',
        'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];
option = {
    title: {
            text: '3D Bar Chart',
            subtext: '',
            left: 'center'
        },
    tooltip: {},
    visualMap: {
        max: 20,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },
    xAxis3D: {
        type: 'category',
        data: hours
    },
    yAxis3D: {
        type: 'category',
        data: days
    },
    zAxis3D: {
        type: 'value'
    },
    grid3D: {
        boxWidth: 200,
        boxDepth: 80,
        viewControl: {
            // projection: 'orthographic'
        },
        light: {
            main: {
                intensity: 1.2,
                shadow: true
            },
            ambient: {
                intensity: 0.3
            }
        }
    },
    series: [{
        type: 'bar3D',
        data: data.map(function (item) {
            return {
                value: [item[1], item[0], item[2]],
            }
        }),
        shading: 'lambert',

        label: {
            textStyle: {
                fontSize: 16,
                borderWidth: 1
            }
        },

        emphasis: {
            label: {
                textStyle: {
                    fontSize: 20,
                    color: '#900'
                }
            },
            itemStyle: {
                color: '#900'
            }
        }
    }]
}
    
    
    if (option && typeof option === "object") {     myChart.setOption(option, true); }

    var textBox = document.getElementById("textContent");
    textBox.innerHTML="";
    var h4 = document.createElement("h4");
    node =  document.createTextNode("Data for a 3D bar chart are entered in columns. Each numeric data value becomes a bar. The simple 3D bar chart procedure gives a 3D bar chart for each column of data. The two-factor 3D bar chart combines columns of data into a single chart.");
    h4.appendChild(node);

    textBox.appendChild(h4);

}