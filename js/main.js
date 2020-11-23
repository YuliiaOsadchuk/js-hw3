const getMaxDigit = (numbers) => {
    let maxDigit = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxDigit) maxDigit = numbers[i];
    }
    return maxDigit;
}

const handleMaxDigit = () => {
    const maxDigitInputNode = document.getElementById("max-digit-input");
    const maxDigitOutputNode = document.getElementById("max-digit-output");
    maxDigitOutputNode.textContent = "Максимальне число: " + getMaxDigit(maxDigitInputNode.value);
}

const powNumber = (number, pow) => {
    let powedNumber = 1;
    for (i = 0; i < pow; i++) {
        powedNumber *= number;
    }
    return powedNumber;
}

const handlePowNumber = () => {
    const numberInputNode = document.getElementById("number-input");
    const powInputNode = document.getElementById("pow-input");
    const powNumberOutputNode = document.getElementById("pow-output");
    powNumberOutputNode.textContent = "Результат обчислення: " + powNumber(numberInputNode.value, powInputNode.value);
}

const formatName = (name) => {
    name = name.toUpperCase();
    let formattedName = name[0];
    name = name.toLowerCase();
    for (let i = 1; i < name.length; i++) {
        formattedName += name[i];
    }
    return formattedName;
}

const handleFormatName = () => {
    const nameInputNode = document.getElementById("format-name-input");
    const nameOutputNode = document.getElementById("format-name-output");
    nameOutputNode.textContent = "Відформатоване ім'я: " + formatName(nameInputNode.value);
}

const countSalary = (salary) => {
    const taxPdv = 18;
    const taxPf = 1.5;
    const tax = (taxPdv + taxPf) / 100;
    salary = salary - (salary * tax);
    return salary;
}

const handleCountSalary = () => {
    const countSalaryInputNode = document.getElementById("count-salary-input");
    const countSalaryOutputNode = document.getElementById("count-salary-output");
    countSalaryOutputNode.textContent = "Розмір заробітньої плати після вирахування податків: " + countSalary(countSalaryInputNode.value);
}

const getRandomNumber = (minNumber, maxNumber) => {
    const randomNumber = minNumber + Math.random() * (maxNumber + 1 - minNumber);
    return Math.floor(randomNumber);
}

const handleRandomNumber = () => {
    const randomFirstNumberInputNode = document.getElementById("random-min-number-input");
    const randomSecondInputNode = document.getElementById("random-max-number-input");
    const randomNumberOutputNode = document.getElementById("random-number-output");
    randomNumberOutputNode.textContent = "Випадкове число в заданому діапазоні: " + getRandomNumber(+(randomFirstNumberInputNode.value), +(randomSecondInputNode.value));
}

const countLetter = (word, letterToCount) => {
    let count = 0;
    for (i = 0; i < word.length; i++) {
        if (word[i] !== letterToCount) continue;
        count++;
    }
    return count;
}

const handleCountLetter = () => {
    const wordInputNode = document.getElementById("word-input");
    const letterInputNode = document.getElementById("letter-input");
    const countLetterOutputNode = document.getElementById("letter-output");
    countLetterOutputNode.textContent = "Кількість літер у слові: " + countLetter(wordInputNode.value, letterInputNode.value);
}


const convertCurrency = (money) => {
    const currencyChangeDollar = 25;
    money = money.toLowerCase();
    const currencyUAH = money.includes("uah");
    const currencyDol = money.includes("$");

    let currencySum = 0;
    if (!currencyUAH && !currencyDol) {
        alert("Error!");
        return currencySum;
    }

    if (currencyUAH) {
        money = money.replace("uah", "");
        currencySum = money / currencyChangeDollar;
    } else {
        money = money.replace("$", "");
        currencySum = money * currencyChangeDollar;
    }
    return currencySum;
}

const handleConvertCurrency = () => {
    const currencyInputNode = document.getElementById("currency-input");
    const currencyOutputNode = document.getElementById("currency-output");
    currencyOutputNode.textContent = "Результат: " + convertCurrency(currencyInputNode.value);
}


const getRandomPassword = (passwordLength) => {
    let password = "";
    const min = 0;
    const max = 9;
    if (password === "") passwordLength = 8;
    for (i = 0; i < passwordLength; i++) {
        let randomNumber = min + Math.random() * (max + 1 - min);
        password += Math.floor(randomNumber);
    }
    return password;
}

const handleRandomPassword = () => {
    const passwordInputNode = document.getElementById("password-input");
    const passwordOutputNode = document.getElementById("password-output");
    passwordOutputNode.textContent = "Сгенерований пароль: " + getRandomPassword(passwordInputNode.value);
}

const deleteLetter = (word, letterToDelete) => {

    let newWord = "";
    for (i = 0; i < word.length; i++) {
        if (word[i] === letterToDelete) continue;
        newWord += word[i];
    }
    return newWord;
}

const handleDeleteLetter = () => {
    const deleteWordInputNode = document.getElementById("delete-word-input");
    const deleteLetterInputNode = document.getElementById("delete-letter-input");
    const deleteLetterOutputNode = document.getElementById("delete-letter-output");
    deleteLetterOutputNode.textContent = "Результат: " + deleteLetter(deleteWordInputNode.value, deleteLetterInputNode.value);
}

const isPalindrom = (word) => {
    word = word.split(" ").join("");
    word = word.toLowerCase();
    let newWord = "";
    for (i = word.length - 1; i >= 0; i--) {
        newWord += word[i];
    }
    return (word === newWord);
}

const handleIsPalindrom = () => {
    const palindromInputNode = document.getElementById("palindrom-input");
    const palindromOutputNode = document.getElementById("palindrom-output");
    palindromOutputNode.textContent = "Слово або вираз є паліндромом: " + isPalindrom(palindromInputNode.value);
}