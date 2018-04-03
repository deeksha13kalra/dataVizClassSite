// * Global Variables ** //
var apiKey = '&APPID=078d6c73ac474215a151b41028f6a4b9';
var api = 'http://api.openweathermap.org/data/2.5/weather?q='
var units = '&units=metric';
var weatherData;
var image;

// * Setup Function * //
function setup(){
  var canvas = createCanvas(800, 200)
    // jumbo-canvas is a string
    canvas.parent('jumbo-canvas')
    // background(255, 0, 200)
}
var button = select('#submit');
button.mousePressed(weatherAsk);

cityInput = select('#city');
noLoop();
 }

/* function mousePressed(cityInput){
 	remove();
 }
*/
function weatherAsk(){
  city = cityInput.value();
	var request = api + city  + apiKey + units;
  loadJSON(request, gotData);
}

function gotData(data){
	weatherData = data;
	description = weatherData.weather[0].description;
  temperature = weatherData.main.temp;
  humidity = weatherData.main.humidity;
  pressure = weatherData.main.pressure;
  print(weatherData);
}

function draw(){
 background(255);

  if (weatherData){
    text('The current weather for ' + city + ' is:', 50, 50);
    text(description, 80, 70);
    text(temperature + ' degrees C', 80, 90);
    text(humidity + '% humidity', 80, 110);
    text(pressure + ' hPa (pressure)', 80, 130);

    if(description=='light rain') {
      image = "images/rain.jpg"
    }

    else if (description == 'clear sky') {
      image = "images/snow.jpg"
    }

    else {
     image = "images/sunny.png" 
    }

    document.getElementById('headerImg').src = image;

  }

}