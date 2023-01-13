// main div contains all content on page

const mainDiv = document.querySelector('.main');

// create container for bulk of content to control pointer events when pop up windows are open

const mainContent = document.createElement('div');
mainContent.classList.add('main-content');
mainDiv.appendChild(mainContent)

// create H1 title for page

const h1 = document.createElement('h1');
h1.textContent = 'etch-a-sketch';
mainContent.appendChild(h1);


// create button to open window for selecting a grid size

const sizeButton = document.createElement('button')
sizeButton.classList.add('size-button');
sizeButton.textContent = "Select a grid size"
mainContent.appendChild(sizeButton);


// create pop up window for grid size selection slider

        //create container

    const sizeSelectionDiv = document.createElement('div');

        //add class to pop up window for styling

    sizeSelectionDiv.classList.add('size-selection-window','hidden','un-clickable');

        //create label for grid size selection

    const sizeLabel = document.createElement('label');
    sizeLabel.htmlFor = 'Grid Size';
    sizeLabel.textContent = 'please make a selection between 10 and 100 that will determine the height and width of your grid';

        // create container for slider and slider value display

    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-container');

        // create slider for grid size selection

    const sizeSlider = document.createElement('input');
    sizeSlider.type = 'range';
    sizeSlider.id = 'size'
    sizeSlider.name = 'size';
    sizeSlider.min = 10;
    sizeSlider.max = 100

        // create slider value display

    const sliderValue = document.createElement('p');
    sliderValue.classList.add('slider-value');
    sliderValue.textContent = '50';

        // append slider and slider value display to container

    sliderContainer.appendChild(sizeSlider);
    sliderContainer.appendChild(sliderValue);

        // create container for buttons

    const popupButtonsContainer = document.createElement('div');
    popupButtonsContainer.classList.add('popup-buttons-container');

            // create cancel button to exit popup window without changes

        const cancelSizeSelectionButton = document.createElement('button');
        cancelSizeSelectionButton.textContent = '~   CANCEL   ~';
        cancelSizeSelectionButton.classList.add('cancel-button');

            // create confirmation button to apply changes
        
        const startButton = document.createElement('button');
        startButton.textContent = 'Start Drawing!';
        startButton.classList.add('start-button');

            // append buttons to container
        
        popupButtonsContainer.appendChild(cancelSizeSelectionButton);
        popupButtonsContainer.appendChild(startButton);


    //append content to pop up window and append window to main div

sizeSelectionDiv.appendChild(sizeLabel);
sizeSelectionDiv.appendChild(sliderContainer);
sizeSelectionDiv.appendChild(popupButtonsContainer);
mainDiv.appendChild(sizeSelectionDiv)



//                                                  //
//                                                  //
// ~~~~~~~~~~~~~ CREATING GRID ~~~~~~~~~~~~~~~~~~~~ //
//                                                  //
//                                                  //

    // create container for grid

const etchContainer = document.createElement('div');
etchContainer.classList.add('etch-container');
mainContent.appendChild(etchContainer)

    // create aesthetic knobs for bottom of 'etch-a-sketch'

const knobsContainer = document.createElement('div');
knobsContainer.classList.add('knobs-container');
mainContent.appendChild(knobsContainer);

    


    // function for filling grid container with appropriate amount of pixels

const createSketchBoard  = (width) => {
    const etchContainer = document.querySelector('.etch-container');

    mainContent.removeChild(etchContainer);
    const newContainer = document.createElement('div');
    newContainer.classList.add('etch-container');
    
    for (let i = 0; i < width; i++) {
        let div = document.createElement('div');
        div.classList.add(`row${i}`,'grid-row');
        for (let j = 0; j < width; j++) {
            let pixel = document.createElement('div');
            pixel.classList.add(`column${j}`,'grid-pixel');
            div.appendChild(pixel);
        }
        newContainer.appendChild(div);
    }
    return mainContent.insertBefore(newContainer, knobsContainer);
}











const selectionPopUpWindow = document.querySelector('.size-selection-window');



const hideWindow = (window) => {
    return window.classList.add('hidden');
}

const showWindow = (window) => {
    return window.classList.add('visible');
}

const Clickable = (window) => {
    return window.classList.toggle('un-clickable');
}

const showSizeSelectionWindow = () => {
    selectionPopUpWindow.classList.remove('hidden');
    showWindow(selectionPopUpWindow);
    Clickable(selectionPopUpWindow);
    Clickable(mainContent)
}

const hideSizeSelectionWindow = () => {
    selectionPopUpWindow.classList.remove('visible');
    hideWindow(selectionPopUpWindow);
    Clickable(selectionPopUpWindow);
    Clickable(mainContent);
}

const updateSliderValue = () => {
    let slider = document.querySelector('#size');
    let display = document.querySelector('.slider-value');
    display.textContent = slider.value
}

const startGrid = (value) => {
    value = document.querySelector('#size').value;
    return createSketchBoard(value);
}


sizeButton.addEventListener('click', showSizeSelectionWindow)
document.querySelector('#size').addEventListener('click', updateSliderValue)

const startGridButton = document.querySelector('.start-button');
startGridButton.addEventListener('click', startGrid);
startGridButton.addEventListener('click', hideSizeSelectionWindow)












// size.addEventListener('click', testFunc);