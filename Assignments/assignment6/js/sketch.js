// * Global variables * //
var yearsVsFloors;
var topY = 50;
var bottomY = 800;
var leftX = 50;
var rightX = 1000;
var textLeft = 30;


// * Preload function * //
function preload(){
  yearsVsFloors = loadTable('./data/yearsVsFloors.csv', 'csv', 'header');
  console.log('Done loading table...');
}

// * Setup function * //
function setup(){
  createCanvas(1100, 900);
  textSize(12);
  textFont('Roboto');
  console.log('Setup complete...');
  console.log(yearsVsFloors.getRowCount() + ' rows loaded...');
  console.log(yearsVsFloors.getColumnCount() + ' columns loaded...');
  colorMode(HSB, 100);
  noLoop();

  background(255);
  // fill(255);
  // Draw horizontal lines and the y axis
  for (var i = 0; i < 24; i++) {
    noStroke();
    textAlign(RIGHT, CENTER);
    text(round(map(i, 0, 23, 1900, 2015)), textLeft, map(i, 0, 23, bottomY, topY));
    stroke(80);
    line(textLeft + 10, map(i, 0, 23, bottomY, topY), rightX + 10, map(i, 0, 23, bottomY, topY));

  }
  noStroke();
  // Draw vertical lines and the x axis
  for (var i = 0; i < 15; i++) {
    textAlign(CENTER, TOP);
    text(round(map(i, 0, 14, 0, 70)), map(i, 0, 14, leftX, rightX), bottomY + 5);
    stroke(80);
    line(map(i, 0, 14, 40, 1010), topY , map(i, 0, 14, 40, 1010), bottomY);
  }  

  button1 = createButton('Button 1');
  button1.position(200, 1000);
  button1.mousePressed(func_button1);

  button2 = createButton('Button 2');
  button2.position(300, 1000);
  button2.mousePressed(func_button2);

  button3 = createButton('Button 3');
  button3.position(400, 1000);
  button3.mousePressed(func_button3);

  button4 = createButton('Button 4');
  button4.position(500, 1000);
  button4.mousePressed(func_button4);

}

function func_button1(){
      clear();
  drawAxis();
}

function func_button2(){
      drawGraph(0);
}

function func_button3(){
     drawGraph(1);
}

function func_button4(){
  drawGraph(2);
}

function drawAxis() {
    background(255);
  // fill(255);
  // Draw horizontal lines and the y axis
  for (var i = 0; i < 24; i++) {
    noStroke();
    textAlign(RIGHT, CENTER);
    text(round(map(i, 0, 23, 1900, 2015)), textLeft, map(i, 0, 23, bottomY, topY));
    stroke(80);
    line(textLeft + 10, map(i, 0, 23, bottomY, topY), rightX + 10, map(i, 0, 23, bottomY, topY));

  }
  noStroke();
  // Draw vertical lines and the x axis
  for (var i = 0; i < 15; i++) {
    textAlign(CENTER, TOP);
    text(round(map(i, 0, 14, 0, 70)), map(i, 0, 14, leftX, rightX), bottomY + 5);
    stroke(80);
    line(map(i, 0, 14, 40, 1010), topY , map(i, 0, 14, 40, 1010), bottomY);
  }  
}

function drawGraph(column){


  for (var i = 0; i < yearsVsFloors.getRowCount(); i++) {
    // Read per row the numfloor and yearbuilt
    var numfloor = parseFloat(yearsVsFloors.getString(i, 'NumFloors'));
    var year;
    if (column==0) {
      year = parseFloat(yearsVsFloors.getString(i, 'YearBuilt'));
      fill(100,250,212);
    }
    if (column==1) {
      year = parseFloat(yearsVsFloors.getString(i, 'YearAlter1'));
      fill(50,112,77);
    }
    if (column==2) {
      year = parseFloat(yearsVsFloors.getString(i, 'YearAlter2'));
      fill(150,123,24);
    }

    // If year is less than 1900 or numfloor is greater is 70
    if ((year < 1900) || (numfloor > 70) || (year > 2015))  {
      continue;
    }
    // map each floor between leftX and rightX
    numfloor = map(numfloor, 0, 70, leftX, rightX);
    // map each yearbuilt between bottomY and topY
    year = map(year, 1900, 2015, bottomY, topY);
    noStroke();    
    ellipse(numfloor, year, 4, 4);
  }

}

// * Draw function * //
function draw(){
  drawGraph(0);
  drawGraph(1);
  drawGraph(2);  
}