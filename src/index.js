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
    debugger
    const morse_table = {
            '1011': 'a',
            '11101010': 'b',
            '11101110':'c',
            '111010':'d',
            '10':'e',
            '10101110':'f',
            '111110': 'g',
            '10101010':'h',
            '1010': 'i',
            '10111111': 'j',
            '111011': 'k',
            '10111010':'l',
            '1111': 'm',
            '1110': 'n',
            '111111':'o',
            '10111110':'p',
            '11111011':'q',
            '101110':'r',
            '101010':'s',
            '11':'t',
            '101011':'u',
            '10101011':'v',
            '101111':'w',
            '11101011':'x',
            '11101111':'y',
            '11111010':'z',
            '1011111111':'1',
            '1010111111':'2',
            '1010101111':'3',
            '1010101011':'4',
            '1010101010':'5',
            '1110101010':'6',
            '1111101010':'7',
            '1111111010':'8',
            '1111111110':'9',
            '1111111111':'0',
        };
    expr = expr.split('**********');
    let arr = [];
    let subarr = [];
    let encodedStr = '';
    for(let i = 0; i < expr.length; i++){
        expr[i] = expr[i].split('')
        for(let j = 0, max = expr[i].length/10; j < max;j++){
            
            subarr.push(parseInt(expr[i].splice(0,10).join('')).toString())

        }
        arr.push(subarr);
        subarr = [];
    }
    if(arr.length !== 1){
        arr.forEach((array) => {
           encodedStr += array.reduce((acc,num) => acc + morse_table[num],'');
           if(array !== arr[arr.length-1]) encodedStr += ' '
           });
           return encodedStr;
           
        }
    

        else {
            arr = arr[0];
            encodedStr = arr.reduce((acc,num) => acc + morse_table[num],'')
            return encodedStr;

    }
}

module.exports = {
    decode
}