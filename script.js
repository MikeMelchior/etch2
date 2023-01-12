
const createSketchBoard  = (width) => {
    const main = document.querySelector('.main')
    const etchContainer = document.querySelector('.etch-container');
    for (let i = 0; i < width; i++) {
        
        let div = document.createElement('div');
        div.classList.add(`row${i}`,'grid-row');
        for (let j = 0; j < width; j++) {
            let pixel = document.createElement('div');
            pixel.classList.add(`column${j}`,'grid-pixel');
            div.appendChild(pixel);
        }
        etchContainer.appendChild(div);
    }
    main.appendChild(etchContainer);
}


// const gridSizeSelectionButton = () => {


// }


// createSketchBoard(25);



