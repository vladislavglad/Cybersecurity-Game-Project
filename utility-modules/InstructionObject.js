class InstructionObject extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, texture, ID, completed = false) {
        super(scene, x, y, texture);
        this.ID = ID;
        this.completed = completed;

        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this);
    }
}