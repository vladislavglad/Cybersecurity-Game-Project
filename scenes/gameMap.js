class GameMap extends Phaser.Scene {
    constructor() {
        super("GameMap");
    }

    create() {
        this.worldMap = this.add.image(config.width/2, config.height/2 + 10, "game-map");

        //Different "contamination" levels of security. 
        this.worldMap.setTintFill("0xff4d4d", "0xff6666", "0xff8080", "0xff9999");
    }
}