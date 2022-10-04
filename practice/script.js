'use strict';

function capitalize(str = '') {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function reverseString(str = '') {
    return str.split('').reverse().join('');
}

function caesarCipher(str = '', key = 1) {
    const arr = str.split('');
    const out = arr.map((value) => encrypt(value, key));

    return out.join('');

    function encrypt(char = '', key = 1) {
        if (!isAlpha(char)) return char;

        // 26 letters; number a-z as 0-25
        const letterIndex = char.toLowerCase().charCodeAt(0) - 97;
        const newIndex = (letterIndex + key) % 26;
        let newChar = String.fromCharCode(newIndex + 97);

        return isUpper(char) ? newChar.toUpperCase() : newChar;
    }

    function isAlpha(char = '') {
        const reg = /[a-z]/i;
        return reg.test(char);
    }

    function isUpper(char = '') {
        return char === char.toUpperCase();
    }
}

function analyzeArray(arr = []) {
    return {
        average: arr.reduce((p, c) => p + c) / arr.length,
        min: arr.reduce((p, c) => (p < c ? p : c)),
        max: arr.reduce((p, c) => (p > c ? p : c)),
        length: arr.length,
    };
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b,
};

export { capitalize, reverseString, caesarCipher, analyzeArray, calculator };
