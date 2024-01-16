
// Controller
function handleUserInput(){

    // Get user input from DOM
    let userInputValue = document.getElementById('user-input').value;

    // Turn into integer
    let userInput = parseInt(userInputValue);
    
    // Validate input
    if (!Number.isInteger(userInput) || userInput > 50 || userInput < 1) {
        
        // Display error message
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter an integer smaller than 50",
        });
    }
    
    // Get fibonacci sequence
    let fibonacciArray = generateFibonacci(userInput);

    // Display result
    displayResults(fibonacciArray);
}

// Logic
function generateFibonacci(maxCount){

    // Empty array to store results into
    let fibonacciArray = [];

    // Use loop to get Fibonacci Sequence
    for (let i = 0; i < maxCount; i++) {
        
        // Get last two entries of sequence
        let lastEntry = fibonacciArray[fibonacciArray.length - 1];
        if (lastEntry == null) {
            
            // Initialize first number in sequence
            fibonacciArray.push(0);
            continue;
        }

        let secondLastEntry = fibonacciArray[fibonacciArray.length - 2];
        if (secondLastEntry == null) {

            // Initialize second number in sequence
            fibonacciArray.push(1);
            continue;
        }
        
        // Calculate next Fibonacci number
        let newEntry = lastEntry + secondLastEntry;
        
        // Append to Fibonacci array
        fibonacciArray.push(newEntry);
    }

    // Return results
    return fibonacciArray;
    
}

// View
function displayResults(fibonacciArray){

    // String to display results
    let results = '';
    
    // Loop over each number, format it, and add to string
    fibonacciArray.forEach(number => {
        
        // Format number with commas
        const formattedNumber = new Intl.NumberFormat().format(number);

        // Create formatted result HTML
        let result = 
        `<div class="bg-body text-center p-3 m-1 rounded border border-dark" style="min-width: 5rem;">${formattedNumber}</div>`;

        // Append result to string
        results += result;

    });

    // Display to user
    document.getElementById('results').innerHTML = results;
    document.getElementById('resultsContainer').classList.remove('d-none');
}