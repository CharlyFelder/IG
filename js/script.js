var nav     = document.querySelector(".nav-links");
var toggle  = document.querySelector(".nav-toggle-button");
var page    = document.documentElement;

console.log(page)

function doToggle(){
    this.classList.toggle('active');
    page.classList.toggle('active');
    ul.classList.toggle('open');

}

toggle.addEventListener('click', doToggle);
