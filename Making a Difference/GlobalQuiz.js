let prompt = require('prompt-sync')()
const questions = [
    {
        question: "Which gas is the primary contributor to global warming?",
        answers: [
            "Oxygen",
            "Carbon dioxide",
            "Nitrogen",
            "Methane",
        ],
        correctAnswer: 2,
    },
    {
        question: "Which of the following is a major cause of deforestation?",
        answers: [
            "Burning fossil fuels",
            "Fishing",
            "Mining",
            "Clearing land for agriculture",
        ],
        correctAnswer: 3,
    },
    {
        question: "Which country is the largest emitter of greenhouse gases?",
        answers: [
            "China",
            "India",
            "United States",
            "Russia",
        ],
        correctAnswer: 0,
    },
    {
        question: "What is the main source of sea level rise?",
        answers: [
            "Melting of sea ice",
            "Expansion of ocean water",
            "Melting of glaciers and ice caps",
            "Changes in ocean currents",
        ],
        correctAnswer: 2,
    },
    {
        question: "What is the main consequence of global warming?",
        answers: [
            "Increased biodiversity",
            "Increased crop yields",
            "Rising sea levels",
            "Decreased frequency of extreme weather events",
        ],
        correctAnswer: 2,
    },
];

function administerQuiz() {
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        const question = questions[i].question;
        const answers = questions[i].answers;
        const correctAnswer = questions[i].correctAnswer;

        console.log(question);
        for (let j = 0; j < answers.length; j++) {
            console.log(`${j + 1}. ${answers[j]}`);
        }

        const userAnswer = prompt("Enter your answer (1-4):");
        const index = parseInt(userAnswer) - 1;

        if (index === correctAnswer) {
            console.log("Correct!");
            score++;
        } else {
            console.log(`Incorrect. The correct answer is ${correctAnswer + 1}.`);
        }
    }

    console.log(`You got ${score} out of ${questions.length} correct.`);
    if (score === 5) {
        console.log("Excellent!");
    } else if (score === 4) {
        console.log("Very good!");
    } else {
        console.log("Time to brush up on your knowledge of global warming.");
        console.log("Here are some resources for more information:");
        console.log("- https://climate.nasa.gov/");
        console.log("- https://www.epa.gov/climate-change");
        console.log("- https://www.nrdc.org/issues/climate-change");
    }
}
administerQuiz();
