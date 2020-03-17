class TempWorld extends Phaser.Scene {
    constructor() {
        super("TempWorld");
    }

    create() {
        //Testing concept.
        this.add.image(config.width/2, config.height/2, "temp-map").setScale(0.66);
        this.player = this.physics.add.sprite(40, config.height - 30, "player", 7);

        //TODO: Implement logic and place points of interest below...
    }
}