class EnemyObject extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame, moduleID, defeated = false) {
        super(scene, x, y, texture, frame);

        //ID to differentiate enemy -> each represent a game module.
        this.moduleID = moduleID;
        this.defeated = defeated;
        
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this);
    }
}