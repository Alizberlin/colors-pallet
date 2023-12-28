let head_span = document.querySelectorAll('.head-span');
let span1 = document.querySelectorAll('.sib1');
let span2 = document.querySelectorAll('.sib2');
let span3 = document.querySelectorAll('.sib3');
let span4 = document.querySelectorAll('.sib4');

let colorsArr = [];
head_span.forEach(ele => colorsArr.push(hexCodeGenerator()));
head_span.forEach((ele, i) => ele.style.backgroundColor = colorsArr[i]);
span1.forEach((ele, i) => ele.style.backgroundColor = colorsArr[i] + 'CC');
span2.forEach((ele, i) => ele.style.backgroundColor = colorsArr[i] + '99');
span3.forEach((ele, i) => ele.style.backgroundColor = colorsArr[i] + '66');
span4.forEach((ele, i) => ele.style.backgroundColor = colorsArr[i] + '33');


let head_heading = document.querySelectorAll('.head-heading');
let heading1 = document.querySelectorAll('.heading1');
let heading2 = document.querySelectorAll('.heading2');
let heading3 = document.querySelectorAll('.heading3');
let heading4 = document.querySelectorAll('.heading4');

head_heading.forEach((ele, i) => ele.innerHTML = `${colorsArr[i]} <img src="img/icon.svg" alt="Copy Icon" class="text" data-bs-toggle="popover" data-bs-title="Copied" data-bs-content="Hex ${colorsArr[i]} is copied to Clipboard!"></img>`);
heading1.forEach((ele, i) => ele.innerHTML = `${colorsArr[i]}CC <img src="img/icon.svg" alt="Copy Icon" class="text" data-bs-toggle="popover" data-bs-title="Copied" data-bs-content="Hex ${colorsArr[i]}CC is copied to Clipboard!"></img>`);
heading2.forEach((ele, i) => ele.innerHTML = `${colorsArr[i]}99 <img src="img/icon.svg" alt="Copy Icon" class="text" data-bs-toggle="popover" data-bs-title="Copied" data-bs-content="Hex ${colorsArr[i]}99 is copied to Clipboard!"></img>`);
heading3.forEach((ele, i) => ele.innerHTML = `${colorsArr[i]}66 <img src="img/icon.svg" alt="Copy Icon" class="text" data-bs-toggle="popover" data-bs-title="Copied" data-bs-content="Hex ${colorsArr[i]}66 is copied to Clipboard!"></img>`);
heading4.forEach((ele, i) => ele.innerHTML = `${colorsArr[i]}33 <img src="img/icon.svg" alt="Copy Icon" class="text" data-bs-toggle="popover" data-bs-title="Copied" data-bs-content="Hex ${colorsArr[i]}33 is copied to Clipboard!"></img>`);

function hexCodeGenerator() {
let digits = '0123456789ABCDEF';
let hexCode = '#';
for(let i = 0; i<6; i++) {
let num = Math.floor(Math.random()* digits.length);
hexCode += digits[num]; 
}
return hexCode;
}



function refreshPage() {
    // Reload the current page
    location.reload();
}

const text = document.querySelectorAll(".text");
text.forEach(function(element) {
    element.addEventListener('click', function(event) {
        const clicked = event.target;
        const parent = clicked.parentElement;
        let textArea = document.createElement("textarea");
        textArea.value = parent.innerText;
        document.body.appendChild(textArea)
        textArea.select()

    document.execCommand("copy");

 document.body.removeChild(textArea)
    })
})


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))