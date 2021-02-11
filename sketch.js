var quizState = 0;
var contestantCount;
var question, contestant, quiz;
var allContestants;

function setup(){
    database = firebase.database()
    createCanvas(1000,1000);
    quiz = new Quiz()
    quiz.getState()
    quiz.start() 

}

function draw(){
    if(contestantCount===4){
    quiz.update(1)
    }
    if(quizState===1){
    clear()
    quiz.play()
    }
}
