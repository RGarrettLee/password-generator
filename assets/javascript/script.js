console.log('Script successfully loaded'); // checking if script was loaded

let modal = document.getElementById('modal'); // creating variable to interact with modal
let btn = document.getElementById('generate'); // creating variable to interact with generate button
let submit = document.getElementById('submit'); // creating variable to interact with submit button
let span = document.getElementsByClassName('close')[0]; // creating variable to interact with close button
let pass = document.getElementById('password'); // creating variable to interact with password field

let lowercases = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; // creating lowercase letter array
let uppercases = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // creating uppercase letter array
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; // creating numeric character array
let specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '<', '>', '|', ':', ';', '"', '?', '/', '.', ',']; // creating special character array

btn.onclick = function() { // when generate button is clicked, display modal contents
    modal.style.display = 'block';
}

span.onclick = function() { // when close button is clicked, close modal
    modal.style.display = 'none';
}

window.onclick = function(event) { // when window is clicked close modal if it is open
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function generatePassword (len, upper, lower, num, spec) { // function to generate password
    let generatedPassword = ''; // create string to store generated password
    let checks = 0; // create variable to count number of character types selected

    let characterPool = [] // create array to store a pool of characters corresponding to the selected character types

    if (upper) { // if uppercase was selected
        characterPool = characterPool.concat(uppercases); // add uppercase letters to character pool
        checks++; // increase check count
        generatedPassword += uppercases[Math.floor(Math.random() * uppercases.length)]; // add a random uppercase letter to the generated password
    } if (lower) { // if lowercase was selected
        characterPool = characterPool.concat(lowercases); // add lowercase letters to character pool
        checks++; // increase check count
        generatedPassword += lowercases[Math.floor(Math.random() * lowercases.length)]; // add a random lowercase letter to the generated password
    } if (num) { // if numeric was selected
        characterPool = characterPool.concat(numbers); // add numeric characters to character pool
        checks++; // increase check count
        generatedPassword += numbers[Math.floor(Math.random() * numbers.length)]; // add a random numeric character to the generated password
    } if (spec) { // if special was selected
        characterPool = characterPool.concat(specials); // add special characters to character pool
        checks++; // increase check count
        generatedPassword += specials[Math.floor(Math.random() * specials.length)]; // add a random special character to the generated password
    }

    for (let i = checks; i < len; i++) { // starting from the number of character types selected, add random characters from the pool to the generated password string
        generatedPassword += characterPool[Math.floor(Math.random() * characterPool.length)]; // if the criteria is met, add random characters from the pool to the generated password string
    }

    return generatedPassword; // return the generated password
}

submit.onclick = function() { // when the submit button is clicked, validate user input and then generate password
    let length = document.getElementById('length').value; // create variable to store user input for password length
    let uppercase = document.getElementById('uppercase').checked; // create variable to store user input for uppercase letters
    let lowercase = document.getElementById('lowercase').checked; // create variable to store user input for lowercase letters
    let numeric = document.getElementById('numeric').checked; // create variable to store user input for numeric characters
    let special = document.getElementById('special').checked; // create variable to store user input for special characters
    
    if (isNaN(length) || length.length === 0) { // if user input length is Not A Number or is empty
        alert('Your length input is invalid'); // alert user that their input is invalid
        return; // exit function
    } else if (parseInt(length) < 8 || parseInt(length) > 128) {
        alert('Your length input is too short or too long'); // alert user that their input is invalid
        return; // exit function
    }

    if (!uppercase && !lowercase) { // if user hasn't chosen any character type
        alert('Please select at least one character type'); // alert user to choose at least one character type
        return; // exit function
    }

    // if the user input is valid

    modal.style.display = 'none'; // close modal
    pass.value = generatePassword(length, uppercase, lowercase, numeric, special); // modify passworld field to display the generated password
}