
let modal = document.getElementsByClassName("modal");
let btn = document.getElementsByClassName("cards__item");
let span = document.getElementsByClassName("close");

for (let i = 0 ; i < btn.length ; i++ ){
  btn[i].onclick = function() {
    modal[i].style.display = "block";
  }
  
  
  span[i].onclick = function() {
    modal[i].style.display = "none";
  }
  
}



window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

