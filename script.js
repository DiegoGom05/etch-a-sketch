//declaration of html content
let btn = document.createElement('button');
btn.innerHTML = 'Change grid';
btn.className = 'changeGrid';
document.body.appendChild(btn);
let clear = document.createElement('button');
clear.innerHTML = 'Clear';
document.body.appendChild(clear);
let container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);
//declaration of the last clicked button
let lastClicked = null;
//declaration of the # of squares
let num = 16;
color = randomRgbColor();
function randomRgbColor () {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };

//creation of the squares
function createGrid(){
    container.innerHTML = '';
    for(let i = 1; i <= num; i++){
        let row = document.createElement('div');
        row.className = 'row';
        container.appendChild(row);
        for(let j = 1; j <= num; j++){
            let square = document.createElement('div');
            square.className = 'square';
            square.innerHTML = '';
            row.appendChild(square);     
            square.addEventListener('mousedown', function(){           
                lastClicked = square;
            })
            square.addEventListener('mouseup', function(){
                lastClicked = null;
            })
            square.addEventListener('click', function () {
                color = null;
                color = randomRgbColor();
                event.target.style.backgroundColor = color;
            });
        }
    }
}

createGrid();

//check if the mouse moves in the container
container.addEventListener('mousemove', function(){
    if (lastClicked) {
        // Check if the event target is a square
        if (event.target.classList.contains('square')) {
            color = null;
                color = randomRgbColor();
            event.target.style.backgroundColor = color;
             
        }
    }
})
 
btn.addEventListener('click', function(){
    num = prompt('Put the number of squares that you want the grid to have from 1 up to 42');
    if(num > 0 && num <= 42){
        createGrid();
    } else{
        alert('put a valid number');
    }
    
})

clear.addEventListener('click', function(){
    createGrid();
})

 