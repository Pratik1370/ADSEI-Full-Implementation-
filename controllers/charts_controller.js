var csvjson =require('csvjson');
var fs = require('fs');
var moment = require('moment');
var express = require('express');
var router = express.Router();

var data = {};
var map_country_json = [];
var continent_json = [];
var cities = {};
var cities_2 = {};
var jsonObj1 = '';
var all_years = [];
var cities_of_country = '';

function getYearMapping(country){

  var yearMapping = {};
  for (years in data){
   if(!(data[years]in yearMapping) && (years < 2013)){
      yearMapping[years] = [];
    }

    for(avgTemp in data[years][country]){
      if (years < 2013)
        yearMapping[years].push(parseFloat(data[years][country][avgTemp]).toFixed(2));
    }

  }

  return yearMapping;

}

function getYearMapping1(para){
  // console.log(para);
  var country = para.name;
  var s_year = para.start_year;
  var yearMapping = {};
  // for (years in data){
  //   console.log(years);
  //  if(!(data[years]in yearMapping) && (years <= para.end_year)){
  //     yearMapping[years] = [];
  //   }

//     for(avgTemp in data[s_year][para.name]){
//       console.log(avgTemp);
//       if ((years >= para.start_year) && (years <= para.end_year))
//         yearMapping[years].push(parseFloat(data[years][country][avgTemp]).toFixed(2));
//     }

//   // }
// console.log(yearMapping['2001']);
//   return yearMapping;
// console.log(country+s_year);
var r = data[s_year][country];
// console.log(r);

var rr = r.splice(12);
// console.log(r);
return r;

}

function getContinentalMapping(country){

  var avg_temp = 0;
  if(data['2001']){
    if(!((data['2001'][City])!= 'continent')){        
      var temp_data = data['2001'][country];
      //  console.log(data['2013']);
  //  console.log(data['2013'][country]);
  
   
   var count=0;
   for(var index=0; index < temp_data.length ; index++){
      count += parseInt(temp_data[index],10);
    }

    avg_temp = parseFloat(count/(temp_data.length)).toFixed(2);
            
      
  }
  }
  return parseInt(avg_temp);

}

function get_years_data(from_year, to_year, data){
  var continents_names = ['Asia', 'Africa', 'Antartica', 'North America', 'South America', 'Australia', 'Europe'];


  // var country;
  var avg_temp = 0;
  if(data[from_year]){

        for(country in data[from_year]){
          if(!(country in continents_names)){
            var temp_data = data[from_year][country];
            var count=0;
            for(var index=0; index < temp_data.length ; index++){
                count += parseInt(temp_data[index],10);
            }
            avg_temp = parseFloat(count/(temp_data.length)).toFixed(2);
            map_country_json.push({name: country, value: avg_temp});
          }
        }
  } 

  // continent_json.push({value: getContinentalMapping('Africa'), 12:23, name: 'Africa', year: 2009});
  // continent_json.push({value: getContinentalMapping('Asia'), 31:12, name: 'Asia', year: 2009});
  // continent_json.push({value: -7.5, 11:12, name: 'Antartica',year: 2009});
  // continent_json.push({value: getContinentalMapping('Europe'), 34:34, name: 'Europe', year: 2009});
  // continent_json.push({value: getContinentalMapping('Australia'), 11:11, name: 'Australia',year: 2009});
  // continent_json.push({value: getContinentalMapping('North America'), 16:17, name: 'North America',year: 2009});
  // continent_json.push({value: getContinentalMapping('South America'), 10:09,  name: 'South America',year: 2009});
  var continent_json = [];
  continent_json.push({value: 23,  name: 'Africa', year: 2009});
  continent_json.push({value: 12, name: 'Asia', year: 2009});
  continent_json.push({value: -7.5, name: 'Antartica',year: 2009});
  continent_json.push({value: 34, name: 'Europe', year: 2009});
  continent_json.push({value: 11, name: 'Australia',year: 2009});
  continent_json.push({value: 17, name: 'North America',year: 2009});
  continent_json.push({value: 09,  name: 'South America',year: 2009});

  return {'all_years':all_years, 'cities': cities, 'cities_2':cities_2, 'continent_data': continent_json, 'world_map_data': map_country_json};
}

