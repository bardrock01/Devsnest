var options = document.getElementsByClassName('opt')
var i, j;
var c = document.getElementsByClassName('but')
const answerArr = [
    "", 1, 1, 3, 3
];
const questArr = ['', '', 'In which country do i live in?', 'What is my age?', 'what is my favourite skin in valorant?']
const optionBox = [
    [],
    [],
    ['India', 'pakistan', 'africa', 'argentina'],
    [1, 2, 18, 20],
    ['Elderflame', 'Glitchpop', 'Reaver', 'Ion']
]
var currentQuestion = 1;

function truthDetector(changevalue) {
    if (changevalue.value == answerArr[currentQuestion]) {
        console.log('Right');
    } else {
        console.log('Wrong');
    }
}
for (i = 0; i <= options.length - 1; i++) {
    console.log(i);
    options[i].addEventListener('click', (e) => {

        for (j = 0; j < c.length; j++) {
            if (e.target == c[j]) {
                e.target.value = j + 1;
            }
            console.log(e.target);
            truthDetector(e.target);
        }
    })
}
document.getElementsByClassName('nextQuestion')[0].addEventListener('click', (e) => {
    console.log(e.target);
    currentQuestion++;
    var questionName = document.querySelector('.QuestionScreen');
    questionName.value = questArr[currentQuestion];
    for (let i = 0; i < 4; i++) {
        c[i].innerHTML = optionBox[currentQuestion][i];
    }

})