export class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, pos) {
        super(scene, pos[0], pos[1], "playerImg");

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBorder(true);
        this.setBounce(0.1);
    }
}