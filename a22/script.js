
let images = [];
let dropdown;
let textSizeSlider, redSlider, greenSlider, blueSlider;
let p1;
let p2;
let p3;
let p4;
let p5;
let p6;
let p7;
let p8;
let p9;


let input1, input2;
let button;


function preload() {
  // images.push(loadImage('./images/Xavier.png'));
  // images.push(loadImage('./images/Drake.png'));
  // images.push(loadImage('./images/Monke.png'));
}


function setup() {

  images.push(loadImage('./images/Xavier.png'));
  images.push(loadImage('./images/Drake.png'));
  images.push(loadImage('./images/Monke.png'));


  


  let cnv = createCanvas(500, 585);
  cnv.parent('column-two'); //sets <div id="column-two"></div> as parent container of the canvas

  


 

  let p1 = createP('Select Image');
  p1.parent('column-one');
  p1.class('text');

  dropdown = createSelect();
  dropdown.parent('column-one');
  dropdown.class('custom-select');
   // dropdown.position(10, 610);
  dropdown.option('Image 1');
  dropdown.option('Image 2');
  dropdown.option('Image 3');
  dropdown.changed(changeImage);

  let p4 = createP('Textbox 1');
  p4.parent('column-one');
  input1 = createInput('Enter Text 1');
  input1.parent('column-one');
  input1.class('boxes');
  // input1.position(90, 600);

  let p5 = createP ('Textbox 2');
  p5.parent('column-one');
  input2 = createInput('Enter Text 2');
  input2.parent('column-one');
  input2.class('boxes');
  //input2.position(90, 630);

  let p2 = createP('Font size');
  p2.parent('column-one');
  textSizeSlider = createSlider(0, 255, 30);
  textSizeSlider.parent('column-one');
  textSizeSlider.class('slider');

  let p3 = createP('R value of font colour');
  p3.parent('column-one');
  redSlider = createSlider(0, 255, 100);
  redSlider.parent('column-one');
  redSlider.class('slider');
  

  let p6 = createP('G value of font colour');
  p6.parent('column-one');
  greenSlider = createSlider(0, 255, 100);
  greenSlider.parent('column-one');
  greenSlider.class('slider');
  //greenSlider.position(370, 630);
 // greenSlider.style('width', '80px');
  
  let p7 = createP('B value of font colour');
  p7.parent('column-one');
  blueSlider = createSlider(0, 255, 100);
  blueSlider.parent('column-one');
  blueSlider.class('slider');
  //blueSlider.position(460, 630);
  //blueSlider.style('width', '80px');

  let p8 = createP('Choose font');
  p8.parent('column-one');
  radio = createRadio();
  radio.option('Helvetica');
  radio.option('Georgia');
  radio.option('Courier New');
  radio.option('Gotham');
 // radio.style('width', '320px');
  //radio.position(100, 660);
  radio.selected('Helvetica');
  radio.parent('column-one');
  radio.class('radio');

  let p9 = createP('');
 //dropdown.parent('column-one');
 //dropdown.class('custom-select');
 p9.parent('column-one');
    let btn = createButton('Save as Image');
    btn.mousePressed(saveimg)
    btn.parent('column-one');
    btn.class('buttons'); 
    btn.id('button1'); 

  

  //Example of an input element (button) --- Replace this with your own inputs/controls
  // Assign all your input elements the parent - 'column-one'

  //let btn1 = createButton('Click Me'); //creates a button element called btn1

  //btn1.parent('column-one'); //sets div id="column-two"></div> as the parent container of the element
  //btn1.class('buttons'); //assigns the class 'buttons' to the element
 // btn1.id('button1'); //assigns the id 'button1' to element

  p1.class('text');
    p2.class('text');
    p3.class('text');
    p4.class('text');
    p5.class('text');
    p6.class('text');
    p7.class('text');
    p8.class('text');

  function saveimg(){
    saveCanvas(cnv,'My_Meme','png')
  }
}

function displayText() {
  
  
  
  let enteredText1 = input1.value();
  let enteredText2 = input2.value();
  
  
  // Display wrapped text from input 1
  textWrap(WORD);
  text(enteredText1, 218, 80, 260, 230);
  
  // Display wrapped text from input 2
  text(enteredText2, 218, 380, 260, 230);
  
  }


  

  function draw() {
  background('white');
    
    
    let selectedIndex = dropdown.selected();
  let index = int(selectedIndex.charAt(selectedIndex.length - 1)) - 1;
  
  if (index >= 0 && index < images.length) {
    image(images[index], 2, 2, 190, 580);
    //image(im1, 0,50,400,300);
  }
  noFill(0);
  rect(192, 2, 308, 290);
  rect(192, 292, 308, 290);
  rect(2, 2, 190, 290);
  rect(2, 292, 190, 290);
    
  //text('X' + mouseX, 500,590);
  //text('Y' + mouseY, 500,550);
    
  textWrap(WORD);
  textAlign(CENTER);
  let textSizeValue = textSizeSlider.value();
  let redValue = redSlider.value();
  let greenValue = greenSlider.value();
  let blueValue = blueSlider.value();
  
    
  textSize(textSizeValue);
  fill(redValue, greenValue, blueValue);
  let val = radio.value();
  textFont(val);


  displayText();
  }

function changeImage() {
  redraw();
}




