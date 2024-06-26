// EXERCISE 4: DIGITAL CLOCK

// Create a Digital seconds clock using setInterval and Date object in JavaScript.
// The Date object can be used to get the date, time, hours, and seconds; which can then be updated using setInterval.
// Try to keep the UI good looking.

function updateClock() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    let clock = document.querySelector('.clock');
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();
