
console.log("hello");
let q1 = document.querySelector(".q1");
let q2 = document.querySelector(".q2");
let sub = document.querySelector(".sub");
let ori = document.querySelector(".ori");
let flav = document.querySelector(".flav");
let straw = document.querySelector(".straw");
let diet = document.querySelector(".diet");
let cream = document.querySelector(".cream");

ori.style.display = "none";
straw.style.display = "none";
diet.style.display = "none";
cream.style.display = "none";

let button = document.querySelector("button");

button.addEventListener("click", function() {
    let age = document.querySelector(".age")
    let food = document.querySelector(".food")

let i1 = document.querySelector(".age").value;
let i2 = document.querySelector(".food").value;



console.log(age);




    if (i1 <= 18 && i2 === "pizza" || i1 <= 18 && i2 === "Pizza"){
    q1.innerHTML = "Congrats you are original Dr.Pepper!!!";
    q2.style.display = "none";
    age.style.display = "none";      
    food.style.display = "none";
    sub.style.display = "none";
    flav.style.display = "none";
    ori.style.display = "block";
    }
    


    if (i1 <= 18 && i2 === "burgers" || i1 <= 18 && i2 === "Burgers" || i1 <= 18 && i2 === "burger" || i1 <= 18 && i2 === "Burger"){
        q1.innerHTML = "Congrats you are Dr.Pepper Strawberries & Cream!!!";
        q2.style.display = "none";
        age.style.display = "none";      
        food.style.display = "none";
        sub.style.display = "none";
        flav.style.display = "none";
        ori.style.display = "none";
        straw.style.display = "block";
        }



        if (i1 > 18 && i2 === "pizza" || i1 <= 18 && i2 === "Pizza"){
            q1.innerHTML = "Congrats you are Diet Dr.Pepper!!!";
            q2.style.display = "none";
            age.style.display = "none";      
            food.style.display = "none";
            sub.style.display = "none";
            flav.style.display = "none";
            ori.style.display = "none";
            straw.style.display = "none";
            diet.style.display = "block";
        }



        if (i1 > 18 && i2 === "burgers" || i1 <= 18 && i2 === "Burgers" || i1 <= 18 && i2 === "burger" || i1 <= 18 && i2 === "Burger"){
            q1.innerHTML = "Congrats you are Dr.Pepper Cream Soda!!!";
            q2.style.display = "none";
            age.style.display = "none";      
            food.style.display = "none";
            sub.style.display = "none";
            flav.style.display = "none";
            ori.style.display = "none";
            straw.style.display = "none";
            diet.style.display = "none";
            cream.style.display = "block";

        }
        });