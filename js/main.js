let simonTimer = setTimeout( nascondi, 30000);
let numberLi = document.getElementById("numberList");
let numberExtracted = [];
function printNumber (){

    for(let i=1; i <= 5; i++){
        let casualNumbers = Math.floor(Math.random() * 98 + 1);
        numberLi.innerHTML += ` <li>${casualNumbers}</li> `
        numberExtracted.push(casualNumbers);
    }
}

console.log(numberExtracted);

printNumber()

function nascondi(){
    numberLi.classList.add("hide");
};


