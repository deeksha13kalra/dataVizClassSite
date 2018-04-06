// * Global Variables ** //
var apiKey = '&APPID=078d6c73ac474215a151b41028f6a4b9';
var api = 'http://api.openweathermap.org/data/2.5/weather?q='
var units = '&units=metric';
var weatherData;
var cityInput;

// * Setup Function * //
function setup() {
    var canvas = createCanvas(400, 200);
    background(250);
    canvas.parent('jumbo-canvas');

    var button = select('#submit');
    cityInput = select('#city');
    button.mousePressed(weatherAsk);
    textSize(18);
    noLoop();
}


function weatherAsk() {
    city = cityInput.value();
    if (city == "Banana City") {
        alert("Psst... type a real city!");
        return;
    }
    var request = api + city + apiKey + units;
    loadJSON(request, gotData);
}

function gotData(data) {
    weatherData = data;
    description = weatherData.weather[0].description;
    temperature = Math.round (weatherData.main.temp);
    humidity = weatherData.main.humidity;
    pressure = weatherData.main.pressure;
    print(weatherData);

    if (weatherData) {
        // clear current city and redraw
        clear();
        background(255);
        text('The current weather for ' + city + ' is:', 50, 50);
         textSize(10);
        text(description, 80, 70);
 textSize(55);
        text(temperature + '° C', 80, 90);
         textSize(10);
        text(humidity + '% humidity', 80, 110);
        text(pressure + ' hPa (pressure)', 80, 130);

        if (description == 'light rain') {
            imagesrc = "images/rain.jpg"
        } else if (description == 'clear sky') {
            imagesrc = "images/snow.jpg"
        } else {
            imagesrc = "images/sunny.png"
        }

        document.getElementById('headerImg').src = imagesrc;

    }
}

function draw() {

}