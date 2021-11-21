// Util functions
const getElement = (name, type) => {
    if(type == 'id') {
        return document.getElementById(name);
    } else if (type == 'class') {
        return document.getElementsByClassName(name);
    } else if (type == 'classes') {
        return document.querySelectorAll(`.${name}`);
    }
};

// Generating random colors functionality
const generateHex = () => {
    const hexSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let code = '#';
    let hexesArray = [];
    let hexArea = '';
    for(i = 0; i < 4; i++) {
        for(j = 0; j < 6; j++) {
            code += hexSymbols[Math.floor(Math.random() * hexSymbols.length)];
        }
        hexesArray.push(code);
        code = '#';
    }
    for(i = 0; i < colorAreas.length; i++) {
        colorAreas[i].style.backgroundColor = hexesArray[i];
        hexAreas[i].textContent = hexesArray[i];
    }
};

//Copying color functionality
const copy = (value) => {
    //! TODO
};

// variables
const firstCard = getElement('first-card', 'id');
const secondCard = getElement('second-card', 'id');
const thirdCard = getElement('third-card', 'id');
const fourthCard = getElement('fourth-card', 'id');
const cards = getElement('card', 'classes');
const generateBtn = getElement('generateBtn', 'id');

// Array used for holding card color areas
const colorAreas = [firstCard, secondCard, thirdCard, fourthCard];
const hexAreas = getElement('hex span', 'classes');

// Applying colors to cards
window.addEventListener('load', () => {
    generateHex();
});

//Spacebar color generation
document.addEventListener('keydown', (e) => {
    if(e.key == ' ' || e.code == 'Space') {
        generateHex();
    } else {
        return false;
    }
});

//Button color generation
generateBtn.addEventListener('click', () => {
    generateHex();
});

//copy on click
cards.forEach(card => {
    card.addEventListener('click', () => {
        let hexToCopy = card.querySelector('.hex span').textContent;
        console.log(hexToCopy);
        // copy(hexToCopy)
        
    });
});