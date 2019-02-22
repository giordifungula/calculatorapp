
function element(e){
    // returns back element or ID
    return document.getElementById(e);
}
function display(value){
    // Collections whatever element's value 
    element('output').value += value;
    // This will statically input the operands also
}

function refresh(value){
    element('output').value = '';
    // When AC is clicked remove value
}

function equal(){
    let storedValue = element('output').value;
    if(storedValue === '' || storedValue === undefined){
        // Validate if user did not add numbers
        alert("Please Enter a Number first");
    } else {
        element('output').value = eval(element('output').value);
    }
    // Calculates what ever was clicked 
//    elementValue = eval(elementValue.value);
    // clearCalculator();
}

function clearCalculator(){
    // element('output').value = '';
}