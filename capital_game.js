var countryName = document.getElementById("pr2__question")
var submit = document.getElementById("pr2__submit")
var answer = document.getElementById("pr2__answer")
var randomIndex = ""

// set countryName innerHTML to random country
function showNewQuestion() {
  randomIndex = Math.floor(Math.random() * pairs.length)
  countryName.innerHTML = pairs[randomIndex].country
  // focus on input at each new question and clear input
  answer.focus()
  answer.value = ""
  
}

answer.addEventListener ("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    submit.click()
  }
});

var autocompleteArray = [];

for (var i = 0; i < pairs.length; i++) {
  // console.log(pairs[i]);
  var capitalName = pairs[i].capital
  autocompleteArray.push(capitalName)
}

$( "#pr2__answer" ).autocomplete({
  source: autocompleteArray,
  minLength: 2,
});

function handleSubmit(){
  if (answer.value == "") {
    answer.focus()
    return
  }

  var noEntry = document.getElementById("noEntry");
  if (noEntry) {
    noEntry.remove()
  }
  // $(".templateInput").clone().removeClass("templateInput").appendTo("#center")

  var table = document.getElementById("center");
  var row = table.insertRow(-1);
  var countryCell = row.insertCell(0);
  var answerCell = row.insertCell(1);
  var checkCell = row.insertCell(2);
  countryCell.innerHTML = pairs[randomIndex].country
  answerCell.innerHTML = answer.value;


  if (answer.value == pairs[randomIndex].capital) {
    checkCell.innerHTML = '<i class="fas fa-check"></i>';  
    row.classList.add('correctInput');
  }
  else {
    answerCell.innerHTML = "<strike>" + answer.value + "</strike>"
    checkCell.innerHTML = pairs[randomIndex].capital;
    row.classList.add('wrongInput');
  }



  //at the end, show new question
  showNewQuestion();
}

submit.addEventListener("click", handleSubmit);



// call the functions (on first load)
showNewQuestion()
