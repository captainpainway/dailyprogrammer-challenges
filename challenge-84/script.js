"use strict";

let div = document.createElement('div');
let main = document.getElementById('text');
let distance = locations();

document.onload = greeting();

function locations() {
    let player = {};
    let treasure = {};
    player.x = Math.round(Math.random() * 100);
    player.y = Math.round(Math.random() * 100);
    treasure.x = Math.round(Math.random() * 100);
    treasure.y = Math.round(Math.random() * 100);
    let distance = Math.round(Math.sqrt(Math.pow(treasure.x - player.x,2) + Math.pow(treasure.y - player.y,2)));
    console.log(player);
    console.log(treasure);
    console.log(distance);
    return distance; 
}

function input() {
    let commands = document.createElement('input');
    commands.setAttribute('id', 'commands');
    commands.setAttribute('type', 'text');
    commands.setAttribute('onKeyUp', 'returnCommand()');
    return commands;
}

function greeting() {
    let commands = input();
    let greet = document.createTextNode('You find yourself in the middle of the desert. Try "look".');
    div.appendChild(greet);
    main.parentNode.insertBefore(commands, main.nextSibling);
    main.appendChild(div);
}

function returnCommand() {
    let textArea = document.getElementById('commands');
    if(textArea.value == 'look'){
        div.innerHTML = 'You look down and are holding a strange device with numbers that read '+distance+'. In which direction will you go? N/S/E/W';
        textArea.value = '';
    }
}

