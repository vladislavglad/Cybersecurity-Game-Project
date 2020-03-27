class GameMap extends Phaser.Scene {
    constructor() {
        super("GameMap");
    }

    create() {
        //this.add.text(config.height/2, config.width/2, "Hello from GameMap");
        this.add.image(config.width/2, config.height/2 + 10, "game-map");
    }
}