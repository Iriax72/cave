import Phaser from "https://cdn.jsdelivr.net/npm/phaser@3/dist/phaser.esm.js";
//import {Player} from "./js/Playerjs";

alert("begining of main.js");

const config = {
    type: Phaser.AUTO,
    width: 100,
    height: 100,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: ""
};

const game = new Phaser.Game(config);

function preload() {

}

function create() {
    const player = new Player();
}

function update() {

}