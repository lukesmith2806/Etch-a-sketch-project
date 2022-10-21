
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
        
        
      
        gridContainer.appendChild(gridBox);
    }
    
}

createGrids(2);



function clearGrids() {
    const a = document.getElementById('gridDiv');
    const grids = a.querySelectorAll('.box');
    console.log(grids);
    grids.forEach(ch => a.removeChild(ch));
    console.log(a);
    
}