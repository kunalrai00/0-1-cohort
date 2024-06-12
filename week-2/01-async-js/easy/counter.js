

function ClockCounter(){
    const currentTime = new Date();


    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

// Add leading zeros if the values are less than 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    console.log(hours + ':' + minutes + ':' + seconds)
}


setInterval(ClockCounter,1000)