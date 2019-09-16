var eatRabbit = false;
var breathDeath = false;
var pigDeath = false;

function setup() {

  // Change these to change the title and author of the story
  document.getElementById('title').innerHTML="The Bad Big Wolf and a Pig Maybe"; // title

  document.getElementById('author').innerHTML="By: Me"; // author


  
  // All of your code goes under here
  

  var story = 'The Big Bad Wolf is very hungry.' + food() + breath() + pig() + brick(); // Create the text

  printToPage(story); // Print the text to the webpage
}



// Put your functions below here:

function food() {
  let rabbit = Math.floor(random(1, 6)); // Random number rounded down
  if(rabbit > 3) {
    eatRabbit = true;
  }
  if(eatRabbit == true) {
    return " So the wolf decided to eat a rabbit.";
  } else {
    
    return " As he was deciding on what he wanted to eat, he noticed an easy to blow down straw house with a nice juicy pig inside.";
  }
  
}



function breath() {
  if(eatRabbit == false){
    let breath = random(1, 6);
    if(breath < 4) {
      breathDeath = true;
      return " The wolf walks up to the straw house, and he huffs, and puffs, and runs out of breath and dies."
    } else {
      return " The wolf walks up to the straw house, and he huffs, and puffs, and blows the house down!"
    }
  } else {
    return ""
  }
  
}

function pig() {
  if(eatRabbit == false && breathDeath == false){
    let pigDeath = random(1, 6);
    if(pigDeath < 4) {
      pigDeath = true;
      return " Aftter he ate the pig, he finds a stick house with a nice juicy pig inside. So he huffed, and puffed, and the pig inside killed the wolf as revenge for eating his brother."
    } else {
      return " Aftter he ate the pig, he finds a stick house with a nice juicy pig inside. So he huffs, and puffs, and blows the house down!"
    }
  } else{
    return ""
  }
  
}

function brick() {
  if(eatRabbit == false && breathDeath == false && pigDeath == false){
    let fireDeath = random(1, 6);
    if(fireDeath > 3) {
      return " Aftter he ate the pig, he finds a brick house with a nice juicy pig inside. so he climbed into the house through the chimney. But the pig inside heard the wolf, so he lit up the fireplace and the wolf burned to death."
    } else if(fireDeath == 1) {
      return " Aftter he ate the pig, he finds a brick house with a nice juicy pig inside. so he climbed into the house through the chimney. He was able to succesfully sneak into the house and ended up having three juicy, fat, stupid, ugly pigs for dinner."
    } else{
     return " Aftter he ate the pig, he finds a brick house with a nice juicy pig inside. So he huffs, and puffs, and runs out of breath and dies becuase you can't blow down a brick house."
    }
  } else {
    return""
  }
}



//Don't delete this!
function printToPage(story) {
  var para = document.createElement("P");
  var t = document.createTextNode(story);
  para.appendChild(t);
  document.getElementById("story").appendChild(para);
}    