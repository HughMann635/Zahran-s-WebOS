function updateTime() {
    var currenttime = new Date().toLocaleString();
    var timetext = document.querySelector("#time");
    timetext.innerHTML = currenttime;
}
setInterval(updateTime, 1000);

dragelement(document.getElementById("welcome"));
function dragelement(element) {
    
    var x_init = 0
    var y_init = 0
    var x_now = 0
    var y_now = 0

    if (document.getElementById(element.id+"header")) {
        document.getElementById(element.id + "header").onmousedown = startDragging;
    } else {
        element.onmousedown = startDragging;
    }

    function startDragging(e) {
        e = e || window.event;
        e.preventDefault();
        x_init = e.clientX;
        y_init = e.clientY;
        document.onmouseup = stopDragging;
        document.onmousemove = dragElement;
    }

    function dragElement(e) {
        e = e || window.event;
        e.preventDefault();
        x_now = x_init - e.clientX
        y_now = y_init - e.clientY
        x_init = e.clientX;
        y_init = e.clientY;
        element.style.left = (element.offsetLeft - x_now) + "px";
        element.style.top = (element.offsetTop - y_now) + "px";
    }

    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

}
/*Used Gemini to help me with the opening/closing window logic*/
var welcomeScreen = document.querySelector("#welcome")
var welcomeScreenClose = document.querySelector("#welcomeclose")
var welcomeScreenOpen = document.querySelector("#welcomeopen")

// Change the style directly inside the click event
welcomeScreenClose.addEventListener("click", function() {
    welcomeScreen.style.display = "none";
});

// Change the style directly inside the click event
welcomeScreenOpen.addEventListener("click", function() {
    welcomeScreen.style.display = "block";
});