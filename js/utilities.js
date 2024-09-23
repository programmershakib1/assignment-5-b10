function inputValue(id){
    const inputValue = document.getElementById(id).value;
    const newValue = parseFloat(inputValue);
    return newValue;
}

function inputNumber(id){
    const inputNumber  = document.getElementById(id).innerText;
    const newNumber = parseFloat(inputNumber);
    return newNumber;
}

function element(id){
    const element = document.getElementById(id);
    return element;
}