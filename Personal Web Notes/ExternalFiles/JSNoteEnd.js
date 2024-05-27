function end() {
    const dateToday = new Date();
    document.getElementById("currentTime").innerHTML += dateToday;
    document.getElementById("currentTimeUTC").innerHTML = dateToday.toUTCString();
    document.getElementById("currentTimeISO").innerHTML = dateToday.toISOString();
}
end(); // To run end