function groupBy( array)
{
 
  var flag = -1;
  var date;

  array.forEach( function( o,i )
  {
      if(flag != -1){
        var a = array.slice(flag,1);
        flag = -1;
      }

      
        
        if(o.dt === '' || o.AverageTemperature === '' || o.AverageTemperatureUncertainty === '' || o.Country === '' || o.City === ''){

            flag = i;
        } else {
            o.AverageTemperature = parseFloat(o.AverageTemperature);
            UncerAverageTemperature = parseFloat(o.AverageTemperatureUncertainty);

            date = moment(o.dt, 'YYYY-MM-DD').toDate();
            array[i].dt = date.getFullYear();
            var arr_year = array[i].dt;
            // console.log(arr_year);
            // if(arr_year >= 2000){
              if(!(arr_year in data)){
                data[arr_year] = [];
                all_years.push(arr_year); //pushing all years in an array
              }
              if(!(o.Country in data[arr_year])){
                data[arr_year][o.Country]=[];
              }
              data[arr_year][o.Country].push(o.AverageTemperature);
             

            }    
    // }
  });

  all_years.sort();
  all_years.reverse();
  // console.log(data);
    return data;
}


exports.index = function(req, res){
    
    var currentPath = process.cwd();

    if (jsonObj1 == ''){
     
      const csvFilePath = currentPath+'/controllers/GlobalLandTemperaturesByMajorCity.csv'

    const csv=require('csvtojson')
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            jsonObj1 = groupBy (jsonObj);
            
        });
    }
    var from_year = '2001';
    var to_year;
  
    setTimeout(function(){
      var result = get_years_data(from_year,to_year,jsonObj1);
      res.json(result);
    },4000);
  


    
};

exports.test = function(req,res){
  // console.log(req);

  
    var currentPath = process.cwd();

    if (jsonObj1 == ''){
     
      const csvFilePath = currentPath+'/controllers/GlobalLandTemperaturesByMajorCity.csv'

    const csv=require('csvtojson')
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            jsonObj1 = groupBy (jsonObj);
            
        });
    }
    // var sent_data = JSON.stringify(req);
var sent_data = req;
   var selected_country = sent_data.name;
    if (selected_country != ''){
     cities = getYearMapping1(sent_data);
     var result = {'all_years':all_years ,'cities': cities, 'cities_2':cities_2, 'continent_data': continent_json, 'world_map_data': map_country_json};
    //  console.log('...................................................................');
    //  console.log(jsonObj1);
    //  console.log('...................................................................');
     }
};

exports.test_compare = function(req,res){
  // console.log(req);

  
    var currentPath = process.cwd();

    if (jsonObj1 == ''){
     
      const csvFilePath = currentPath+'/controllers/GlobalLandTemperaturesByMajorCity.csv'

    const csv=require('csvtojson')
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            jsonObj1 = groupBy (jsonObj);
            
        });
    }

    var country_name = req.name;
    // console.log(country_name);
    var selected_country_2 = country_name.split("_");


    if (country_name != ''){
       
      var para = {'name':selected_country_2[0], 'start_year':req.start_year}
      var para1 = {'name':selected_country_2[1], 'start_year':req.start_year}
         cities = getYearMapping1(para);
         cities_2 = getYearMapping1(para1);
         var result = {'cities': cities, 'cities_2':cities_2, 'continent_data': continent_json, 'world_map_data': map_country_json};
  }
};

exports.bubble_compare1 = function(req,res){
  
    var currentPath = process.cwd();

    if (jsonObj1 == ''){
     
      const csvFilePath = currentPath+'/controllers/GlobalLandTemperaturesByMajorCity.csv'
// console.log(csvFilePath);
    const csv=require('csvtojson')
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            jsonObj1 = groupBy (jsonObj);
            // console.log(jsonObj1);
            
        });
        
    }
    setTimeout(function(){
     
      res.send(jsonObj1); 
    },4000);
};

exports.cities = function(req,res){
  // console.log(req);

  
    var currentPath = process.cwd();
    var sent_data = req;
    var jsonObj_cities;
    // var selected_country = sent_data.name;
    // cities_of_country = 'India';
    cities_of_country = req.name;

    // if (jsonObj_cities == ''){
     
      const csvFilePath = currentPath+'/controllers/GlobalLandTemperaturesByMajorCity.csv'

    const csv=require('csvtojson')
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
          jsonObj_cities = cities_data (jsonObj,cities_of_country);
            
        });
        setTimeout(function(){
          // console.log(jsonObj_cities.cities_in_country);
          res.send(jsonObj_cities.cities_in_country); 
        },4000);
    
};

