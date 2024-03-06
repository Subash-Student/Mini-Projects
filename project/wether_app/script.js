const ApiKey ="7dad6d34012a15c9f08794f510b8af10";
const ApiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const SearchBox = document.querySelector(".search input");
const SearchButton = document.querySelector(".search button");
var weatherIcon = document.querySelector(".weather-icon");

async function checkWether(city){
    const response = await fetch(ApiUrl+city+`&appid=${ApiKey}`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
    }
    else{
        document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";
    
    if(data.weather[0].main == "Clear"){
        weatherIcon.src ="images/clear.png";
    }
    else if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Dirzzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src ="images/snow.png";
    }
    else if(data.weather[0].main == "Wind"){
        weatherIcon.src ="images/wind.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src ="images/rain.png";
    }

    document.querySelector(".Wether").style.display ="block";
    }

    
}
    


SearchButton.addEventListener("click", ()=>{
    checkWether(SearchBox.value);

})



