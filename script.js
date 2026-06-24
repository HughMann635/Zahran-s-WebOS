function updateTime() {
    var currenttime = new Date().toLocaleString();
    var timetext = document.querySelector("#time");
    timetext.innerHTML = currenttime;
}
setInterval(updateTime, 1000);