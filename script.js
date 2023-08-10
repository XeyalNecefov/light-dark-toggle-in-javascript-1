const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-brightness-high-fill');
    if(this.classList.toggle('bi-moon-fill')){
        body.style.backgroundColor = "white";
        body.style.color = "#071a52";
        body.style.transition = "1s";
    }else{
        body.style.backgroundColor = "#071a52";
        body.style.color = "white";
        body.style.transition = "1s";
        
    }
})