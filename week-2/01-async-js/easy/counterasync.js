// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


let running = true; // Variable to track if the clock should continue running

function ClockCounter(){
    const currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    // Add leading zeros if the values are less than 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    console.log(hours + ':' + minutes + ':' + seconds);

    // Return a promise resolved after 1 second if running is true, otherwise return a resolved promise immediately
    return running ? oneInterver(1000).then(ClockCounter) : Promise.resolve();
}

function oneInterver(duration){
    return new Promise (function(resolve){
        setTimeout(resolve, duration);
    });
}

// Start the clock
ClockCounter();

// Function to stop the clock
function stopClock() {
    running = false;
}

