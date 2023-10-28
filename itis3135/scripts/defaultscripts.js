// Gets the current date and time of the user's computer.
function getTheDate() {
    const date = new Date();
    console.log(date);
    document.getElementById("returnDate").textContent = "Today is " + date;
}

// Greets the user by their name and how they are feeling.
function greeting() {
    var userName = document.getElementById("name").value;
    var userFeeling = document.getElementById("how-you-are-doing").value;
    document.getElementById("returnGreeting").innerHTML = "The Thompson Design Enterprises welcomes you, " + 
    userName + "! We're glad you are doing " + userFeeling + "!";
}