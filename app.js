const box = document.getElementById("box");
const topLeft = document.getElementById("topLeft");
const topRight = document.getElementById("topRight");
const bottomRight = document.getElementById("bottomRight");
const bottomLeft = document.getElementById("bottomLeft");
const copyBtn = document.getElementById("copyBtn")
const initialValue = 0;
const cssProperty = document.getElementById('cssProperty');
let cssInstructions = [];

topLeft.value = initialValue;
topRight.value = initialValue;
bottomRight.value = initialValue;
bottomLeft.value = initialValue;


const changeBorderRadius = position => {

    resetClipboard();

    if(position === 'topLeft'){
        box.style.borderTopLeftRadius = topLeft.value + 'px';
    } 
    else if(position === 'topRight'){
        box.style.borderTopRightRadius = topRight.value + 'px';
    }
    else if(position === 'bottomRight'){
        box.style.borderBottomRightRadius = bottomRight.value + 'px';
    }
    else if(position === 'bottomLeft'){
        box.style.borderBottomLeftRadius = bottomLeft.value + 'px';
    }

    updateClipBoard();

    
}

const updateClipBoard = () => {

    cssInstructions.push(`border-top-left-radius: ${topLeft.value}px;`, `border-top-right-radius: ${topRight.value}px;`, `border-bottom-right-radius: ${bottomRight.value}px;`, `border-bottom-left-radius: ${bottomLeft.value}px;`);

    cssInstructions.forEach(element => {
        cssProperty.value += element;    
    });
    console.log(cssInstructions);

}

const resetClipboard = () => {
    cssProperty.value = '';
    cssInstructions = [];
}

const copyToClipboard = () => {
    cssProperty.select();
    cssProperty.setSelectionRange(0,9999);
    document.execCommand("copy");
    alert('CSS copied to clipboard')
}

topLeft.addEventListener('change', changeBorderRadius.bind(null, 'topLeft'));
topRight.addEventListener('change', changeBorderRadius.bind(null, 'topRight'));
bottomRight.addEventListener('change', changeBorderRadius.bind(null, 'bottomRight'));
bottomLeft.addEventListener('change', changeBorderRadius.bind(null, 'bottomLeft'));
copyBtn.addEventListener('click', copyToClipboard);