let index = 0;
const container = document.getElementById("container")
const showindex = document.getElementById("show_index")
const showquestion = document.getElementById("show_question")


showquestion.innerHTML = questions.length;
getQuestion()

function getQuestion() {
    const question = document.createElement("h3")
    const option1 = document.createElement("h4")
    const option2 = document.createElement("h4")
    const option3 = document.createElement("h4")
    const option4 = document.createElement("h4")
    showindex.innerHTML = index + 1;

    let div1=document.createElement("div");
    let btn=document.createElement("button");
     
    





    question.textContent = questions[index].Question;
    option1.textContent = questions[index].A;
    option2.textContent = questions[index].B;
    option3.textContent = questions[index].C;
    option4.textContent = questions[index].D;
   div1.appendChild(option1);
   div1.appendChild(btn);
   btn.textContent="a";
   div1.classList.add("row")

    container.appendChild(question)
    container.appendChild(div1)
    container.appendChild(option2)
    container.appendChild(option3)
    container.appendChild(option4)

}

function NextQuestion() {
    if (index >= questions.length - 1) {
        return;
    }
    index++
    container.innerHTML = "";
    getQuestion()

}