function cities_data( array,cntry_cities)
{
 
  var flag = -1;
  var date;
  var cities_in_country = [];
 var city = [];

  array.forEach( function( o,i )
  {
      if(flag != -1){
        var a = array.slice(flag,1);
        flag = -1;
      }

      
        
      if(o.dt === '' || o.AverageTemperature === '' || o.AverageTemperatureUncertainty === '' || o.Country === '' || o.City === '' || o.City === 'continent'){

            flag = i;
        } else {
            o.AverageTemperature = parseFloat(o.AverageTemperature);
            // UncerAverageTemperature = parseFloat(o.AverageTemperatureUncertainty);

            date = moment(o.dt, 'YYYY-MM-DD').toDate();
            array[i].dt = date.getFullYear();
            year = array[i].dt;
            
            if((year == 2001) && (o.Country == cntry_cities)) {
              if(!(o.City in city)){
                city[o.City] = [];
              }
              city[o.City].push(o.AverageTemperature);
            }
    }
  });
  // console.log(city);
      // city.forEach(function(p,j){
        for(var j in city){
          if(city.hasOwnProperty(j)){
            // console.log(j);
            var sum = city[j].reduce((previous, current) => current += previous);
            var avg = parseFloat(sum / city[j].length).toFixed(2);
              cities_in_country.push({name:j, value:avg});

          }
    }
    var reslt = {};
    return reslt = { 'cities_in_country': cities_in_country};


 }

 function countries(result){
  var country_list = [];

  result.forEach( function( o,i ){
    if(!(o.name in country_list)){
        country_list.push(o.name);
    }
 });
  // $.each(result, function(index, value) {
  //     if ($.inArray(value.name, categories) === -1) {
  //         categories.push(value.name);
  //     }
  // });
  return country_list;
 }
 
exports.country_names = function(req, res){
    
  var currentPath = process.cwd();
var jsonObj1ss;
  if (jsonObj1 == ''){
   
    const csvFilePath = currentPath+'/controllers/GlobalLandTemperaturesByMajorCity.csv'

  const csv=require('csvtojson')
  csv()
      .fromFile(csvFilePath)
      .then((jsonObj)=>{
          jsonObj1ss = countries (jsonObj);
          
      });
  }else{
    jsonObj1ss = countries (jsonObj1.world_map_data);

  }
  

  setTimeout(function(){
    // console.log(jsonObj1ss);
    res.send(jsonObj1ss);
  },4000);
};

