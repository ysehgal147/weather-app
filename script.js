const weekday = new Array(7);
weekday[0] = "SUNDAY";
weekday[1] = "MONDAY";
weekday[2] = "TUESDAY";
weekday[3] = "WEDNESDAY";
weekday[4] = "THURSDAY";
weekday[5] = "FRIDAY";
weekday[6] = "SATURDAY";

const space = "\xa0\xa0\xa0";

function time(){
    let today = new Date();
    let currentTime = weekday[today.getDay()] + space + today.getHours() + ":" + today.getMinutes();
    let isDayTime = today.getHours() > 6 && today.getHours() < 17;
    document.getElementById("time").innerHTML=currentTime;
    if (isDayTime) {
        document.getElementById("greeting").innerHTML="GOOD MORNING";
        document.getElementById("image").innerHTML = '<img src="https://www.flaticon.com/svg/static/icons/svg/869/869869.svg" alt="sun">';
        document.getElementById("container").style.backgroundColor="lightblue";
        document.getElementsByTagName("body")[0].style.color = "black";
    }
    else {
        document.getElementById("greeting").innerHTML = "GOOD NIGHT";
        document.getElementById("image").innerHTML = '<img src="https://www.flaticon.com/svg/static/icons/svg/740/740878.svg" alt="moon">';
    }
}

time();

setInterval(time, 1000);