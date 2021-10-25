let images = [
  "img/dice-one.png",
  "img/dice-two.png",
  "img/dice-three.png",
  "img/dice-four.png",
  "img/dice-five.png",
  "img/dice-six.png",
];

let dice = document.querySelectorAll("img");

function roll() {
    dice.forEach(function(animationDice){
        animationDice.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(animationDice){
            animationDice.classList.remove("shake");
        });
        let diceOneValue = Math.floor(Math.random()*6);
        let diceTwoValue = Math.floor(Math.random()*6);
        console.log(diceOneValue, diceTwoValue);
        document.querySelector("#oneValue").setAttribute("src", images[diceOneValue]);
        document.querySelector("#twoValue").setAttribute("src", images[diceTwoValue]);
        document.querySelector("#total").innerHTML = "Your roll is " + ((diceOneValue +1) + (diceTwoValue + 1));
    },
    1000
    );
};

roll();