class BootScene extends Phaser.Scene {
    constructor() {
        super("BootScene");
    }

    preload() {
        //tile images.
        this.load.image("layer1", "assets/map/grass-tile.png");
        this.load.image("layer2", "assets/map/tileset.png");

        //preload map in JSON.
        this.load.tilemapTiledJSON("map", "assets/map/myMap.json");

        //player spritesheet.
        this.load.spritesheet("player", "assets/spritesheets/player.png", {
            frameWidth: 48/3,
            frameHeight: 64/4
        }); 
    }

    create() {
        //craete player movement animations.
        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("player", {
                frames: [0,1,2]
            }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "up", 
            frames: this.anims.generateFrameNumbers("player", {
                frames: [3,4,5]
            }),
            frameRate: 10, 
            repeat: -1
        });

        this.anims.create({
            key: "down",
            frames: this.anims.generateFrameNumbers("player", {
                frames: [6,7,8]
            }),
            frameRate: 10,
            repeat: -1
        });

        this.scene.start("WorldScene");
    }

    update() {

    }
}