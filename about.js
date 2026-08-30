const button = document.getElementById("theme-btn");

button.addEventListener("click", () => {

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

button.innerHTML = "☀️";

}else{

button.innerHTML = "🌙";

}

});