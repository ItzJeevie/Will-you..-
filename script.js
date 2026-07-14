let currentQuestion = 0;
let noClicks = 0;

const questions = [
    {
        question: "Cats 🐱 or Dogs 🐶?",
        options: ["Cats 🐱", "Dogs 🐶"]
    },
    {
        question: "Sweet 🍫 or Salty 🍟?",
        options: ["Sweet 🍫", "Salty 🍟"]
    },
    {
        question: "Beach 🏖️ or Mountains ⛰️?",
        options: ["Beach 🏖️", "Mountains ⛰️"]
    },
    {
        question: "Sunrise 🌅 or Sunset 🌇?",
        options: ["Sunrise 🌅", "Sunset 🌇"]
    }
];


const startBtn = document.getElementById("startBtn");


startBtn.onclick = function(){
    showQuestion();
};


function showQuestion(){

    document.querySelector(".container").innerHTML = `

        <h1>Let's Play a Game 🎮</h1>

        <p>
            ${questions[currentQuestion].question}
        </p>

        <button onclick="answer()">
            ${questions[currentQuestion].options[0]}
        </button>

        <button onclick="answer()">
            ${questions[currentQuestion].options[1]}
        </button>

    `;
}


function answer(){

    currentQuestion++;

    if(currentQuestion < questions.length){

        showQuestion();

    } else {

        showFinalQuestion();

    }

}


function showFinalQuestion(){

    document.querySelector(".container").innerHTML = `

        <h1>One Last Question... ❤️</h1>

        <p>Will you be my girlfriend? 💕</p>

        <button id="yesBtn" onclick="yesClicked()">
            YES ❤️
        </button>

        <button id="noBtn" onclick="noClicked()">
            NO 💔
        </button>

    `;

}


function noClicked(){

    noClicks++;

    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");


    noBtn.style.transform = `scale(${1 - noClicks * 0.15})`;

    yesBtn.style.transform = `scale(${1 + noClicks * 0.2})`;


    const messages = [
        "Are you sure? 🥺",
        "Really? 😭",
        "Think again...",
        "Please? ❤️",
        "Last chance..."
    ];


    if(noClicks <= messages.length){

        noBtn.innerHTML = messages[noClicks - 1];

    }


    if(noClicks >= 5){

        noBtn.style.display = "none";

        yesBtn.style.transform = "scale(5)";

    }

}


function yesClicked(){

    document.querySelector(".container").innerHTML = `

        <h1>Thank You ❤️</h1>

        <p>You just made me the happiest person ever 💕</p>

    `;

}