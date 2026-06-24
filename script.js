function getWeather() {

    let city = document.getElementById("city").value;

    if(city === ""){
        alert("Please Enter City Name");
        return;
    }

    document.getElementById("cityName").innerText = city;
    
    let temp = Math.floor(Math.random() * 15) + 20;
    document.getElementById("temp").innerText = temp + "°C";

    let conditions = [
        "☀ Sunny",
        "☁ Cloudy",
        "🌧 Rainy",
        "⛈ Stormy",
        "🌫 Foggy"
    ];

    let randomCondition =
        conditions[Math.floor(Math.random() * conditions.length)];

    document.getElementById("condition").innerText = randomCondition;
}