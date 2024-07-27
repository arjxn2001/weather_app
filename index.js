const apiKey = '1960ccb0d5e630df92d137e7840b2d3c'

function getWeather(){
    let city = document.getElementById('location').value 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`).then((response)=>{
        if(!response.ok){
            throw new Error('city not found')
        }
        return response.json()


    }).then((weather)=>{
        

        //temperature
        let temp = weather.main['temp']

        //humidity
        let humid = weather.main['humidity']

        //country name
        let loc = weather.name

        //feels like
        let feels = weather.main['feels_like']

        //clouds
        let clouds = weather.weather[0].description

        //pressure
        let pressure = weather.main['pressure']

        //wind speed
        let wind = weather.wind.speed

        //country name
        let country = weather.sys['country']

        let weather_icon = weather.weather[0].icon

        temperature.innerHTML = `${temp}°C`
        place.innerHTML = `${loc}`
        feelsLike.innerHTML =`Feels like : ${feels}°C`
        overcastClouds.innerHTML = `${clouds}`
        humidity.innerHTML = `Humidity : ${humid}%`
        Pressure.innerHTML = `Pressure : ${pressure}`
        windSpeed.innerHTML = `Wind speed : ${wind}`
        countryName.innerHTML = `Country : ${country}`
        weatherImg.innerHTML = `<img id="weatherIcon"  src=" https://openweathermap.org/img/wn/${weather_icon}@2x.png" alt="">`
    })


}
function getTime(){
    const time = new Date()
    const hour = time.getHours()
    const min = time.getMinutes()
    const second = time.getSeconds()
    
    clock.innerHTML = `${hour} : ${min} :${second} ${hour>12?'PM':'AM'}`

    setTimeout(()=>{
        getTime()
    },1000)
}
getTime()

//date
function get__day(){
    const days = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"]
    const d = new Date()
    let day = days[d.getDay()]
    today.innerHTML = `${day}`
}
get__day()

getWeather()