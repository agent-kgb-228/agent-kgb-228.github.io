function generateRandomChar(characters) {
    return characters.charAt(Math.floor(Math.random() * characters.length));
}

function generatePassword(length, uppercase, lowercase, numbers, special) {
    let characters = "";
    let password = "";

    if (uppercase) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numbers) {
        characters += "0123456789";
    }
    if (special) {
        characters += "!@#$%^&*()-_=+[]{}\\|;:'\",.<>/?`~";
    }

    for (let i = 0; i < length; i++) {
        password += generateRandomChar(characters);
    }

    return password;
}

function generatePasswords() {
    let length = parseInt(document.getElementById("length").value);
    let uppercase = document.getElementById("uppercase").checked;
    let lowercase = document.getElementById("lowercase").checked;
    let numbers = document.getElementById("numbers").checked;
    let special = document.getElementById("special").checked;

    let passwordsDiv = document.getElementById("passwords");
    passwordsDiv.innerHTML = "";

    for (let i = 0; i < 16; i++) {
        let password = generatePassword(length, uppercase, lowercase, numbers, special);
        passwordsDiv.innerHTML += password + "<br>";
    }
}

function downloadPasswords() {
    let length = parseInt(document.getElementById("length").value);
    let uppercase = document.getElementById("uppercase").checked;
    let lowercase = document.getElementById("lowercase").checked;
    let numbers = document.getElementById("numbers").checked;
    let special = document.getElementById("special").checked;

    let passwords = "";

    for (let i = 0; i < 16; i++) {
        let password = generatePassword(length, uppercase, lowercase, numbers, special);
        passwords += password + "\r\n";
    }

    let element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(passwords));
    element.setAttribute("download", "passwords.txt");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}