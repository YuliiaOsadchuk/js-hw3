const handleMaxDigit = () => {
    const maxDigitInputNode = document.getElementById("max-digit-input");
    const maxDigitOutputNode = document.getElementById("max-digit-output");
    maxDigitOutputNode.textContent = "Максимальне число: " + getMaxDigit(maxDigitInputNode.value);
}
const handlePowNumber = () => {
    const numberInputNode = document.getElementById("number-input");
    const powInputNode = document.getElementById("pow-input");
    const powNumberOutputNode = document.getElementById("pow-output");
    powNumberOutputNode.textContent = "Результат обчислення: " + powNumber(numberInputNode.value, powInputNode.value);
}
const handleFormatName = () => {
    const nameInputNode = document.getElementById("format-name-input");
    const nameOutputNode = document.getElementById("format-name-output");
    nameOutputNode.textContent = "Відформатоване ім'я: " + formatName(nameInputNode.value);
}

const handleCountSalary = () => {
    const countSalaryInputNode = document.getElementById("count-salary-input");
    const countSalaryOutputNode = document.getElementById("count-salary-output");
    countSalaryOutputNode.textContent = "Розмір заробітньої плати після вирахування податків: " + countSalary(countSalaryInputNode.value);
}

const handleRandomNumber = () => {
    const randomFirstNumberInputNode = document.getElementById("random-min-number-input");
    const randomSecondInputNode = document.getElementById("random-max-number-input");
    const randomNumberOutputNode = document.getElementById("random-number-output");
    randomNumberOutputNode.textContent = "Випадкове число в заданому діапазоні: " + getRandomNumber(+(randomFirstNumberInputNode.value), +(randomSecondInputNode.value));
}
const handleCountLetter = () => {
    const wordInputNode = document.getElementById("word-input");
    const letterInputNode = document.getElementById("letter-input");
    const countLetterOutputNode = document.getElementById("letter-output");
    countLetterOutputNode.textContent = "Кількість літер у слові: " + countLetter(wordInputNode.value, letterInputNode.value);
}

const handleConvertCurrency = () => {
    const currencyInputNode = document.getElementById("currency-input");
    const currencyOutputNode = document.getElementById("currency-output");
    currencyOutputNode.textContent = "Результат: " + convertCurrency(currencyInputNode.value);
}

const handleRandomPassword = () => {
    const passwordInputNode = document.getElementById("password-input");
    const passwordOutputNode = document.getElementById("password-output");
    passwordOutputNode.textContent = "Сгенерований пароль: " + getRandomPassword(passwordInputNode.value || 8);
}
const handleDeleteLetter = () => {
    const deleteWordInputNode = document.getElementById("delete-word-input");
    const deleteLetterInputNode = document.getElementById("delete-letter-input");
    const deleteLetterOutputNode = document.getElementById("delete-letter-output");
    deleteLetterOutputNode.textContent = "Результат: " + deleteLetter(deleteWordInputNode.value, deleteLetterInputNode.value);
}

const handleIsPalindrom = () => {
    const palindromInputNode = document.getElementById("palindrom-input");
    const palindromOutputNode = document.getElementById("palindrom-output");
    palindromOutputNode.textContent = "Слово або вираз є паліндромом: " + isPalindrom(palindromInputNode.value);
}