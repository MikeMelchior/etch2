let gridSize = 0;
let color = 'black'
let defaultColor = '#E6E6E6'
let tool = 'pencil';


// main div contains all content on page

const mainDiv = document.querySelector('.main');

// create container for bulk of content to control pointer events when pop up windows are open

const mainContent = document.createElement('div');
mainContent.classList.add('main-content');
mainDiv.appendChild(mainContent)

// create H1 title for page

const h1 = document.createElement('h1');
h1.classList.add('title')
h1.textContent = 'etch-a-sketch';
mainContent.appendChild(h1);

// create container for 'options' buttons

const optionsButtonsContainer = document.createElement('div');
optionsButtonsContainer.classList.add('options-buttons');

// create drawing tool options button
const drawingOptionsButton = document.createElement('button');
drawingOptionsButton.classList.add('style-button','options-buttons');
drawingOptionsButton.textContent = 'Style Options';


// create button to open window for selecting a grid size

const sizeButton = document.createElement('button');
sizeButton.classList.add('size-button','options-buttons');
sizeButton.textContent = "Select a grid size";

// create reset button to restart drawing

const resetButton = document.createElement('button');
resetButton.classList.add('reset-button','options-buttons');
resetButton.textContent = 'DELETE GRID'

// append container for options buttons on home screen

optionsButtonsContainer.appendChild(drawingOptionsButton);
optionsButtonsContainer.appendChild(resetButton);
optionsButtonsContainer.appendChild(sizeButton);
mainContent.appendChild(optionsButtonsContainer);



// create popup window for drawing options----------------------------------------------------------------
    
const createStylePopup = () => {
    // create container
    const stylePopupWindow = document.createElement('div');

    // add classes to popup window for styling 
    // ADD EVS----------------------------------------------------------------------------------------
    stylePopupWindow.classList.add('popup-window','style-window','un-clickable');

    // create exit button
    const styleExitButton = document.createElement('button');
    styleExitButton.classList.add('style-exit-button');
    styleExitButton.textContent = 'X'

    // create color picker
    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.classList.add('color-picker');

    // create label for color picker
    const colorPickerLabel = document.createElement('label');
    colorPickerLabel.htmlFor = 'color picker'
    colorPickerLabel.textContent = 'Choose your color:'

    // create eraser container

    const eraserContainer = document.createElement('div');
    eraserContainer.classList.add('eraser-container');

        // create eraser button
        const eraserButton = document.createElement('button');
        eraserButton.classList.add('eraser-button','menu-button');
        eraserButton.textContent = 'Eraser'

        // create eraser status text
        const eraserStatusText = document.createElement('p');
        eraserStatusText.classList.add('eraser-status-text');
        eraserStatusText.textContent = 'Eraser mode: Off'

        // append elements
        eraserContainer.appendChild(eraserButton);
        eraserContainer.appendChild(eraserStatusText);

    stylePopupWindow.appendChild(styleExitButton);
    stylePopupWindow.appendChild(colorPickerLabel);
    stylePopupWindow.appendChild(colorPicker);
    stylePopupWindow.appendChild(eraserContainer);

    return stylePopupWindow
}

mainDiv.appendChild(createStylePopup())




// create popup window for grid size selection ----------------------------------------------

const createGridSizeWindow = () => {

    //create container
    const sizeSelectionDiv = document.createElement('div');

    //add class to pop up window for styling
    sizeSelectionDiv.classList.add('popup-window','size-selection-window','visible');

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
    const gridSizeButtonsContainer = document.createElement('div');
    gridSizeButtonsContainer.classList.add('grid-size-buttons-container');

    // create cancel button to exit popup window without changes
    const cancelSizeSelectionButton = document.createElement('button');
    cancelSizeSelectionButton.textContent = ' CANCEL ';
    cancelSizeSelectionButton.classList.add('cancel-button','menu-button');

    // create confirmation button to apply changes
    const startButton = document.createElement('button');
    startButton.textContent = 'Start Drawing!';
    startButton.classList.add('start-button','menu-button');

    // append buttons to container
    gridSizeButtonsContainer.appendChild(cancelSizeSelectionButton);
    gridSizeButtonsContainer.appendChild(startButton);


    //append content to pop up window and append window to main div

    sizeSelectionDiv.appendChild(gridSizeButtonsContainer);
    sizeSelectionDiv.appendChild(sizeLabel);
    sizeSelectionDiv.appendChild(sliderContainer);

    return sizeSelectionDiv;
}

mainDiv.appendChild(createGridSizeWindow());


// create warning window for grid reset

const createResetWarning = () => {
    const resetWarningWindow = document.createElement('div');
    resetWarningWindow.classList.add('popup-window','reset-warning-window','un-clickable');

    const resetText = document.createElement('p');
    resetText.classList.add('reset-text');
    resetText.textContent = 'Delete the grid?';
    const resetTextTwo = document.createElement('p');
    resetTextTwo.classList.add('warning-text');
    resetTextTwo.textContent = 'All of your work will be lost';

    const resetButtonsContainer = document.createElement('div');
    resetButtonsContainer.classList.add('reset-buttons-container');

        const resetApplyButton = document.createElement('button');
        resetApplyButton.classList.add('menu-button','reset-apply-button');
        resetApplyButton.textContent = "Delete my masterpiece"

        const resetCancelButton = document.createElement('button');
        resetCancelButton.classList.add('menu-button','reset-cancel-button');
        resetCancelButton.textContent = 'Cancel'
    
    resetButtonsContainer.appendChild(resetApplyButton);
    resetButtonsContainer.appendChild(resetCancelButton);

    resetWarningWindow.appendChild(resetText);
    resetWarningWindow.appendChild(resetTextTwo);
    resetWarningWindow.appendChild(resetButtonsContainer);

    return resetWarningWindow;
}

