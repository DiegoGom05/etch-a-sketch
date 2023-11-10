let container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);
for(let i = 1; i <= 16; i++){
    let row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    for(let j = 1; j <= 16; j++){
        let square = document.createElement('div');
        square.className = 'square';
        square.innerHTML = i;
        row.appendChild(square);
        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = 'red';
        })
    }
}
 