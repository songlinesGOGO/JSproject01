/* Clock */

setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let session = "AM";
 
    if (h > 12) {
        h -= 12;
        session = "PM";
    }
    if (h == 0) {
        hr = 12;
        session = "AM";
    }
 
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
 
    let currentTime = h + ":" + m + ":" + s + session;
 
    document.getElementById("clock")
            .innerHTML = currentTime;
}
showTime();