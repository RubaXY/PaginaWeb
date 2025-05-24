var counter = 0;
window.addEventListener("DOMContentLoaded",move=() =>{
    if (counter == 0) {
        j = 1;
        var elem = document.querySelector(".progress-done");
        var width = 25;
        var main = setInterval(frame,25);
        function frame() {
            if (width >= 63) {
                clearInterval(main);
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
});