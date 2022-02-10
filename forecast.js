const request = require("request");
 
const forecast = (latitude,longtitude,callbackFN)=>{
    const url = "http://api.weatherstack.com/current?access_key=9a0086d6864759433333b3f58be0cd1a&query="+latitude+","+longtitude;
    request ({url, json:true},(error, response)=>{    
        if(error){
            callbackFN("Unable to response",undefined)
        }
        else if(response.body.error){
            callbackFN("Unable to find location",undefined)
        }
        else{
            callbackFN(undefined,"It is: " +response.body.current.weather_descriptions[0]+" It is now: "+response.body.current.temperature+" degree")
        }
    })
}

module.exports = forecast;
