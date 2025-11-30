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

function preload() {
    this.load.spritesheet(
        'playerSprite', 
        './assets/images/player-sprite.png', 
        {
            frameWidth: 24,
            franeHeight: 19
        }
    );
}
    

function create() {
    const player = new Player(this, [300, 300]);
}

function update() {

}