const questions = [
    {
        question: "Qual é o maior animal do mundo?",
        answer: [
            { id: 1, text: "Tubarão", correct: false },
            { id: 2, text: "Baleia Azul", correct: true },
            { id: 3, text: "Elefante", correct: false },
            { id: 4, text: "Girafa", correct: false },
        ]
    }
    ,
    {
        question: "Qual é o maior deserto do mundo?",
        answer: [
            { id: 1, text: "Kalahari", correct: false },
            { id: 2, text: "Gobi", correct: false },
            { id: 3, text: "Saara", correct: true },
            { id: 4, text: "Antartica", correct: false },
        ]
    }
    ,
    {
        question: "Qual é o menor continente do mundo?",
        answer: [
            { id: 1, text: "Asia", correct: false },
            { id: 2, text: "Austrália", correct: true },
            { id: 3, text: "Ártico", correct: false },
            { id: 4, text: "África", correct: false },
        ]
    }
    ,
    {
        question: "Qual é o menor país do mundo?",
        answer: [
            { id: 1, text: "Vaticano", correct: true },
            { id: 2, text: "Butão", correct: false },
            { id: 3, text: "Nepal", correct: false },
            { id: 4, text: "Shri Lanka", correct: false },
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[let currentQuestionIndex ];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
}
