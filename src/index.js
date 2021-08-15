const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
function decode(expr) {
    let wordsArray = expr.split('**********');
    let lettersArray = []
    for (let item of wordsArray) {
       let letters =  item.match(/.{1,10}/g);
       lettersArray.push(letters);
    }
let expression = '';
    for (let item of lettersArray) {
       item = item.map(str => {
        str = str.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '');
        return str.replace(str, MORSE_TABLE[str]);         
        });

        expression += item.join('') + ' ';

    }
    return expression.slice(0, -1);
}

module.exports = {
    decode
}