"use strict"

let key = "a GgG d GggGg e GggGG g GGGgg h GGGgG i GGGGg l GGGGG m ggg o GGg p Gggg r gG y ggG"
let message = "GGGgGGGgGGggGGgGggG /gG/GggGgGgGGGGGgGGGGGggGGggggGGGgGGGgggGGgGggggggGggGGgG!"

class Decode {
    constructor() {
        this.map = new Map();
    }
    createObj(key) {
        let y = 0;
        key = key.split(' ');
        key.map((letter,x) => {
            y++;
            !(x % 2) ? this.map[key[y]] = letter : '';
        });
        console.log(this.map);
    }
}

let decoded = new Decode(key);
decoded.createObj(key);
