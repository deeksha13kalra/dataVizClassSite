// ** Global variables ** //
var yearsVsFloors;
var topY = 50;
var bottomY = 500;
var leftX = 50;
var rightX = 700;
var textLeft = 30;

//** Preload function ** //
function preload(){
  yearsVsFloors = loadTable('../data/yearsVsFloors.csv', 'csv', 'header');
  console.log('Done loading table...');
}

// ** Setup function ** //
function setup(){
  createCanvas(800, 800);
  textSize(12);
  textFont('Roboto');
  console.log('Setup complete...');
  // print(moviesTable.getRowCount() + ' rows loaded...');
  // print(moviesTable.getColumnCount() + ' columns loaded...');
  noLoop();
  
}

function drawGraph(){
  background(255);
  fill(0);
  for (var i = 0; i < 24; i++) {
    noStroke();
    textAlign(RIGHT, CENTER);
    text(round(map(i, 0, 23, 1900, 2015)), textLeft, map(i, 0, 23, bottomY, topY));
    stroke(200);
    line(textLeft + 10, map(i, 0, 23, bottomY, topY), rightX + 10, map(i, 0, 23, bottomY, topY));
  }
  noStroke();
  for (var i = 0; i < 15; i++) {
    textAlign(CENTER, TOP);
    text(round(map(i, 0, 14, 0, 70)), map(i, 0, 14, leftX, rightX), bottomY + 5);
    line(map(i, 0, 14, leftX, rightX), textLeft, map(i, 0, 14, leftX, rightX), rightX);
  }

for (var i = 0; i < yearsVsFloors.getRowCount(); i++) {
    var numfloor = parseInt(yearsVsFloors.getString(i, 'NumFloors'));
    var yearbuilt = parseInt(yearsVsFloors.getString(i, 'YearBuilt'));
    if(yearbuilt < 1900 || numfloor>70) {
      continue;
    }
    console.log(numfloor, yearbuilt);
    numfloor = map(numfloor, 0, 70, leftX, rightX);
    yearbuilt = map(yearbuilt, 1900, 2015, bottomY, topY);
    ellipse(numfloor, yearbuilt, 2, 2);
  }
  //   var date = table.getString(i, 'release_date');
  //   var year = parseInt(date);
  //   var yearPosition = map(year, 1916, 2017, leftX, rightX);
  //   var scorePosition = map(table.getNum(i, 'vote_average'), 0, 10, bottomY, topY);
  //   ellipse(yearPosition, scorePosition, 3, 3);
  // }
}

// ** Draw function ** //
function draw(){
  drawGraph();
}
