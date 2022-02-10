const request = require("request");
const geocode = (address,callback)=>{
    const mapboxUrl = "http://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoibW9oYW1tZWQyMDIzIiwiYSI6ImNremZiOG95dzBwa3Myb29jdWczZDhrOGIifQ.L5DFbjyzKqGoI773a82OdA"
    request ({url:mapboxUrl, json:true},(error, response)=>{
    // console.log(response.body);

    if(error){
        // console.log(`error has occured`) // when you dont call api 
        callback("unable to connect location servivce", undefined)
    }
    else if(response.body.message){
        // console.log(`Access Token: ${response.body.message}`)//Access token
        callback(response.body.message,undefined)
    }
    else if(response.body.features.length ==0){
        // console.log("Your Search is wrong")
        callback("Unable to find location",undefined)
    }
    else{
        callback(undefined,{
            latitude:response.body.features[0].center[0],
            longtitude:response.body.features[0].center[1],
            location: response.body.features[0].place_name
        })
    }
})
}


module.exports=geocode;