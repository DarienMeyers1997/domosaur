let spanMess = document.querySelector(".mess-with-me");
spanMess.style.fontSize = "40px";

let paraMess = document.querySelector("p.mess-with-me");
paraMess.style.background = "green"

let hideMe = document.querySelector("#hide-me");
hideMe.style.display = "none";

let firstDino = document.querySelector("#triceratops");
firstDino.style.width = "324px";

let feathers = document.querySelector("#feathers")

let row = document.querySelector("#row")
let switchColorButton = document.querySelector("#toggle")

//EVENT LISTENERS

spanMess.addEventListener("click", function(){
    spanMess.style.color = "orange";
});

firstDino.addEventListener("click", function(){
    firstDino.style.border = "3px solid red"
})

feathers.addEventListener("click", function(){
    feathers.style.opacity = "50%"
})

row.style.background = "white"
switchColorButton.addEventListener("click", function(){
    if(row.style.background === "white"){
        row.style.background = "purple"
    }else {
        row.style.background = "white"
    }
})

