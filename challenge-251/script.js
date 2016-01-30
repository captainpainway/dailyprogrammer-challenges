"use strict";

let shape ='    *\n   **\n  * *\n *  *\n*****';
let shape2 ='    ** *  \n   *****  \n  ******  \n ******** \n**********\n *      * \n * ** * * \n * ** * * \n * **   * \n ******** ';

class Shape {
    constructor(item) {
        this.split = item.split('\n');
        this.numbers = [];
        this.lineLength;
    }
    binary() {
        this.lineLength = this.split.length;
        for(let x = 0; x < this.lineLength; x++){
            this.numbers.push([]);
        }
        this.split.forEach((i,r) => {
            for(let j of i){
                (j === '*')?this.numbers[r].push(1):this.numbers[r].push(0);
            }
        });
    }
}

class Rows extends Shape {
    constructor(item) {
        super(item);
        this.rows = [];
        this.leftSide = '';
    }
    counted() {
        super.binary();
        this.numbers.forEach((arr,row) => {
            for(let x = 0; x < this.lineLength; x++){
                if(this.numbers[row][x] === 0){
                    this.numbers[row][x] = '';
                }else{
                    if(this.numbers[row][x] > 0 && this.numbers[row][x+1] == 1){
                        this.numbers[row][x+1] = this.numbers[row][x+1] + this.numbers[row][x];
                        this.numbers[row][x] = '';
                    }
                }
                this.rows[x] = this.numbers[x].join('');
            };
            this.leftSide = this.rows.join('' + '\n');
        });
    }
    log() {
        this.counted();
        console.log(this.leftSide);
    }
}

class Columns extends Shape {
    constructor(item) {
        super(item);
        this.columns = [];
        this.topSide = '';
    }
    counted() {
        super.binary();
        let x = 0;
        let next = '';
        while(x < this.lineLength) {
            this.numbers.forEach((arr, column) => {
                next = this.numbers[column+1];
                if(this.numbers[column][x] === 0){
                    this.numbers[column][x] = ' ';
                }else{
                    if(this.numbers[column][x] > 0 && next != undefined && next[x] == 1){
                        next[x] = next[x] + this.numbers[column][x];
                        this.numbers[column][x] = ' ';
                    }
                }
                this.columns[column] = this.numbers[column].join('');
            });
            x++;
            this.topSide = this.columns.join('\n');
        }
    }
    log() {
        this.counted();
        console.log(this.topSide);
    }
}

let rowCalc = new Rows(shape);
rowCalc.log();
let columnCalc = new Columns(shape);
columnCalc.log();

let rowCalc2 = new Rows(shape2);
rowCalc2.log();
let columnCalc2 = new Columns(shape2);
columnCalc2.log();
