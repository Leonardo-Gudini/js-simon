let simonTimer = setTimeout( nascondi, 4000);
let numberLi = document.getElementById("numberList");
let numberExtracted = [];
let userNumbersChoice = [];


function nascondi(){
    numberLi.classList.add("hide");
};

function printNumber (){

    for(let i=1; i <= 5; i++){
        let casualNumbers = Math.floor(Math.random() * 98 + 1);
        numberLi.innerHTML += ` <li>${casualNumbers}</li> `
        numberExtracted.push(casualNumbers);
    }
}

console.log(numberExtracted);

printNumber()

let userNumbers = setTimeout( askNumber, 5000)


function askNumber () {
    for(let i=1; i <= 5; i++){

        let user = parseInt(prompt("inserisci un numero"));
        userNumbersChoice.push(user);
    }
    console.log(userNumbersChoice);
}

