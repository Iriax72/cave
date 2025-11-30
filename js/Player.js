export class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, pos) {
        super(scene, pos[0], pos[1], "player-idle-1");

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setOrigin(0.5, 0.5);
        this.setScale(0.4);
        this.body.setSize(this.width, this.height, true);

        //this.setCollideWorldBounds(true);
        //this.setBounce(0.1);
        alert(this)
    }
}