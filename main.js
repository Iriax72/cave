import {Player} from "./js/Player.js";

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
    this.load.image('playerImage', './assets/robot.png')
}

function create() {
    const player = new Player();
}

function update() {

}