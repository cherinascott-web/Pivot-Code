function sayHello() {
  alert("Hello!");
}

function sayBye() {
  alert("Goodbye!");
}

function spinText() {
  let text = document.getElementById("text");
  text.innerHTML = "You clicked the button!";
  // let text = document.getElementById("text");

  // // Remove the class
  // text.classList.remove("spin");

  // // Add it back after a tiny delay (10ms)
  // setTimeout(() => {
  //   text.classList.add("spin");
  // }, 1000);
}