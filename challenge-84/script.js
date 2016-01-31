"use strict";

let div = document.createElement('div');
let main = document.getElementById('text');
let player = {};
let treasure = {};

document.onload = greeting();

let distance = distCalc(player.x, player.y, treasure.x, treasure.y);

document.onkeydown = (event => {
    if(event.keyCode === 13) {
        returnCommand();
    }
});

function movePlayer(x, y) {
    player.x += x;
    player.y += y;
    distance = distCalc(player.x, player.y, treasure.x, treasure.y);
}

function distCalc(px, py, tx, ty) {
    let distance = Math.sqrt(Math.pow(tx - px,2) + Math.pow(ty - py,2)).toFixed(2);
    return distance;
}

function locations() {
    player.x = Math.round(Math.random() * 10);
    player.y = Math.round(Math.random() * 10);
    treasure.x = Math.round(Math.random() * 10);
    treasure.y = Math.round(Math.random() * 10);
    let distance = distCalc(player.x, player.y, treasure.x, treasure.y);
    if(distance == 0) locations();
}

function greeting() {
    div.innerHTML = 'You find yourself in the middle of the desert. Try "look".'
    main.parentNode.insertBefore(commands, main.nextSibling);
    main.appendChild(div);
    commands.focus();
    locations();
}

function returnCommand() {
    let textArea = document.getElementById('commands');
    if(/\blook\b/gi.test(textArea.value)){
        div.innerHTML = 'You look down and are holding a strange device with numbers that read '+distance+'. In which direction will you go? N/S/E/W';
        textArea.value = '';
    }else{
        move(textArea);
        if(distance == 0){
            div.innerHTML = 'You did it! You found the treasure!';
        }
    }
}

function move(textArea) {
    switch(true) {
        case /\bnorth\b|\bn\b/gi.test(textArea.value):
            movePlayer(0, 1);
            div.innerHTML = "You went north. The device now says "+distance+". Where would you like to go? N/S/E/W";
            textArea.value = '';
            break;
        case /\bwest\b|\bw\b/gi.test(textArea.value):
            movePlayer(-1, 0);
            div.innerHTML = "You went west. The device now says "+distance+". Where would you like to go? N/S/E/W";
            textArea.value = '';
            break;
        case /\beast\b|\be\b/gi.test(textArea.value):
            movePlayer(1, 0);
            div.innerHTML = "You went east. The device now says "+distance+". Where would you like to go? N/S/E/W";
            textArea.value = '';
            break;
        case /\bsouth\b|\bs\b/gi.test(textArea.value):
            movePlayer(0, -1);
            div.innerHTML = "You went south. The device now says "+distance+". Where would you like to go? N/S/E/W";
            textArea.value = '';
            break;
        default:
            div.innerHTML = "That's not a valid move. N/S/E/W";
            textArea.value = '';
            break;
    }
}
