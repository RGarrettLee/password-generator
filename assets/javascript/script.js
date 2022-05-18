console.log('Script successfully loaded');

let modal = document.getElementById('modal');

let btn = document.getElementById('generate');

let submit = document.getElementById('submit');

let span = document.getElementsByClassName('close')[0];

let pass = document.getElementById('password');

let lowercases = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let uppercases = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '"', '?', '/', '.', ',']; 

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function generatePassword (len, upper, lower, num, spec) {
    let generatedPassword = '';
    let valid = false;
    let checks = 0;

    let characterPool = []

    if (upper) {
        characterPool = characterPool.concat(uppercases);
        checks++;
    } if (lower) {
        characterPool = characterPool.concat(lowercases);
        checks++;
    } if (num) {
        characterPool = characterPool.concat(numbers);
        checks++;
    } if (spec) {
        characterPool = characterPool.concat(specials);
        checks++;
    }

    for (let i = checks; i < len; i++) {
        if (checks != 0) {
            if (upper) {
                generatedPassword += uppercases[Math.floor(Math.random() * uppercases.length)];
                checks--;
            } if (lower) {
                generatedPassword += lowercases[Math.floor(Math.random() * lowercases.length)];
                checks--;
            } if (num) {
                generatedPassword += numbers[Math.floor(Math.random() * numbers.length)];
                checks--;
            } if (spec) {
                generatedPassword += specials[Math.floor(Math.random() * specials.length)];
                checks--;
            }
        }
        generatedPassword += characterPool[Math.floor(Math.random() * characterPool.length)];
    }

    console.log(generatedPassword);

    return generatedPassword;
}


submit.onclick = function() {
    let length = document.getElementById('length').value;
    let uppercase = document.getElementById('uppercase').checked;
    let lowercase = document.getElementById('lowercase').checked;
    let numeric = document.getElementById('numeric').checked;
    let special = document.getElementById('special').checked;
    
    if (isNaN(length) || length.length == 0) {
        alert('Your length input is invalid');
        return;
    }

    if (!uppercase && !lowercase) {
        alert('Please select at least one character type');
        return;
    }

    modal.style.display = 'none';
    pass.innerHTML = generatePassword(length, uppercase, lowercase, numeric, special);
}