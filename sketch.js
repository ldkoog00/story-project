var eatRabbit = false;
var death = false;

function setup() {

  // Change these to change the title and author of the story
  document.getElementById('title').innerHTML="Goldilocks & the Three Bears"; // title

  document.getElementById('author').innerHTML="Jon Stapleton"; // author


  
  // All of your code goes under here
  

  var story = 'The Big Bad Wolf is very hungry.' + food() + breath() + pig(); // Create the text

  printToPage(story); // Print the text to the webpage
}



// Put your functions below here:

function food() {
  let rabbit = Math.floor(random(1, 6)); // Random number rounded down
  if(rabbit > 3) {
    eatRabbit = true;
  }
  if(eatRabbit == true) {
    return "So the wolf decided to eat a rabbit";
  } else {
    
    return "As he was deciding on what he wanted to eat, he noticed an easy to blow down straw house with a nice juicy pig inside";
  }
  
}



function breath() {
  if(eatRabbit == false){
    let breath = random(1, 6);
    if(breath > 5) {
      death = true;
      return "The wolf walks up to the straw house, and he huffs, and puffs, and runs out of breath and dies."
    } else {
      return "The wolf walks up to the straw house, and he huffs, and puffs, and blows the house down."
    }
  }
  
}

function pig() {
  if(eatRabbit == false && death == false){
    let death = random(1, 6);
    if(death > 5) {
      return "The wolf walks up to the straw house, and he huffs, and puffs, and runs out of breath and dies."
    } else {
      return "The wolf walks up to the straw house, and he huffs, and puffs, and blows the house down."
    }
  }
  
}



//Don't delete this!
function printToPage(story) {
  var para = document.createElement("P");
  var t = document.createTextNode(story);
  para.appendChild(t);
  document.getElementById("story").appendChild(para);
}    