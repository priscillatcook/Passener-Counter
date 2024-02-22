let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0; //initialize the count as 0

//listen for clicks on the increment buttom

//change the count-el in the HTML to reflect the new count

function increment() {
  count += 1; //increment the count variable when the button is clicked
  countEl.textContent = count;
  console.log(count);
}

function save() {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  let countStr = " " + count + " - ";
  // 3. Render the variable in the saveEl using innerText
  saveEl.textContent += countStr;
  // NB: Make sure to not delete the existing content of the paragraph
  countEl.textContent = 0;
  count = 0;
}
