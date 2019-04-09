// Michael Macari
// Jquery dom for document manipulation

(function($){
    // Function to check if the variable passed is prime
    function checkPrime(n){
        // If the number is less than or equal to one its not prime
        if(n <= 1){
            return(false)
        }
        // Base case: If the number is two its prime
        else if(n === 2){
            return(true)
        }
        else{
            // If the number is greater than two check its divisibility
            for(var i=2; i < n; i++){
                if(n % i === 0){
                    return(false)
                }
            }
            return(true)
        }
    }
    
    // Gets the form that we created in the handlebars by ID
    var myForm = $("#prime-input")
    // Event listener on form submission
    myForm.submit(function(event){

        // Gets the value inside of the input
        var checkNumber = $("#num-input").val()
        if(checkPrime(parseInt(checkNumber))){
            var isPrimeString = "<li class='is-prime'>" + String(checkNumber) + " is a prime number</li>"
            $("#attempts").append(isPrimeString)
            console.log(isPrimeString)
        }
        else{
            var isnotPrimeString = "<li class='not-prime'>" + String(checkNumber) + " is NOT a prime number</li>"
            $("#attempts").append(isnotPrimeString)
            console.log("Number is not prime")
        }

        // Prevents default submission behavior
        event.preventDefault()
        
    })

})(jQuery)