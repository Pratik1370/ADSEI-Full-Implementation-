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

  var yearMapping = {};
  for (years in data){
    // console.log(para['end']);
   if(!(data[years]in yearMapping) && (years <= para.end_year)){
      yearMapping[years] = [];
    }

    for(avgTemp in data[years][para.name]){
      console.log(years);
      if ((years >= para.start_year) && (years <= para.end_year))
        yearMapping[years].push(parseFloat(data[years][country][avgTemp]).toFixed(2));
    }

  }

  return yearMapping;

}

function getContinentalMapping(country){

  var avg_temp = 0;
  if(data['2013']){
        
   var temp_data = data['2013'][country];
   var count=0;
   for(var index=0; index < temp_data.length ; index++){
      count += parseInt(temp_data[index],10);
    }

    avg_temp = parseFloat(count/(temp_data.length)).toFixed(2);
            
        
  }
  return parseInt(avg_temp);

}

function groupBy( array)
{
  var groups = {};    
  var array2 = []; 
  var single_country_temp = []; 
  var china_data = [];
  var year_temp = 0;
//   array2['country'] = [];
//   array2['temp'] = [];
  var flag = -1;
  var date;
  var scatter_years = {};
  var single_country_Unc_temp = [];
  var six_month_temp = {};
  var map_data={};
  var year_check = {};

  array.forEach( function( o,i )
  {
      if(flag != -1){
        var a = array.slice(flag,1);
        flag = -1;
      }

      
        
        if(o.dt === '' || o.AverageTemperature === '' || o.AverageTemperatureUncertainty === '' || o.Country === ''){

            flag = i;
        } else {
            o.AverageTemperature = parseFloat(o.AverageTemperature);
            UncerAverageTemperature = parseFloat(o.AverageTemperatureUncertainty);

            date = moment(o.dt, 'YYYY-MM-DD').toDate();
            array[i].dt = date.getFullYear();
            year = array[i].dt;
            if(year > 2000){
              if(o.country=='India'){
                console.log(date);                console.log('______________________________________');

                console.log(o.AverageTemperature);

              }

              if(!(year in data)){
                data[year] = [];
              }
              if(!(o.Country in data[year])){
                data[year][o.Country]=[];
              }
              data[year][o.Country].push(o.AverageTemperature);
             

            }    
    }
  });


 
  var avg_temp = 0;
  if(data['2013']){
        for(country in data['2013']){
            var temp_data = data['2013'][country];
            var count=0;
            for(var index=0; index < temp_data.length ; index++){
                count += parseInt(temp_data[index],10);
            }
            avg_temp = parseFloat(count/(temp_data.length)).toFixed(2);
            map_country_json.push({name: country, value: avg_temp})
        }
}

  continent_json.push({value: getContinentalMapping('Africa'), 12:23, name: 'Africa', year: 2013});
  continent_json.push({value: getContinentalMapping('Asia'), 31:12, name: 'Asia', year: 2013});
  continent_json.push({value: -7.5, 11:12, name: 'Antartica',year: 2013});
  continent_json.push({value: getContinentalMapping('Europe'), 34:34, name: 'Europe', year: 2013});
  continent_json.push({value: getContinentalMapping('Australia'), 11:11, name: 'Australia',year: 2013});
  continent_json.push({value: getContinentalMapping('North America'), 16:17, name: 'North America',year: 2013});
  continent_json.push({value: getContinentalMapping('South America'), 10:09,  name: 'South America',year: 2013});
  
  
 

  return {'cities': cities, 'cities_2':cities_2, 'continent_data': continent_json, 'world_map_data': map_country_json};

//   return {'single_country_Unc_temp': single_country_Unc_temp, 'single_country_temp': single_country_temp, 'array': array, 'china_data': china_data};
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
    
  
    setTimeout(function(){
      res.json(jsonObj1);
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
     jsonObj1 = {'cities': cities, 'cities_2':cities_2, 'continent_data': continent_json, 'world_map_data': map_country_json};
     console.log('...................................................................');
     console.log(jsonObj1);
     console.log('...................................................................');
     }
};

exports.test_compare = function(req,res){
  console.log(req);

  
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

   var selected_country = req;
   var selected_country_2 = selected_country.split("_");


    if (selected_country != ''){
       

  
     cities = getYearMapping(selected_country_2[0]);
     cities_2 = getYearMapping(selected_country_2[1]);
     jsonObj1 = {'cities': cities, 'cities_2':cities_2, 'continent_data': continent_json, 'world_map_data': map_country_json};
    }
};

exports.bubble_compare1 = function(req,res){
  
    var currentPath = process.cwd();

    if (jsonObj1 == ''){
     
      const csvFilePath = currentPath+'/controllers/GlobalLandTemperaturesByMajorCity.csv'
console.log(csvFilePath);
    const csv=require('csvtojson')
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            jsonObj1 = groupBy (jsonObj);
            console.log(jsonObj1);
            
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
            jsonObj_cities = cities_data (jsonObj);
            
        });
        setTimeout(function(){
          console.log(typeof jsonObj_cities);
// return jsonObj_cities;
          res.send(jsonObj_cities); 
        },4000);
    
};

function cities_data( array)
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

      
        
        if(o.dt === '' || o.AverageTemperature === '' || o.AverageTemperatureUncertainty === '' || o.Country === '' || o.City === ''){

            flag = i;
        } else {
            o.AverageTemperature = parseFloat(o.AverageTemperature);
            // UncerAverageTemperature = parseFloat(o.AverageTemperatureUncertainty);

            date = moment(o.dt, 'YYYY-MM-DD').toDate();
            array[i].dt = date.getFullYear();
            year = array[i].dt;
            
            if(year == 2013 && o.Country == cities_of_country) {
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
    // });

  // console.log(cities_in_country);
return cities_in_country;

 }