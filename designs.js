// Select color input
let colorInput = document.getElementById('colorPicker').value;

// Select size input
let widthInput = document.getElementById('inputWidth').value;
let heightInput = document.getElementById('inputHeight').value;

// When size is submitted by the user, call makeGrid()

const sizePicker = document.getElementById('sizePicker');

const pixelCanvas = document.getElementById('pixelCanvas');

pixelCanvas.addEventListener("click", function() {
  colorInput = document.getElementById('colorPicker').value;
  event.target.style.backgroundColor = colorInput;
})

sizePicker.addEventListener("submit", makeGrid);

function makeGrid() {
  //prevent form submit from refreshing page
  event.preventDefault();
  //clear current table
  while (pixelCanvas.hasChildNodes()) {
    pixelCanvas.removeChild(pixelCanvas.firstChild);
  }
  //gather new values
  widthInput = document.getElementById('inputWidth').value;

  heightInput = document.getElementById('inputHeight').value;
  //create table functionality
  for (var i = 0; i < heightInput; i++) {
    //creates a table row element
    let row = document.createElement('tr');
    //attaches the element as a child to pixelCanvas
    pixelCanvas.appendChild(row);
    //nested loop, creates td and attaches it to each td
    for (var j = 0; j < widthInput; j++) {
      let td = document.createElement('td');
      row.appendChild(td);
    }
  }
};
