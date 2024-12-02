//differeniate
//variables

var RandomNumberAnswer1 = 0
var RandomNumberAnswer2 = 0
var PostiveAnswer1 = 0
var PostiveAnswer2 = 0

var ShowAnswer1 = false
var ShowNextAnswer1 = false

//Differentiate


// Function for random number
function randomnumbergenerator(highestnumber){
    return Math.floor(Math.random()*1), PostiveAnswer2 = Math.floor(Math.random()*highestnumber)
}

// make RandomNumberAnswer postive or negtive depending on PostiveAnswer
function PostiveOrNegtive(number){ 
    return number = (number * 2) - 1
    }

// check if need to add + 
function needplus(number, anythingelse){
    if (number > 0){
        return " + " + number + anythingelse
    }else if (number == 0) {
        return ""         
    }else if (number < 0){
        return number + anythingelse
    }
    else {
        return "error with " + number 
    }
}

// make a Differentiate equation
function quadraticequestions(){
// RandomNumberAnswer will be a random number from 0 - 10
RandomNumberAnswer1 = randomnumbergenerator(10), RandomNumberAnswer2 = randomnumbergenerator(10)
// PostiveAnswer1 will be a random number from 0 - 1
PostiveAnswer1 = randomnumbergenerator(2), PostiveAnswer2 = randomnumbergenerator(2)
//apply the function of PostiveOrNegtive to PostiveNumber
PostiveAnswer1 = PostiveOrNegtive(PostiveAnswer1), PostiveAnswer2 = PostiveOrNegtive(PostiveAnswer2)
// apply PostiveNumber onto RandomNumberAnswer
RandomNumberAnswer1 = (RandomNumberAnswer1 * PostiveAnswer1)
RandomNumberAnswer2 = (RandomNumberAnswer2 * PostiveAnswer2)
//console log answer
//console.log("x = " + RandomNumberAnswer1 + " or " + RandomNumberAnswer2 )
//quadratic equation
var QuadraticEqustionAdd = RandomNumberAnswer1 + RandomNumberAnswer2
var QuadraticEquationMutiply = RandomNumberAnswer1 * RandomNumberAnswer2
//console log quadratic
//console.log("x² " + needplus(QuadraticEqustionAdd, "x") + needplus(QuadraticEquationMutiply, ""))
var DifferentiateAnswerx3 = 3
var DifferentiateAnswerx2 = QuadraticEqustionAdd * 3
var DifferentiateAnswer1 = QuadraticEquationMutiply * 3
// console log print * 3hz7
//console.log(needplus(DifferentiateAnswerx3,"x² ") + needplus(DifferentiateAnswerx2, "x ") + needplus(DifferentiateAnswer1, ""))
DifferentiateAnswerx3 = DifferentiateAnswerx3 / 3
DifferentiateAnswerx2 = DifferentiateAnswerx2 / 2
DifferentiateAnswer1 = DifferentiateAnswer1 / 1
// console log print Differentiate
//console.log("x³ " + needplus(DifferentiateAnswerx2, "x² ") + needplus(DifferentiateAnswer1, "x"))
//show the answer
if (ShowAnswer1 == true){
    // make the text of id="answer1" to the random number answer
    document.getElementById("answer1").innerHTML ="x = " + new String(needplus(RandomNumberAnswer1))+ " or " + new String(needplus(RandomNumberAnswer2))
} else{
    document.getElementById("answer1").innerHTML ="x =              "
}
// make the text of id="question1" to the random number answer 
document.getElementById("question1").innerHTML = "x³ " + needplus(DifferentiateAnswerx2, "x² ") + needplus(DifferentiateAnswer1, "x")
}

// hide/show the answer
function showhideanswer(){
    if (ShowAnswer1 != true){
        document.getElementById("answer1").innerHTML ="x = " + new String(RandomNumberAnswer1)+ " or " + new String(RandomNumberAnswer2)
        document.getElementById("show/hide answer1").innerHTML = "Hide answer"
        ShowAnswer1 = true
    } else{
          document.getElementById("answer1").innerHTML ="x =              "
          document.getElementById("show/hide answer1").innerHTML = "Show answer"
        ShowAnswer1 = false
    }
}

// hide/show the answer
function showhidenextanswer(){
    if (ShowAnswer1 != true){
        document.getElementById("answer1").innerHTML ="x = " + new String(RandomNumberAnswer1)+ " or " + new String(RandomNumberAnswer2)
        document.getElementById("show/hide NextAnswer1").innerHTML = "Hide next answer"
        ShowNextAnswer1 = true
    } else{
          document.getElementById("answer1").innerHTML ="x =              "
          document.getElementById("show/hide NextAnswer1").innerHTML = "Show next answer"
        ShowNextAnswer1 = false
    }
}

//events 

// preload a QuadraticEquation
quadraticequestions()

// when button is clicked on Generate1
document.getElementById("generate").addEventListener("click",function(){ 
    quadraticequestions()
    ShowAnswer1 = true
    showhideanswer()
    });

//when button is click on show/hide answer1
document.getElementById("show/hide answer1").addEventListener("click", function(){
    showhideanswer()
    })

//when button is click on show/hide NextAnswer1
document.getElementById("show/hide NextAnswer1").addEventListener("click", function(){
    showhidenextansweranswer()
    })