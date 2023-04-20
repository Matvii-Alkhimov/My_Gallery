
const tags = {
    articleEl: document.querySelector(".start-window"),
    buttonDE: document.querySelector(".DE"),
    buttonUA: document.querySelector(".UA"),
    buttonEN: document.querySelector(".EN"),
    buttonIT: document.querySelector(".IT"),
    answerContainerEl: document.querySelector(".answer-container"),
    answerTitleEl: document.querySelector(".answer-container > h1"),
    answerTextEl: document.querySelector(".answer-container > p"),
    answerButtonEl: document.querySelector(".answer-container > button"),
    questionContainerEl: document.querySelector(".question-article"),
    questionTitleEl: document.querySelector(".question-article > h2"),
    questionButtonEl1: document.querySelector(".answer-button-1"),
    questionButtonEl2: document.querySelector(".answer-button-2"),
    questionButtonEl3: document.querySelector(".answer-button-3"),
    questionNumberEl: document.querySelector(".question-number"),
    startButtonEl: document.querySelector(".start-test"),
    finalArticleEl: document.querySelector(".final-article"),
    finalTitleEl: document.querySelector(".final-article > h1"),
    finaltextEl: document.querySelector(".final-article > p"),
}

const closeAnswerContainerDE = () => {
    tags.answerContainerEl.classList.toggle("isActive");
}

const closeAnswerContainer = () => {
    tags.answerContainerEl.classList.toggle("isActive");
    tags.articleEl.classList.remove("isActive");
    tags.questionContainerEl.classList.toggle("isActive");
}

const pickedDE = () => {
    tags.answerContainerEl.classList.toggle("isActive");
    tags.answerTitleEl.textContent = "Войтенко не задоволена вами!";
    tags.answerTextEl.textContent = "Ви розчарували голову СС 'Галичина'. Вас відправляють у заслання а також мінусують три бали від річної контрольної! Спробуй вибрати ще раз, і можливо вона вас пробачить.";

    tags.answerButtonEl.addEventListener("click", closeAnswerContainerDE);
}

const pickedUA = () => {
    tags.answerContainerEl.classList.toggle("isActive");
    tags.answerContainerEl.classList.toggle("pickedUA")
    tags.answerTitleEl.textContent = "Вітаю пупсику!";
    tags.answerTextEl.textContent = "Я зробив спеціально для тебе тест, котрий включає в себе 12 питань різної тематики та складності. Бажаю успіху, за списування я тебе підораса каструю!";
    tags.answerButtonEl.addEventListener("click", closeAnswerContainer);


}

const pickedEN = () => {
    tags.answerContainerEl.classList.toggle("isActive");
    tags.answerContainerEl.classList.toggle("pickedEN");
    tags.answerTitleEl.textContent = "Hello";
    tags.answerTextEl.textContent = "I found the test for you, that includes 10 questions. At the end of the test you will see your mark. I think you understand. Good luck:)";
    tags.answerButtonEl.addEventListener("click", closeAnswerContainer);
    
}

const pickedIT = () => {
    tags.answerContainerEl.classList.toggle("isActive");
    tags.answerTitleEl.textContent = "Scuza, non parlo italiano!";
    tags.answerButtonEl.addEventListener("click", closeAnswerContainerDE);
}

tags.buttonDE.addEventListener("click", pickedDE);

tags.buttonUA.addEventListener("click", pickedUA);

tags.buttonEN.addEventListener("click", pickedEN);

tags.buttonIT.addEventListener("click", pickedIT);

