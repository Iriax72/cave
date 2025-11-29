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
    this.load.image('player-idle-1', './assets/images/player-idle-1.png');
    this.load.image('player-idle-2', './assets/images/player-idle-2.png');
    this.load.image('player-right-1', './assets/images/player-right-1.png');
    this.load.image('player-right-2', './assets/images/player-right-2.png');
    this.load.image('player-left-1', './assets/images/player-left-1.png');
    this.load.image('player-left-2', './assets/imaged/player-left-2.png');
}

function create() {
    const player = new Player(this, [300, 300]);
}

function update() {

}