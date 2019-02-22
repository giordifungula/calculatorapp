// Store Numbers into Variables
let one = document.getElementById('one');
let output = document.getElementById('output');
let numberblocks = document.querySelectorAll('.item-block');

numberblocks.forEach(function(e){
    // if(e){
        alert(e,'That is a number');
    // }
})
console.log(numberblocks);
one.addEventListener('click', function(){
    output.textContent = one.textContent;
});