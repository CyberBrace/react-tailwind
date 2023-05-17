const hider = document.querySelector('#hider');
const menu = document.querySelector('#menu');

hider.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})




// Add active class to the current button (highlight it)
var navdiv = document.getElementById("navdiv");
var bgactives = navdiv.getElementsByClassName("bgactive");
for (var i = 0; i < bgactives.length; i++) {
    bgactives[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

