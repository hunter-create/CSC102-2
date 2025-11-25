// starts the function for our game logic
function playCraps() {
    // Generate two random numbers between 1 and 6, simulating dice rolls for die1 and die2
    let die1 = Math.floor(Math.random() * 6) + 1;
     // ! Logical Error: This should be +1 but isn't, so die2 can never roll a 6.
    let die2 = Math.floor(Math.random() * 6);

    // adds both die1 and die2 to get the sum of the two dice
    let sum = die1 + die2;

    // This makes a variable to store the game result message
    let resultMessage;

    // Check for game conditions based on sum or dice values
    if (sum === 7 || sum === 11) {
        // checks if the sum is 7 or 11, if this is true the player loses
        resultMessage = "CRAPS you lose!";
    } else if (die1 === die2 && die1 % 2 === 0) {
        //  Checks if the dice show the same value, and are even
        resultMessage = "You won!";
    } else {
        // Covers any other condition where neither a win nor a loss applies
        resultMessage = "You pushed!";
    }

    // Output the result to the HTML page
    document.getElementById("result").innerHTML = `
    <p>Dice Roll: ${die1} + ${die2} = ${sum}</p>
    <p>${resultMessage}</p>
`;
}

// A function that takes a custom message and displays it on the page
// This could be used to add more interactive options to the game in the future
function displayCustomMessage(message) {
    // Output the custom message to the HTML page
    document.getElementById("result").innerHTML = `<p>${message}</p>`;
}
