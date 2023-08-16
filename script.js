let factArr = [
  "Approximately 20-25% of homeless individuals in the United States are living with severe mental illness",

  "Homeless individuals often experience higher rates of trauma, which can contribute to mental health issues.      It is estimated that up to 70% of homeless women have experienced physical or sexual abuse",

  "Some cities have laws that criminalize homelessness, leading to a cycle where homeless individuals may face      arrest and incarceration instead of receiving the mental health support they need"

];


//Get main div
let factsContainer = document.getElementById("homelessFacts")
let linksContainer = document.getElementById('homelessnessLinks')
// Get facts button
let generateFactBtn = document.getElementById("factBtn");

generateFactBtn.addEventListener("click", btnPressed);


// Counter to keep track of the facts added
let counter = 0;

//BtnPressed Function
function btnPressed() {
  event.preventDefault();


  // Once we've run out of facts
  if (counter > 2) {
    linksContainer.style.visibility = "visible"
  } else {

    let currentFact = factArr[counter]

    let newText = document.createElement("h3") // Our new text element
    let br = document.createElement("br")
    newText.innerHTML = currentFact
    factsContainer.appendChild(newText);
    factsContainer.appendChild(br)
    factsContainer.appendChild(br)
  }


  counter++
}
