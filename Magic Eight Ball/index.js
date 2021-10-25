function generate_random(max_number) {
  return Math.round(Math.random() * max_number);
};

let button = document.querySelector("button");
let answer = document.querySelector("#answer");
let ball = document.querySelectorAll(".eightBall");

function eightBall() {
  let randomNumber = generate_random(3);
  let answerText = "";

  if ( randomNumber === 0 ) {
    answerText = "Yes, for sure!";
  } else if ( randomNumber === 1 ) {
    answerText = "No, certainly not!";
  } else if ( randomNumber === 2 ) {
    answerText = "Ask again later!";
  } else {
    answerText = "I really don't care!";
  };

  answer.innerHTML = answerText;

  ball.forEach(function(animationBall){
      animationBall.classList.add("shake");
  });
  setTimeout(function(){
      ball.forEach(function(animationBall){
          animationBall.classList.remove("shake");
      });
  },
  1000
  );

};

eightBall();
