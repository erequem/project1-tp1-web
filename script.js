
function generateNumber(state){
  let randomValue;
  if (state==="Easy"){
    randomValue=Math.floor(Math.random()*10);
  }
  else if (state==="Medium"){
    randomValue=Math.floor(Math.random()*30);
  }
  else if (state==="Hard"){
    randomValue=Math.floor(Math.random()*50);
  }
  return randomValue;
}
function editIntervalLabel(state){
  let selectLabel = document.getElementById("range");
  if (state==="Easy"){
    selectLabel.textContent="Interval: 0 - 10";
    return 4;
  }
  else if (state==="Medium"){
    selectLabel.textContent="Interval: 0 - 30";
    return 7;
  }
  else if (state==="Hard"){
    selectLabel.textContent="Interval: 0 - 50";
    return 10;
  }
}

function logic(maxTries){
    let inputValue=parseInt(prompt("Guess the number"));
    let tries = 1;
  while((inputValue!==numberGuess) && (tries < maxTries)){
      if (inputValue<numberGuess)
        alert("Your input is smaller than the target");
      else{
        alert("Your input is bigger than the target");
      }
    tries += 1;
    inputValue=parseInt(prompt("Guess the number"+ " you have "+ (maxTries - tries+1) +" left"));
  }
  if (inputValue===numberGuess){
    alert("You won!");
  }
  else alert("You lost!");
}

const selectDifficulty= document.getElementById("difficulty");
const selectBtn = document.getElementById("btn");
let state="Easy";
let numberGuess=5;
let maxTries = 4;

selectDifficulty.addEventListener("change",() =>{
      const selectedIndex = selectDifficulty.selectedIndex;
      state = selectDifficulty.options[selectedIndex].value;
      numberGuess=generateNumber(state);
      maxTries = editIntervalLabel(state);
    }
)
selectBtn.addEventListener("click",()=>{
  numberGuess=generateNumber(state);
  alert("A new X has been generated.");
  logic(maxTries);
})





