const getArrayFromStr = (array) => {
    const newArray = array.split('');
    return newArray;
}

const getMaxDigit = (numbers) => {
    const numberArray = getArrayFromStr(numbers);
    let maxDigit = 0;
    numberArray.forEach((number) => {
        if (number > maxDigit) maxDigit = number;
    })
    return maxDigit;
}

const powNumber = (number, pow) => {
    let powedNumber = 1;
    for (i = 0; i < Math.abs(pow); i++) {
        powedNumber *= number;
    }
    if (pow < 0) {
        powedNumber = 1 / (powedNumber);
    }
    return powedNumber;
}

const formatName = (name) => {
    name = name.toUpperCase();
    let formattedName = name[0];
    name = name.toLowerCase();
    name.forEach((letter) => {
        formattedName += letter;
    })
    return formattedName;
}

const countSalary = (salary) => {
    if (salary < 0) salary = 0;
    const taxPdv = 18;
    const taxPf = 1.5;
    const tax = (taxPdv + taxPf) / 100;
    salary = salary - (salary * tax);
    return salary;
}

const getRandomNumber = (minNumber, maxNumber) => {
    const randomNumber = minNumber + Math.random() * (maxNumber + 1 - minNumber);
    return Math.floor(randomNumber);
}

const countLetter = (word, letterToCount) => {
    let count = 0;
    const wordArray = getArrayFromStr(word);
    wordArray.forEach((letter) => {
        if (letter === letterToCount) count++;
    })
    return count;
}

const convertCurrency = (money) => {
    const currencyChangeDollar = 25;
    money = money.toLowerCase();
    const currencyUAH = money.includes("uah");
    const currencyDol = money.includes("$");

    let currencySum = 0;
    if (!currencyUAH && !currencyDol) {
        alert("Невірний формат. Наприклад, для вказання доларів вкажіть 100$, для гривень 100Uah");
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

const getRandomPassword = (passwordLength) => {
    let password = "";
    const min = 0;
    const max = 9;
    for (i = 0; i < passwordLength; i++) {
        let randomNumber = min + Math.random() * (max + 1 - min);
        password += Math.floor(randomNumber);
    }
    return password;
}

const deleteLetter = (word, letterToDelete) => {
    let newWord = "";
    word = word.toLowerCase();
    const wordArray = getArrayFromStr(word);
    wordArray.forEach((letter) => {
        if (letter !== letterToDelete) newWord += letter;
    })
    return newWord;
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