// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("openModal");

//get the button that adds input into the todo list and get the input, create the list that the input will be put  in
const addBtn = document.getElementById("add-btn");
const inputBox = document.getElementById("input-box");
let ul = document.querySelector("todo");

//container of the whole content
const container = document.getElementById("container");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  container.style.display = "none";
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  container.style.display = "flex";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//when you add a new list to the todolist
addBtn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.classList.add("todo-style");
  console.log(li);
  console.log(inputBox.innerHTML);
  li.innerHTML = inputBox.value;
  console.log(ul);
  ul.appendChild(li);
});
