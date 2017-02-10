"use strict";

function scrabble(tiles, word) {
    let tileArr = tiles.split('');
    let wordArr = word.split('');
    let temp = [];
    wordArr.forEach((w) => {
        for(let i in tileArr) {
            if(w == tileArr[i]) {
                temp.push(tileArr[i]);
                tileArr[i] = null;
                return;
            }
        }
    });
    if(temp.join('') == word) {
        console.log(true);
    } else {
        console.log(false);
    }
};

scrabble("ladilmy", "daily");
scrabble("eerriin", "eerie");
scrabble("orrpgma", "program");
scrabble("orppgma", "program");
