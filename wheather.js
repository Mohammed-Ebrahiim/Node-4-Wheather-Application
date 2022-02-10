
// const request = require("request");
// const url = "http://api.weatherstack.com/current?access_key=9a0086d6864759433333b3f58be0cd1a&query=30.94671%2031.11184";
// request({url,json:true},(error, response)=>{
//     console.log(response.body)
//     // console.log(response.body.location.name)

//     if(error){
//         console.log("Error has Occured")
//     }else if(response.body.error){
//         console.log(response.body.error.type)
//     }else{
//         console.log(`The wheater status in: ${response.body.location.region} is: ${response.body.current.temperature} `)
//     }
// })

// const mapboxUrl = "http://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoibW9oYW1tZWQyMDIzIiwiYSI6ImNremZiOG95dzBwa3Myb29jdWczZDhrOGIifQ.L5DFbjyzKqGoI773a82OdA"
// request ({url:mapboxUrl, json:true},(error, response)=>{
//     // console.log(response.body);

//     if(error){
//         console.log(`error has occured`) // when you dont call api 
//     }else if(response.body.message){
//         console.log(`Access Token: ${response.body.message}`)//Access token
//     }
//     else if(response.body.features.length ==0){
//         console.log("Your Search is wrong")
//     }
//     else{
//         console.log(response.body.features[0].center[0])
//         console.log(response.body.features[0].center[1])
//     }

// })
//version one
// const request = require("request");
// const geocode =require("./geocode")
// const forecast = require('./forecast')

// geocode("india",(error,data)=>{
//     if(error){
//         console.log("error",error)
//     }
//     else{
//         console.log("data",data)
            
//         forecast(data.latitude,data.longtitude,(error,data)=>{
//             if(error){
//                 console.log(error)
//             }
//             else{
//                 console.log(data)
//             }
//         })
//     }
// })


//version two
const request = require("request");
const geocode =require("./geocode")
const forecast = require('./forecast')
console.log(process.argv)
geocode(process.argv[2],(error,data)=>{
    if(error){
        console.log("error",error)
    }
    else{
        console.log("data",data)
            
        forecast(data.latitude,data.longtitude,(error,data)=>{
            if(error){
                console.log(error)
                // console.log("")
            }
            else{
                console.log(data)
            }
        })
    }
})


