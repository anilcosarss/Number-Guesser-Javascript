const createButton = document.querySelector(".create-btn");
const randomNumber = document.querySelector(".random-number");
const minValue = document.querySelector(".set-down-number");
const maxValue = document.querySelector(".set-up-number");
const setNumbers = document.querySelector("#set-number");
const guess = document.querySelector("#guess");
const updateBtn = document.querySelector("#uptate-number");
const guessBtn = document.querySelector("#guess-btn");
const guessScreen= document.querySelector(".guess-screen");
var lastNumber;
totalChance = 5;



setNumbers.addEventListener('click', getValues);

function getValues(e) {

  if (minValue.value === '' || maxValue.value === '') {
    alert('Enter numbers to play')
  } else {
    const minNumberArea = document.querySelector(".down-number");
    const maxNumberArea = document.querySelector(".up-number");

    minNumberArea.textContent = (minValue.value);
    maxNumberArea.textContent = (maxValue.value);

    document.querySelector("#guessP").classList = 'd-block';

    let createdRandom = Math.floor(Math.random() * (maxValue.value - minValue.value));



    lastNumber = createdRandom + Number(minValue.value);




    minValue.value = '';
    maxValue.value = '';



    const feedbackSection = document.querySelector("#feedback");
    feedbackSection.textContent = 'Your number succesfully determined!!';



    console.log(lastNumber);
    document.querySelector("form").style.display = 'none';
    updateBtn.style.display = 'block';

    

    e.preventDefault();

    document.querySelector(".guess-screen").style.display='block'

    totalChance = 5;

  }

}
console.log(totalChance);

/// Update number 


updateBtn.addEventListener('click', updateAll)
function updateAll() {

  document.querySelector("form").style.display = 'block';
  const feedbackSection = document.querySelector("#feedback");
  feedbackSection.textContent = '';
  document.querySelector("#guessP").classList = 'd-none';
  updateBtn.style.display = 'none';


  lastNumber = '';

  console.log(lastNumber);
  guessScreen.style.display='block';
  document.querySelector(".feedback-screen").innerHTML='';
  totalChance = 5;
  document.querySelector(".guess-screen").style.display='none'

}

// Guess Button 

guessBtn.addEventListener('click', guessNumber);



function guessNumber() {
  let ourGuess = +guess.value;



  if (lastNumber === ourGuess) {
    

    const feedbackDivWon = document.createElement('h3');


    const divText = document.createTextNode("You Won!");
    feedbackDivWon.appendChild(divText);
    feedbackDivWon.style.padding = '10px 0px'

    document.querySelector(".feedback-screen").appendChild(feedbackDivWon);

    document.querySelector(".feedback-screen").style.backgroundColor = 'green';
    
    guessScreen.style.display='none';
    guess.value = '';

    totalChance = 5;

  }
  else if (lastNumber !== ourGuess) {


    totalChance === 5;
    totalChance -= 1;
    guess.value = '';


    if (totalChance === 0) {
      const feedbackDivLost = document.createElement('h3');

      const divTextLost = document.createTextNode(`You lost the correct number was ${lastNumber}`);
      feedbackDivLost.appendChild(divTextLost);
      feedbackDivLost.style.padding = '10px 0px'

      document.querySelector(".feedback-screen").appendChild(feedbackDivLost);
      document.querySelector(".feedback-screen").style.backgroundColor = 'red';


      guessScreen.style.display='none';
      totalChance = 5;

    }

  }
  document.querySelector(".remain-chance").textContent=`Chance = ${totalChance}`

  
}




