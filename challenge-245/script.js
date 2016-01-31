"use strict"

let key = "a GgG d GggGg e GggGG g GGGgg h GGGgG i GGGGg l GGGGG m ggg o GGg p Gggg r gG y ggG";
let message = "GGGgGGGgGGggGGgGggG /gG/GggGgGgGGGGGgGGGGGggGGggggGGGgGGGgggGGgGggggggGggGGgG!";
let key2 = "H GgG d gGg e ggG l GGg o gGG r Ggg w ggg";
let message2 = "GgGggGGGgGGggGG, ggggGGGggGGggGg!";

class KeyCreate {
    constructor(item, toDecode) {
        this.obj = {};
        this.key = item.split(' ');
    }
    createObj() {
        let y = 0;
        this.key.map((letter,x) => {
            y++;
            !(x % 2) ? this.obj[this.key[y]] = letter : '';
        });
    }
}

class Decode extends KeyCreate {
    constructor(item, toDecode) {
        super(item, toDecode);
        this.decoded = '';
        this.message = toDecode.split('');
    }
    decode() {
        super.createObj();
        let word = '';
        this.message.forEach(x => {
            if(x == 'G' || x == 'g'){
                word += x;
            }else{
                this.decoded += x;
                word = '';
            }
            Object.keys(this.obj).forEach(y => {
                if(word == y){
                    this.decoded += this.obj[y];
                    word = '';
                }
            });
        });
        console.log(this.decoded);
    }
}

let decoded = new Decode(key2, message2);
decoded.decode();
decoded = new Decode(key, message);
decoded.decode();