mainDiv.appendChild(createResetWarning())

//                                                  //
//                                                  //
// ~~~~~~~~~~~~~ CREATING GRID ~~~~~~~~~~~~~~~~~~~~ //
//                                                  //
//                                                  //

    // create container for grid

const etchContainer = document.createElement('div');
etchContainer.classList.add('etch-container');


    // create aesthetic knobs for bottom of 'etch-a-sketch'

const knobsContainer = document.createElement('div');
knobsContainer.classList.add('knobs-container');

const knobOne = document.createElement('div');
knobOne.classList.add('knob-one');
const knobTwo = document.createElement('div');
knobTwo.classList.add('knob-two');
knobsContainer.appendChild(knobOne);
knobsContainer.appendChild(knobTwo);


mainContent.appendChild(etchContainer)
mainContent.appendChild(knobsContainer);    


    // function for filling grid container with appropriate amount of pixels

const createSketchBoard  = (width) => {

        // remove any existing grid and replace with new grid
    const etchContainer = document.querySelector('.etch-container');
    mainContent.removeChild(etchContainer);
    const newContainer = document.createElement('div');
    newContainer.classList.add('etch-container');

        //
    let count = 0
    
    for (let i = 0; i < width; i++) {
        let div = document.createElement('div');
        div.classList.add(`row${i}`,'grid-row');
        for (let j = 0; j < width; j++) {
            let pixel = document.createElement('div');
            pixel.classList.add(`column${j}`,'grid-pixel',`${count}`);
            count++;
            div.appendChild(pixel);
        }
        newContainer.appendChild(div);
    }
    gridSize = Math.sqrt(count);
    return mainContent.insertBefore(newContainer, knobsContainer);
}






//                                                                              //
//                                                                              //
//                                EVENT LISTENERS                               //
//                                                                              //
//                                                                              //



const sizePopupWindowSelector = document.querySelector('.size-selection-window');
const stylePopupWindowSelector = document.querySelector('.style-window');
const resetPopupWindowSelector = document.querySelector('.reset-warning-window');

const Clickable = (window) => {
    window.classList.toggle('un-clickable');
}

const showWindow = (window) => {
    window.classList.toggle('visible');
    Clickable(window);
    Clickable(mainContent);
}

const showSizeSelectionWindow = () => {
    showWindow(sizePopupWindowSelector);
}

const hideSizeSelectionWindow = () => {
    if (document.querySelector('.main-content').classList[1] != 'un-clickable') {
        Clickable(mainContent);
    }
    showWindow(sizePopupWindowSelector);
}

const showStyleOptionsWindow = () => {
    showWindow(stylePopupWindowSelector);
}

const hideStyleOptionsWindow = () => {
    showWindow(stylePopupWindowSelector);
}

const showResetWindow = () => {
    showWindow(resetPopupWindowSelector);
}



const updateSliderValue = () => {
    let slider = document.querySelector('#size');
    let display = document.querySelector('.slider-value');
    display.textContent = slider.value;
}

const startGrid = (value) => {
    value = document.querySelector('#size').value;
    gridSize = value
    return createSketchBoard(gridSize);
}

const getColor = () => {
    if (tool == 'pencil') {
        return document.querySelector('.color-picker').value
    } else if (tool == 'eraser') {
        return defaultColor;
    } 
}

const toggleEraser = () => {
    let statusText = document.querySelector('.eraser-status-text');
    if (tool == 'pencil') {
        tool = 'eraser'
        statusText.textContent = 'Eraser mode: On'
    } else {
        tool = 'pencil'
        statusText.textContent = 'Eraser mode: Off'
    }

}

const colorPixel = (e) => {
        e.target.style.background = getColor();    
}

const activatePixels = (pixel) => {
    document.querySelectorAll('.grid-pixel').forEach((pixel) => {
        pixel.addEventListener('mouseenter', colorPixel)
    })
}

// SIZE OPTIONS AND EVENT LISTENERS------------------------------

const sizeButtonSelector = document.querySelector('.size-button');
sizeButtonSelector.addEventListener('click', showSizeSelectionWindow);
document.querySelector('#size').addEventListener('click', updateSliderValue);

const startGridButton = document.querySelector('.start-button');
startGridButton.addEventListener('click', startGrid);
startGridButton.addEventListener('click', activatePixels);
startGridButton.addEventListener('click', hideSizeSelectionWindow);



const cancelSizeButton = document.querySelector('.cancel-button');
cancelSizeButton.addEventListener('click', hideSizeSelectionWindow);
//-----------------------------------------------------------------



// STYLE OPTIONS AND EVENT LISTENERS---------------------------------

const styleButtonSelector = document.querySelector('.style-button');
styleButtonSelector.addEventListener('click', showStyleOptionsWindow);
document.querySelector('.style-exit-button').addEventListener('click', hideStyleOptionsWindow);

const eraserButtonSelector = document.querySelector('.eraser-button');
eraserButtonSelector.addEventListener('click', toggleEraser);


//------------------------------------------------------------------

const resetButtonSelector = document.querySelector('.reset-button');
resetButtonSelector.addEventListener('click', showResetWindow);

const resetApplyButtonSelector = document.querySelector('.reset-apply-button');
resetApplyButtonSelector.addEventListener('click', startGrid);
resetApplyButtonSelector.addEventListener('click', showResetWindow)

const resetCancelButtonSelector = document.querySelector('.reset-cancel-button');
resetCancelButtonSelector.addEventListener('click', showResetWindow);

// -------------------------------------------------------------------------




