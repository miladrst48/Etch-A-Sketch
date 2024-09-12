const container = document.querySelector('.container');

for (let i = 1; i <= 256; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.flex = `1 0 ${560 / 16}px`;
    
    newDiv.className = 'boxes';
    container.appendChild(newDiv);
    newDiv.addEventListener('mouseover', () => {
        newDiv.style.backgroundColor = 'lightblue';
    });
}

const changeGrid = document.querySelector('.gridSet');
changeGrid.addEventListener('click', () => {
    const num = prompt('Enter the gird number');
    const divs = document.querySelectorAll('.boxes');
    divs.forEach( a => {
        a.remove();
    } );

    for (let i = 1; i <= num * num; i++) {
        const newDiv = document.createElement('div');
        newDiv.style.flex = `1 0 ${560 / num}px`;
        
        newDiv.className = 'boxes';
        container.appendChild(newDiv);
        newDiv.addEventListener('mouseover', () => {
            newDiv.style.backgroundColor = 'lightgreen';
        });
    }

});
