let table;
let selectedColumn = 'Year'; 
let startYear = 1880;
let endYear = 1880; 
let selectYear;
let maxData, minData;
let isDrawing = false; 
let frameRateValue =1;
let currentYear = 1880;

function preload() {
  table = loadTable('data/data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(400, 400);
  let drop = createSelect();
  drop.position(10, 10);
  drop.style('background-color', 'pink');
  drop.style('border-radius', '3px');
  drop.changed(updateSelectedColumn);
  let columns = table.columns;
  for (let col of columns) {
    drop.option(col);
  }
  drop.selected(selectedColumn);
  selectYear = drop;
}

function draw() {
  background(0);
  if (isDrawing && currentYear <= endYear) {
    frameRate(frameRateValue);
    let selectedData = getColumnData(selectedColumn);
    let startIndex = startYear - 1880;
    let maxYear = currentYear - 1880;
    maxData = max(selectedData);
    minData = min(selectedData);
    let x = width / (maxYear - startIndex);
    let dataRange = max(maxData, -minData);
    let y = height / dataRange / 2; 
    let setY = height / 2;
    noFill();
    stroke(0);
    for (let i = startIndex; i < maxYear; i++) {
      const x1 = (i - startIndex) * x;
      const y1 = setY - selectedData[i] * y;
      const x2 = (i - startIndex + 1) * x;
      const y2 = setY - selectedData[i + 1] * y;
      strokeWeight(2);
      stroke(random(255), random(255), random(255));
      line(x1, y1, x2, y2);
    }
    if (currentYear === endYear) {
      noLoop();
    }
    currentYear++;
  }
  strokeWeight(1);
  textSize(15);
  text('CURRENT YEAR: ' + currentYear, 10, 50);
}

function getColumnData(columnName) {
  return table.getColumn(columnName);
}

function updateSelectedColumn() {
  selectedColumn = selectYear.value();
  startYear = 1880;
  endYear = 2022;
  isDrawing = true;
  currentYear = 1880;
}
