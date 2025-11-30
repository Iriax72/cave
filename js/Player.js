export class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, pos) {
        super(scene, pos[0], pos[1], "playerSprite");

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setFrame(2);

        //this.setCollideWorldBounds(true);
        //this.setBounce(0.1);
    }
}