function getcountryyeardata(gvn_data,para){
  // console.log(para);
  var date_year;
  var date_month;
  var cntry_cities = para.name;
  var flag;
  var date;
  var len = 0;
  var years_arr = [];
  var reslt_array = {};
  var min_val;
  gvn_data.forEach( function( o,i )
  {
      if(flag != -1){
        var a = gvn_data.slice(flag,1);
        flag = -1;
      }



        if(o.dt === '' || o.AverageTemperature === '' || o.AverageTemperatureUncertainty === '' || o.Country === '' || o.City === '' || o.City === 'continent'){

            flag = i;
        } else {
            o.AverageTemperature = parseFloat(o.AverageTemperature);
            // UncerAverageTemperature = parseFloat(o.AverageTemperatureUncertainty);

            date = moment(o.dt, 'YYYY-MM-DD').toDate();
            // array[i].dt = date.getFullYear();
            date_year = date.getFullYear();
            date_month = date.getMonth();
            if((date_year < 2012) && (o.Country == cntry_cities)) {
              if(!(date_year in reslt_array)){
                reslt_array[date_year]=[];
                if(years_arr.length < 7){
                  years_arr.push(date_year);
                }else{
                 min_val = Math.min.apply(null,years_arr);
                 var index = years_arr.indexOf(min_val);
                 years_arr[index] = date_year;
                }
                len++;
              }
              reslt_array[date_year][date_month] = o.AverageTemperature;
            }
          }
        });

        var i;
        // var iteration = len-7;
        var heat_array = [];
        // var k=0;
        years_arr.sort();
        // console.log(years_arr);
        var j=0;
        var y;
        for(i=0;i<7;i++){
            y = years_arr[i];
          for(j=0;j<12;j++){
            // console.log(reslt_array[y][j]);
            var arr = [];
            // console.log(arr[0]);

            arr[0]=i;
            arr[1]=j;
              arr[2]=Math.trunc(reslt_array[y][j]);
              heat_array.push(arr);
            }
          k++;
        }
                      // console.log(heat_array);

        var heat_data = {};
 return heat_data={'heat_array':heat_array,'years_arr':years_arr };
}
function heat_pie_cities(gvn_data,para){
   // console.log(para);
   var date_year;
   var date_month;
   var given_year = para.start_year;
   var cntry_cities = para.name;
   var cntry_arr = cntry_cities.split("_");
   console.log(cntry_arr);
   var flag;
   var date;
   var years_arr = [];
   var reslt_array = {};
   reslt_array[cntry_arr[0]] = {}
   reslt_array[cntry_arr[1]] = {};
   var min_val;
   var country_cities = {};
   var cities_in_country = [];
   country_cities[cntry_arr[0]] = [];
   country_cities[cntry_arr[1]] = [];
   gvn_data.forEach( function( o,i )
   {
       if(flag != -1){
         var a = gvn_data.slice(flag,1);
         flag = -1;
       }
 
 
 
         if(o.dt === '' || o.AverageTemperature === '' || o.Country === '' || o.City === '' || o.City === 'continent'){
 
             flag = i;
         } else {
             o.AverageTemperature = parseFloat(o.AverageTemperature);
             // UncerAverageTemperature = parseFloat(o.AverageTemperatureUncertainty);
 
             date = moment(o.dt, 'YYYY-MM-DD').toDate();
             date_year = date.getFullYear();

             date_month = date.getMonth();

             /*   Cities in a country code   */
             if((date_year == given_year) && (o.Country == cntry_arr[0] || o.Country == cntry_arr[1])) {

               if(!(o.City in country_cities[o.Country])){
                country_cities[o.Country][o.City] = [];
               }
               country_cities[o.Country][o.City].push(o.AverageTemperature);
             }
  
/** End of cities in a country function */

/**Begin Heat map code */

             if((o.Country == cntry_arr[0] || o.Country == cntry_arr[1]) && date_year <= given_year) {
               if(!(date_year in reslt_array[o.Country])){
                 reslt_array[o.Country][date_year]=[];
                  // console.log(reslt_array[o.Country][date_year]);
                  if(!(years_arr.includes(date_year))){
                      if(years_arr.length < 7){
                        years_arr.push(date_year);
                      }else{
                        min_val = Math.min.apply(null,years_arr);
                        if(min_val < date_year){
                          // console.log(min_val);
                          // console.log(date_year);
                            var index = years_arr.indexOf(min_val);
                            years_arr[index] = date_year;
                        }
                      }
                }
               }
               reslt_array[o.Country][date_year][date_month] = o.AverageTemperature;
             }
           }
         });

        for(var cont in country_cities){
          var temp_arr = [];
           for(var j in country_cities[cont]){
             var temp = country_cities[cont][j];
              if(country_cities[cont][j] != []){
                var sum = temp.reduce((previous, current) => current += previous);
                var avg = parseFloat(sum / temp.length).toFixed(2);
                  temp_arr.push({name:j, value:avg});
              }
          }
          cities_in_country.push({name:cont, value:temp_arr});
     }
              // console.log(cities_in_country);

         var i;
         var heat_array = {};
         years_arr.sort();
          //  console.log(years_arr);
           var y;
         for(var k=0;k<2;k++){
           var temp_arr = reslt_array[cntry_arr[k]];
            heat_array[cntry_arr[k]] = [];
          for(i=0;i<7;i++){
             y = years_arr[i];
            //  console.log(y);
            //  console.log(temp_arr[y]);
           for(j=0;j<12;j++){
             var arr = [];
             arr[0]=i;
             arr[1]=j;
               arr[2]=Math.trunc(temp_arr[y][j]);
               heat_array[cntry_arr[k]].push(arr);
             }
         } 
        }
         
         var heat_data = {};
  return heat_data={'countries':cntry_arr,'heat_array':heat_array,'years_arr':years_arr,'cities_in_country': cities_in_country };
}
exports.heat_map_data = function(req,res){
  var req_data = req;
  var currentPath = process.cwd();

  var relt;
  // if (jsonObj1 == ''){

    const csvFilePath = currentPath+'/controllers/GlobalLandTemperaturesByMajorCity.csv'

  const csv=require('csvtojson')
  csv()
      .fromFile(csvFilePath)
      .then((jsonObj)=>{
          // relt = getcountryyeardata(jsonObj,req_data);
          relt = heat_pie_cities(jsonObj,req_data);

      });
  // }    
  setTimeout(function(){
    // console.log(relt);
    res.send(relt);
  },5000);

};