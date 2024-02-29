
console.log("hello");


let button = document.querySelector("button");

button.addEventListener("click", function() {
    let age = document.querySelector(".age").value;
    let food = document.querySelector(".food").value;


console.log(age);




    if (age <= 18 && food === "pizza"){
        document.querySelector("p").innerHTML="You are original Dr.Pepper";
    }







    });
