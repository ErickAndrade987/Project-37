class Question{
    constructor(){
        this.title = createElement("h1")
        this.question = createElement("h3")
        this.option1 = createElement("h4")
        this.option2 = createElement("h5")
    }
    
    display(){
        var title = createElement('h2')
        title.html("MyQuiz Game"); 
        title.position(600, 0); 
        
        this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter?");
        this.question.position(600,80);
        this.option1.html("1: Everyone");
        this.option1.position(600,100);
        this.option2.html("2: Envelope");
        this.option2.position(600,120);

        this.input1.position(600,230);

    
    }
    
    
    
    }