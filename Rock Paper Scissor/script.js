let [computer_score, user_score] = [0,0];
let result_ref = document.getElementById("result");
let choices_object = {
    'rock' : {
        'rock': 'draw',
        'scissor': 'win',
        'paper': 'lose'
    },
    'paper' : {
        'paper': 'draw',
        'scissor': 'lose',
        'rock': 'win'
    },
    'scissor' : {
        'scissor': 'draw',
        'rock': 'lose',
        'paper': 'win'
    }
};

function checker(image){
    const choices = ["rock", "paper", "scissor"];
    let num = Math.floor(Math.random()*3);
    
    document.getElementById("computer_choice").innerHTML = 
    ` Computer choose <span> ${choices[num].toUpperCase()} </span>`;

    document.getElementById("user_choice").innerHTML = 
    ` You choose <span> ${image.toUpperCase()} </span>`;

    let computer_choice = choices[num];
    switch(choices_object[image][computer_choice]){
        case 'win':
            result_ref.style.cssText =
            "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "YOU WIN";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText =
            "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "YOU LOSE";
            computer_score++;
            break;
        default:
            result_ref.style.cssText =
            "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "DRAW";
            break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}