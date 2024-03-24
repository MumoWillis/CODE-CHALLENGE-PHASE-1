function detectSpeed() {
    readline.question("Enter the speed (in km/h): ", speedInput => 
    {const speed = parseInt(speedInput); // Convert input to integer
    
    // Define speed limit and demerit threshold
    const speedLimit = 70; // Speed limit in km/h
    
    const kmPerDemerit = 5; // Number of km/h over the limit for each demerit point

    // Check if input is a valid number
    if (!isNaN(speed)) {

    // Check if speed exceeds the speed limit
    if (speed>speedLimit) {

    // Calculate demerit points
    const demeritPoints = Math.floor((speed - speedLimit) /kmPerDemerit);
    console.log('Demerit points: $(demeritPoints)');
    } else {
        // Speed is within the limit
    console.log("Speed is within the limit");
    }
    } else {
        // Invalid input
        console.log("Invalid input! Please enter a valid speed.");
    }
    
    readline.close(); // Close readline interface
});
}
    // Call the detectSpeed function to start the program
    detectSpeed(95);