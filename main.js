function clockTime() {
    var hour = document.getElementById('hour');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');

    var currentHour = new Date().getHours();
    var currentMinutes = new Date().getMinutes();
    var currentSeconds = new Date().getSeconds();

        hour.innerHTML = currentHour;
        minutes.innerHTML = currentMinutes;
        seconds.innerHTML = currentSeconds;
};

var currentUpdateTime = setInterval(clockTime, 1000)