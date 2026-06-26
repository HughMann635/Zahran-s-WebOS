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

welcomeScreenClose.addEventListener("click", function() {
    welcomeScreen.style.display = "none";
});

welcomeScreenOpen.addEventListener("click", function() {
    welcomeScreen.style.display = "block";
});

var galleryScreen = document.querySelector("#app_1_window")
var galleryScreenClose = document.querySelector("#galleryclose")
var galleryScreenOpen = document.querySelector("#gallery-icon")

galleryScreenClose.addEventListener("click", function() {
    galleryScreen.style.display = "none";
});

galleryScreenOpen.addEventListener("click", function() {
    galleryScreen.style.display = "block";
});

var selectedIcon = undefined
function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element
}  
function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined
}
function handleIconTap(element) {
  if (element.classList.contains("selected")) {
    deselectIcon(element)
    openWindow(window)
  } else {
    selectIcon(element)
  }
}
dragelement(document.querySelector("#app_1_window"))
var galleryIcon = document.querySelector("#gallery-icon");
var selectedApp = null;

/*Asked Gemini for help on how to fix this icon selection logic*/
galleryIcon.addEventListener("click", function(event) {
    event.stopPropagation(); 
    
    var isNowSelected = galleryIcon.classList.toggle("selected");
    
    if (isNowSelected) {
        selectedApp = "gallery";
    } else {
        selectedApp = null; 
    }
});

document.addEventListener("click", function() {
    if (selectedApp !== null) {
        galleryIcon.classList.remove("selected");
        selectedApp = null;
    }
});