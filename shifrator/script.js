// Функция для шифрования текста
function encrypt() {
    const inputText = document.getElementById("inputText").value;
    const encryptedText = inputText.replace(/./g, c => String.fromCharCode(c.charCodeAt(0)+1));
    const encryptionKey = Math.random().toString(36).substr(2, 8);

    document.getElementById("encryptedText").value = encryptedText;
    document.getElementById("encryptionKey").value = encryptionKey;
}

// Функция для дешифрования текста
function decrypt() {
    const encryptedText = document.getElementById("encryptedInputText").value;
    const encryptionKey = document.getElementById("decryptionKey").value;
    const decryptedText = encryptedText.replace(/./g, c => String.fromCharCode(c.charCodeAt(0)-1));

    if (encryptionKey === document.getElementById("encryptionKey").value){
        document.getElementById("decryptedText").value = decryptedText;
    } else {
        alert("Неверный ключ дешифрования");
    }
}