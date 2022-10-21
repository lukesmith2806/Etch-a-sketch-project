

const btn = document.querySelector('button');
btn.addEventListener('click', event => {
    buttonClicked();
});


function createGrids(numGrids) {
    const gridContainer = document.getElementById('gridDiv');
    clearGrids();
    

   
    for(let i=0; i < numGrids*numGrids; i++) {
        const gridBox = document.createElement('div');
        const sideSize = gridContainer.clientWidth/numGrids;
        gridBox.style.width = `${sideSize}px`;
        gridBox.style.height = `${sideSize}px`;
        gridBox.style.backgroundColor = 'red'
    
        gridBox.classList.add('box');
        gridBox.addEventListener('mouseenter', hoverOverButton);
        
      
        gridContainer.appendChild(gridBox);
    }
    
}

createGrids(40);

function hoverOverButton() {
    
    this.style.backgroundColor = 'black';
    
}

function buttonClicked() {
    console.log("you clicked me");
}

function clearGrids() {
    const a = document.getElementById('gridDiv');
    const grids = a.querySelectorAll('.box');
  
    grids.forEach(ch => a.removeChild(ch));
  
    
}