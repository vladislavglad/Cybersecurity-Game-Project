class BootScene extends Phaser.Scene { 
    constructor() {
        super("BootScene");
    }

    preload() {
        //tile images.
        this.load.image("layer1", "assets/map/grass-tile.png");
        this.load.image("layer2", "assets/map/tileset.png");
        
        this.load.image("sky", "assets/sky.png");
        this.load.image("npc_dialog", "assets/mage-dialog.png");
        this.load.image("book", "assets/book.png");

        //preload map in JSON.
        this.load.tilemapTiledJSON("map", "assets/map/myMap.json");

        //player spritesheet.
        this.load.spritesheet("player", "assets/spritesheets/player.png", {
            frameWidth: 48/3,
            frameHeight: 64/4
        }); 

        this.load.spritesheet("npc", "assets/spritesheets/npc.png", {
            frameWidth: 48/3,
            frameHeight: 64/4
        });

        this.load.spritesheet("baddie", "assets/spritesheets/baddie.png", {
            frameWidth: 64/4,
            frameHeight: 16
        });

        this.load.spritesheet("npc_mage", "assets/spritesheets/mage.png", {
            frameWidth: 164/8.3,
            frameHeight: 134/8.3
        });

        this.load.image("space", "assets/space3.png");

        this.load.spritesheet("beam", "assets/spritesheets/beam.png", {
            frameWidth: 16,
            frameHeight: 16
        });

        //loading audio.
        this.load.audio("heroic_music", "assets/audio/heroism.ogg");
    }

    create() {
        this.add.text(20, 20, "Loading...");
        
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

        this.anims.create({
            key: "idle_mage",
            frames: this.anims.generateFrameNumbers("npc_mage", {
                frames: [9, 10, 11, 12]
            }),
            frameRate: 3,
            repeat: -1
        });
        
        this.anims.create({
            key: "beam_anim",
            frames: this.anims.generateFrameNumbers("beam"),
            frameRate: 20,
            repeat: -1
        });

        //transition to the WorldScene.
        this.scene.start("WorldScene");
    }
}