const questionsUA = [
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

const questionsEN = [
    {
    question: "There is _ very good film on TV tonight. We can watch it together. Have you got _ free time?",
    answer1: "There is / any",
    answer2: "Are there / no",
    answer3: "Is there / a few",
    },
    {
    question: "Would you like _ ice cream with your dessert?",
    answer1: "a",
    answer2: "no",
    answer3: "some",
    },
    {
    question: "She has got _ friends _ in Canada.",
    answer1: "a little / anywhere",
    answer2: "some / nowhere",
    answer3: "no / everywhere",
    },
    {
    question: "_ children are bored at the party, but you can always find _ to entertain them.",
    answer1: "Any / rowbere",
    answer2: "some / something",
    answer3: "No / everyone",
    },
    {
    question: "There are _ students at the library at the moment. They are all _ else.",
    answer1: "any / everyone",
    answer2: "no / somewhere",
    answer3: "some / nothing",
    },
    {
    question: "There are _ apples in the fridge. I can make an apple pie. Yes, but we have got _ flour. Let's buy some.",
    answer1: "any / a little",
    answer2: "some / any",
    answer3: "no / any",
    },
    {
    question: "_ _ air conditioner in our summer house.",
    answer1: "are / some",
    answer2: "isn't / an",
    answer3: "is / any",
    },
    {
    question: "_ there _ mistakes in my essay?",
    answer1: "Are / any",
    answer2: "Is / a little",
    answer3: "Are / some",
    },
    {
    question: "He has got _ money, so he can buy that bicycle and go _ by bike.",
    answer1: "a few / somewhere",
    answer2: "no / anybody",
    answer3: "a little / everywhere",
    },
    {
    question: "There aren't _ pickles left in the jar, but I can serve _ else with that dish.",
    answer1: "no / everything",
    answer2: "some / nothing",
    answer3: "a little / anything",
    }
];

const correctAnswersUA = [
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

const correctAnswersEN = [
    "There is / any", 
    "no", 
    "some / nowhere", 
    "something", 
    "any / everyone", 
    "any / a little", 
    "isn't / an", 
    "Are / any", 
    "a little / everywhere", 
    "no / everything"
];

let totalMark = 0;
let i = 0;

const startTest = () => {
    tags.startButtonEl.classList.add("isNotActive")
    if (tags.answerContainerEl.classList.contains("pickedEN")) {
        const currentQuestion = questionsEN[i];
        tags.questionTitleEl.textContent = currentQuestion.question;
        tags.questionButtonEl1.textContent = currentQuestion.answer1;
        tags.questionButtonEl2.textContent = currentQuestion.answer2;
        tags.questionButtonEl3.textContent = currentQuestion.answer3;
        tags.questionNumberEl.textContent = `${i + 1}/10`;
        
    } else if (tags.answerContainerEl.classList.contains("pickedUA")) {
        const currentQuestion = questionsUA[i];
        tags.questionTitleEl.textContent = currentQuestion.question;
        tags.questionButtonEl1.textContent = currentQuestion.answer1;
        tags.questionButtonEl2.textContent = currentQuestion.answer2;
        tags.questionButtonEl3.textContent = currentQuestion.answer3;
        tags.questionNumberEl.textContent = `${i + 1}/12`;
    }

    


}

tags.startButtonEl.addEventListener("click", startTest)

const checkAnswer = (answer) => {
    
    if (tags.answerContainerEl.classList.contains("pickedEN")) {
          if (answer === correctAnswersEN[i]) {
            alert("Correct!");
            totalMark += 1;
        } else {
            alert("Not correct!");
        }       
    } else if (tags.answerContainerEl.classList.contains("pickedUA")) {
        if (answer === correctAnswersUA[i]) {
                alert("Правильно!");
                totalMark += 1;
            } else {
                alert("Неправильно!");
            }   
    }
    i += 1;

    if (tags.answerContainerEl.classList.contains("pickedEN")) {
        if (i === 10) {
            tags.finalArticleEl.classList.add("isActive");
            tags.finalTitleEl.textContent = "Congratulations!";
        tags.questionContainerEl.classList.remove("isActive");
        if (0 <= totalMark && totalMark <= 4 ) {
            tags.finaltextEl.textContent = `Your mark is ${totalMark}. Very sad:(`
        } else if ( totalMark >= 5 && totalMark <= 9 ) {
            tags.finaltextEl.textContent = `Your mark is ${totalMark}. Not bad!`
        } else if ( totalMark >= 10 && totalMark <= 12) {
            tags.finaltextEl.textContent = `Your mark is ${totalMark}. I am proud of you!`
        }
        }
    } else if (tags.answerContainerEl.classList.contains("pickedUA")) {
        if (i === 12) {
            tags.finalTitleEl.textContent = "Вітаю! Ти пройшов тест!";
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