
const tags = {
    articleEl: document.querySelector(".start-window"),
    buttonDE: document.querySelector(".DE"),
    buttonUA: document.querySelector(".UA"),
    answerContainerEl: document.querySelector(".answer-container"),
    answerTitleEl: document.querySelector(".answer-container > h1"),
    answerTextEl: document.querySelector(".answer-container > p"),
    answerButtonEl: document.querySelector(".answer-container > button"),
    questionContainerEl: document.querySelector(".question-article"),
    questionTitleEl: document.querySelector(".question-article > h2"),
    questionButtonEl1: document.querySelector(".answer-button-1"),
    questionButtonEl2: document.querySelector(".answer-button-2"),
    questionButtonEl3: document.querySelector(".answer-button-3"),
    startButtonEl: document.querySelector(".start-test"),
    finalArticleEl: document.querySelector(".final-article"),
    finaltextEl: document.querySelector(".final-article > p")
}

const closeAnswerContainerDE = () => {
    tags.answerContainerEl.classList.toggle("isActive");
}

const closeAnswerContainerUA = () => {
    tags.answerContainerEl.classList.toggle("isActive");
    tags.articleEl.classList.remove("isActive")
    tags.questionContainerEl.classList.add("isActive")
}

const pickedDE = () => {
    tags.answerContainerEl.classList.toggle("isActive");
    tags.answerTitleEl.textContent = "Войтенко не задоволена вами!";
    tags.answerTextEl.textContent = "Ви розчарували голову СС 'Галичина'. Вас відправляють у заслання а також мінусують три бали від річної контрольної! Спробуй вибрати ще раз, і можливо вона вас пробачить.";

    tags.answerButtonEl.addEventListener("click", closeAnswerContainerDE);
}

const pickedUA = () => {
    tags.answerContainerEl.classList.toggle("isActive");
    tags.answerTitleEl.textContent = "Вітаю пупсику!";
    tags.answerTextEl.textContent = "Я зробив спеціально для тебе тест, котрий включає в себе 12 питань різної тематики та складності. Бажаю успіху, за списування я тебе підораса каструю!";

    tags.answerButtonEl.addEventListener("click", closeAnswerContainerUA);

}

tags.buttonDE.addEventListener("click", pickedDE);

tags.buttonUA.addEventListener("click", pickedUA);

const questions = [
    {
        question: "Ти готовий?",
        answer1: "Ні",
        answer2: "Так",
        answer3: "Хз"
    },
    {
        question: "Дата хрещення Київської Русі",
        answer1: "988рік",
        answer2: "997рік",
        answer3: "1001рік"
    },
    {
        question: "Який урон у Сту на п'ятій силі з одного удару?",
        answer1: "1200",
        answer2: "1073",
        answer3: "Хз лол"
    },
    {
        question: "Якщо Піонтковський буде їхати до Мелітополя зі швидкістю 7км/год, то через який час він приїде до нього",
        answer1: "12 годин",
        answer2: "2-3 тижні",
        answer3: "Ти їбонутий?"
    },
    {
        question: "Мой гара любимый",
        answer1: "Адольф Гитлер",
        answer2: "Башкортостан",
        answer3: "родина Кавказ"
    },
    {
        question: "Скільки у вас хромосом?",
        answer1: "46",
        answer2: "47",
        answer3: "Пішов нахуй"
    },
    {
        question: "Закон Ома для ділянки кола показує взаємозалежність яких величин?",
        answer1: "Сили струму, Напруги та Опору провідника",
        answer2: "Сили, Маси та Швидкості",
        answer3: "Сили Лоренца, Сили Ампера та Напруженості"
    },
    {
        question: "Чому Гітлер відібрав у Чехословаччини Судецьку область",
        answer1: "Через велику кількість проживаючих там етнічних німців",
        answer2: "Чехословакия....",
        answer3: "Я пупсик"
    },
    {
        question: "Скільки матчів виграв Мессі за свою кар'єру?",
        answer1: "65",
        answer2: "Більше ста",
        answer3: "Автор не знає"
    },
    {
        question: "'Derfibkifjcmdkjkfhdkdjssdoko4p5p', - колись сказав",
        answer1: "П'яний трудовик",
        answer2: "Уінстон Черчилль",
        answer3: "Термінатор Донбасу"
    },
    {
        question: "Який на твою думку варіант вірний?",
        answer1: "1",
        answer2: "2",
        answer3: "3"
    },
    {
        question: "Тобі сподобався цей тест????",
        answer1: "Ні",
        answer2: "Так",
        answer3: "Пішов нахуй"
    },
]

const correctAnswers = [
    "Так", 
    "988рік", 
    "Хз лол", 
    "12 годин", 
    "родина Кавказ", 
    "47", 
    "Сили струму, Напруги та Опору провідника", 
    "Через велику кількість проживаючих там етнічних німців", 
    "Автор не знає", 
    "Уінстон Черчилль", 
    "2", 
    "Так"
]


let totalMark = 0;
let i = 0;

const startTest = () => {
    const currentQuestion = questions[i];
    tags.questionTitleEl.textContent = currentQuestion.question;
    tags.questionButtonEl1.textContent = currentQuestion.answer1;
    tags.questionButtonEl2.textContent = currentQuestion.answer2;
    tags.questionButtonEl3.textContent = currentQuestion.answer3;

    tags.startButtonEl.classList.add("isNotActive")
}



tags.startButtonEl.addEventListener("click", startTest)

const checkAnswer = (answer) => {
    
    if (answer === correctAnswers[i]) {
        alert("Правильно!");
        totalMark += 1;
    } else {
        alert("Неправильно!");
    }
    
    i += 1;
    if (i === 12) {
        tags.finalArticleEl.classList.add("isActive");
        tags.questionContainerEl.classList.remove("isActive");
        if (0 <= totalMark && totalMark <= 4 ) {
            tags.finaltextEl.textContent = `Ти набрав ${totalMark} балів. Ти настільки блять тупий?`
        } else if ( totalMark >= 5 && totalMark <= 9 ) {
            tags.finaltextEl.textContent = `Ти набрав ${totalMark} балів. Все не настільки погано`
        } else if ( totalMark >= 10 && totalMark <= 12) {
            tags.finaltextEl.textContent = `Ти набрав ${totalMark} балів. Я в шоці`
        }
    }
    startTest();
}

tags.questionButtonEl1.addEventListener("click", () => {
    checkAnswer(tags.questionButtonEl1.textContent)
});

tags.questionButtonEl2.addEventListener("click", () => {
    checkAnswer(tags.questionButtonEl2.textContent)
});

tags.questionButtonEl3.addEventListener("click", () => {
    checkAnswer(tags.questionButtonEl3.textContent)
});