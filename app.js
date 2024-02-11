let index = 0;
let marks = 1;
let percent=0;
let answeres = []

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

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    let btn3 = document.createElement("button");
    let div4 = document.createElement("div")
    let btn4 = document.createElement("button")


    btn1.onclick = function () {
        answeres[index] = option1.id


        console.log(answeres)
        option1.classList.add("optioncolor")
        option2.classList.remove("optioncolor")
        option3.classList.remove("optioncolor")
        option4.classList.remove("optioncolor")


    }

    btn2.onclick = function () {
        option2.classList.add("optioncolor")
        option1.classList.remove("optioncolor")
        option3.classList.remove("optioncolor")
        option4.classList.remove("optioncolor")

        answeres[index] = option2.id
        console.log(answeres)

    }
    btn3.onclick = function () {
        answeres[index] = option3.id
        console.log(answeres)

        option2.classList.remove("optioncolor")
        option1.classList.remove("optioncolor")
        option3.classList.add("optioncolor")
        option4.classList.remove("optioncolor")
    }
    btn4.onclick = function () {

        option2.classList.remove("optioncolor")
        option1.classList.remove("optioncolor")
        option3.classList.remove("optioncolor")
        option4.classList.add("optioncolor")
        answeres[index] = option4.id
        console.log(answeres)


    }


    question.textContent = questions[index].Question;
    option1.textContent = questions[index].A;
    option2.textContent = questions[index].B;
    option3.textContent = questions[index].C;
    option4.textContent = questions[index].D;

    option1.id = "A";
    option2.id = "B";
    option3.id = "C";
    option4.id = "D";

    div1.appendChild(option1);
    div1.appendChild(btn1);

    div2.appendChild(option2);
    div2.appendChild(btn2);

    div3.appendChild(option3);
    div3.appendChild(btn3);

    div4.appendChild(option4)
    div4.appendChild(btn4)

    btn1.innerHTML = "a";
    div1.classList.add("row")
    btn2.innerHTML = "b";
    div2.classList.add("row")
    btn3.innerHTML = "c";
    div3.classList.add("row")
    btn4.innerHTML = "d"
    div4.classList.add("row")

    container.appendChild(question)
    container.appendChild(div1)
    container.appendChild(div2)
    container.appendChild(div3)
    container.appendChild(div4)

}


function NextQuestion() {
    if (index >= questions.length - 1) {
        window.location.href = "showresult.html?marks=" + marks;
        return;
    }

    else if (answeres[index] == undefined) {


        return;

    }
    if (answeres[index] == questions[index].Ans) {
        console.log(questions[index].Ans)
        marks++
        console.log(typeof marks)
    }




    index++
    container.innerHTML = "";
    getQuestion()

}

let minute = 0
let secondd = 0

let min = document.getElementById("min")
let second = document.getElementById("second")

function starttimer() {
    secondd++
   if(secondd.toString().length==1){
      second.innerHTML="0"+secondd;
   }else{
    second.innerHTML=secondd;
   }

  let progressdiv=document.getElementById("progress-spinner")
  percent=(secondd/60)*100;
  progressdiv.style.background=`conic-gradient(rgb(3, 133, 255) ${percent}% ,rgb(242, 242, 242) ${percent}%)`
  console.log(percent)
  


    if (secondd >= 60) {
        secondd = 0
        minute++
        if(minute.toString().length==1){
            min.innerHTML="0"+minute;

        }else{
            min.innerHTML=minute;
        }
        
        second.innerHTML = "00";
        clearInterval(timer);

    }
    
}

let timer = setInterval(starttimer, 1000);








