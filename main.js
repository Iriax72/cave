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
    physics: {default: "arcade"}
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image('playerImg', './assets/robot.png')
}

function create() {
    const player = new Player(this, [300, 300]);
}

function update() {

}