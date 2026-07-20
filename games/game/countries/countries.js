const countries = [
{
    name: "Argentina",
    flag: "https://flagcdn.com/w320/ar.png"
},
{
    name: "Bolivia",
    flag: "https://flagcdn.com/w320/bo.png"
},
{
    name: "Brazil",
    flag: "https://flagcdn.com/w320/br.png"
},
{
    name: "Chile",
    flag: "https://flagcdn.com/w320/cl.png"
},
{
    name: "Colombia",
    flag: "https://flagcdn.com/w320/co.png"
},
{
    name: "Ecuador",
    flag: "https://flagcdn.com/w320/ec.png"
},
{
    name: "Guyana",
    flag: "https://flagcdn.com/w320/gy.png"
},
{
    name: "Paraguay",
    flag: "https://flagcdn.com/w320/py.png"
},
{
    name: "Peru",
    flag: "https://flagcdn.com/w320/pe.png"
},
{
    name: "Suriname",
    flag: "https://flagcdn.com/w320/sr.png"
},
{
    name: "Uruguay",
    flag: "https://flagcdn.com/w320/uy.png"
},
{
    name: "Venezuela",
    flag: "https://flagcdn.com/w320/ve.png"
},
{
    name: "Canada",
    flag: "https://flagcdn.com/w320/ca.png"
},
{
    name: "USA",
    flag: "https://flagpedia.net/data/flags/w580/lr.webp"
},
{
    name: "Mexico",
    flag: "https://flagpedia.net/data/flags/w580/mx.webp"
}
];

const flag = document.getElementById("flag");
const options = document.getElementById("options");
const message = document.getElementById("message");
const scoreText = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

let score = 0;
let currentCountry;

// Lista de países mezclada y posición actual
let remainingCountries = [];
let currentIndex = 0;

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Mezcla los países una sola vez
remainingCountries = [...countries];
shuffle(remainingCountries);

function loadQuestion() {

    message.textContent = "";
    options.innerHTML = "";

    // Si ya se mostraron todos los países
    if (currentIndex >= remainingCountries.length) {
        flag.style.display = "none";
        message.textContent = `🎉 Game Over! Score: ${score}/${countries.length}`;

        nextBtn.style.display = "none";
        restartBtn.style.display = "block";

        return;
    }

    currentCountry = remainingCountries[currentIndex];
    currentIndex++;

    flag.src = currentCountry.flag;

    let answers = [currentCountry.name];

    while (answers.length < 4) {

        let randomCountry = countries[Math.floor(Math.random() * countries.length)].name;

        if (!answers.includes(randomCountry)) {
            answers.push(randomCountry);
        }

    }

    shuffle(answers);

    answers.forEach(answer => {

        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(btn, answer);
        options.appendChild(btn);

    });

}
restartBtn.addEventListener("click", restartGame);

function restartGame(){

    score = 0;
    currentIndex = 0;

    scoreText.textContent = score;

    remainingCountries = [...countries];
    shuffle(remainingCountries);

    flag.style.display = "block";

    message.textContent = "";

    nextBtn.style.display = "block";
    restartBtn.style.display = "none";

    loadQuestion();

}

function checkAnswer(button, answer) {

    const buttons = document.querySelectorAll(".options button");

    buttons.forEach(btn => btn.disabled = true);

    if (answer === currentCountry.name) {

        button.classList.add("correct");
        message.textContent = "✅ ¡Correcto!";
        message.style.color = "green";
        score++;

    } else {

        button.classList.add("wrong");
        message.textContent = "❌ Incorrecto";
        message.style.color = "red";

        buttons.forEach(btn => {
            if (btn.textContent === currentCountry.name) {
                btn.classList.add("correct");
            }
        });

    }

    scoreText.textContent = score;

}

nextBtn.addEventListener("click", loadQuestion);

// Primera pregunta
loadQuestion();