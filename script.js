// main div contains all content on page

const mainDiv = document.querySelector('.main');
const selectionPopUpWindow = document.querySelector('.size-selection-window');


// create H1 title for page

const h1 = document.createElement('h1');
h1.textContent = 'etch-a-sketch';
mainDiv.appendChild(h1);


// create button to open window for selecting a grid size

const sizeButton = document.createElement('button')
sizeButton.classList.add('size-button');
sizeButton.textContent = "Select a grid size"
mainDiv.appendChild(sizeButton);


// create pop up window for grid size selection slider
    //create container

const sizeSelectionDiv = document.createElement('div');

    //add class to pop up window for styling

sizeSelectionDiv.classList.add('size-selection-window');

    //create label and slider for size selection
const sizeLabel = document.createElement('label');
sizeLabel.htmlFor = 'Grid Size';
sizeLabel.textContent = 'Grid size (between 10 and 200)';

const sizeSlider = document.createElement('input');
sizeSlider.type = 'range';
sizeSlider.id = 'size'
sizeSlider.name = 'size';
sizeSlider.min = 10;
sizeSlider.max = 200


    //append slider to pop up window and append window to main div
sizeSelectionDiv.appendChild(sizeLabel);
sizeSelectionDiv.appendChild(sizeSlider);
mainDiv.appendChild(sizeSelectionDiv)


    // create container for grid

const etchContainer = document.createElement('div');
etchContainer.classList.add('etch-container');
mainDiv.appendChild(etchContainer)


    // function for filling grid container with appropriate amount of pixels

const createSketchBoard  = (width) => {
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
    return mainDiv.appendChild(etchContainer);
}

const hideWindow = () => {
    return classList.add('hidden');
}

const showWindow = () => {
    return classList.add('visible');
}

const showSizeSelection = () => {
    selectionPopUpWindow.classList.remove('hidden');
    selectionPopUpWindow.showWindow();
}

const hideSizeSelection = () => {
    selectionPopUpWindow.classList.remove('visible');
    selectionPopUpWindow.hideWindow();
}


sizeButton.addEventListener('click', showSizeSelection)








let slider = document.querySelector('#size');


const testFunc = (e) => {
    console.log(size.value);
};


size.addEventListener('click', testFunc)