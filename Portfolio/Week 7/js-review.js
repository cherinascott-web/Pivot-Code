console.log("JS file connected!");

const message = "Student Profile";

let studentName = "";
let favoriteSubject = "";

function showName() {

    studentName = document.getElementById("name").value;

    console.log("Name typed:", studentName);

    alert("Your name is: " + studentName);

}

function showSubject() {

    favoriteSubject = document.getElementById("favorite").value;

    console.log("Favorite subject:", favoriteSubject);

    alert("Your favorite subject is: " + favoriteSubject);

}
function sayHello(){
let name = document.getElementById("name").value;
alert("Hello " + name);
}