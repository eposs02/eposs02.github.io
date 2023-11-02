const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
console.log("hello world");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertX: went to a special place. When he got to :insertY:, he decided to take a seat when he was stunned at what he saw, his sister :insertZ:! Bob saw the whole thing, and was also very surprised — :insertX:'s sister weighs 300 pounds!";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

let newStory = storyText;
const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);

newStory = newStory.replaceAll(":insertX:", xItem);
newStory = newStory.replace(":insertY:", yItem);
newStory = newStory.replace(":insertZ:", zItem);

function result() {

  const name = document.getElementById("customname").value;

  if(customName.value !== '') {
    const name = customName.value;
    newStory.replace("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stone";
    newStory = newStory.replace("300 pounds", weight);
    const temperature =  Math.round((94-32)*(5/9)) + " centigrade";
    newStory = newStory.replace("94 fahrenheit", temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}


