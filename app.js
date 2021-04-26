const box = document.getElementById("box");
const topLeft = document.getElementById("topLeft");
const topRight = document.getElementById("topRight");
const bottomRight = document.getElementById("bottomRight");
const bottomLeft = document.getElementById("bottomLeft");
const initialValue = 0
const cssProperty = document.getElementById('cssProperty');
let cssInstructions = [];

topLeft.value = initialValue;
topRight.value = initialValue;
bottomRight.value = initialValue;
bottomLeft.value = initialValue;


const changeBorderRadius = position => {

    if(position === 'topLeft'){
        box.style.borderTopLeftRadius = topLeft.value + 'px';
        updateClipBoard('border-top-left-radius', topLeft.value);
    } 
    else if(position === 'topRight'){
        box.style.borderTopRightRadius = topRight.value + 'px';
        updateClipBoard('border-top-right-radius', topRight.value);
    }
    else if(position === 'bottomRight'){
        box.style.borderBottomRightRadius = bottomRight.value + 'px';
    }
    else if(position === 'bottomLeft'){
        box.style.borderBottomLeftRadius = bottomLeft.value + 'px';
    }
}

const updateClipBoard = (attribute, value) => {
    cssInstructions.push(`${attribute}:${value};`)
    cssInstructions.forEach(e => {
        cssProperty
    });
}

topLeft.addEventListener('change', changeBorderRadius.bind(null, 'topLeft'));
topRight.addEventListener('change', changeBorderRadius.bind(null, 'topRight'));
bottomRight.addEventListener('change', changeBorderRadius.bind(null, 'bottomRight'));
bottomLeft.addEventListener('change', changeBorderRadius.bind(null, 'bottomLeft'));