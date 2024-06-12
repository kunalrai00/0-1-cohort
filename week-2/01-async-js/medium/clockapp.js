let running = true; // Variable to track if the clock should continue running

function ClockCounter() {
    const currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    // Convert hours to 12-hour format and determine AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    // Add leading zeros if the values are less than 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    console.log(hours + ':' + minutes + ':' + seconds + ' ' + ampm);

    // Return a promise resolved after 1 second if running is true, otherwise return a resolved promise immediately
    return running ? oneInterval(1000).then(ClockCounter) : Promise.resolve();
}

function oneInterval(duration) {
    return new Promise(function(resolve) {
        setTimeout(resolve, duration);
    });
}

// Start the clock
ClockCounter();

// Function to stop the clock
function stopClock() {
    running = false;
}
