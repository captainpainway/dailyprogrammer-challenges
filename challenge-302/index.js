'use strict';

const fs = require('fs');

function elements(string) {
    let json = JSON.parse(fs.readFileSync('./elements.json', 'utf8'));
    let strArr = string.split('');
    let word = '', elements = '(', needle = '';
    for(let i in strArr) {
        needle += strArr[i];
        json.filter((json) => {
            if(json.Symbol.toLowerCase() == needle) {
                word += json.Symbol;
                elements += json.Element + ' ';	
                needle = '';
            }
        });
    }
    if(needle.length > 0) {
	word = 'Word failed';
    } else {
        word += ' ' + elements.trim() + ')';
    }
    console.log(word);
}

elements(process.argv[2]);

//elements('genius');
//elements('functions');
//elements('bacon');
//elements('poison');
//elements('sickness');
//elements('ticklish');
//elements('water');
