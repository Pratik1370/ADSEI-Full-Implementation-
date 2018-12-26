// ************************This is the introduction of the bar chart*******************************
function showBar(){
  var myChart = echarts.init(document.getElementById('main'));
  
  // specify chart configuration item and data
  var option = {
      title: {
          text: 'Fruit Count'
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

    myChart.setOption(option);  

    var textBox = document.getElementById("textContent");
    textBox.innerHTML="";
    var h4 = document.createElement("h4");
    var node = document.createTextNode("A Bar Graph is a graph that is drawn using rectangular bars to show how large each value is. The bars can be horizontal or vertical.");
     h4.appendChild(node);

     textBox.appendChild(h4);

}


// <!--************************ This is the introduction of the line chart ***********************-->
function showLine(){
    var myChart = echarts.init(document.getElementById('main'));
  
    // specify chart configuration item and data
    var option = {
        title: {
            text: 'The amount of people in the mall everyday'
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

    myChart.setOption(option);

    var textBox = document.getElementById("textContent");
    textBox.innerHTML="";
    var h4 = document.createElement("h4");
    var node = document.createTextNode(" Line graphs are used to track changes over short and long periods of time. When smaller changes exist, line graphs are better to use than bar graphs. Line graphs can also be used to compare changes over the same period of time for more than one group.");
    h4.appendChild(node);

    textBox.appendChild(h4);

}
  
