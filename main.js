import {Player} from "./js/Player.js";

const gameContainer = document.querySelector("#game-container");

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: gameContainer,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {default: "arcade"}
};

const game = new Phaser.Game(config);
alert("1")
function preload() {
    alert("2")
    //game.stage.backgroundColor = '#2802b2';
    this.load.image('player-idle-1', './assets/images/player-idle-1.png');
    this.load.image('player-idle-2', './assets/images/player-idle-2.png');
    this.load.image('player-right-1', './assets/images/player-right-1.png');
    this.load.image('player-right-2', './assets/images/player-right-2.png');
    this.load.image('player-left-1', './assets/images/player-left-1.png');
    this.load.image('player-left-2', './assets/imaged/player-left-2.png');
}

function create() {
    alert("3")
    const player = new Player(this, [300, 300]);
}

function update() {

}