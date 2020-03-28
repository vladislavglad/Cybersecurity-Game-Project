class PreloadAssets extends Phaser.Scene { 
    constructor() {
        super("PreloadAssets");
    }

    preload() {
        //tile images.
        this.load.image("layer1", "assets/map/grass-tile.png");
        this.load.image("layer2", "assets/map/tileset.png");
        
        this.load.image("space", "assets/images/space3.png");
        this.load.image("sky", "assets/images/sky.png");
        this.load.image("npc_dialog", "assets/images/mage-dialog.png");
        this.load.image("book", "assets/images/book.png");

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

        this.load.spritesheet("beam", "assets/spritesheets/beam.png", {
            frameWidth: 16,
            frameHeight: 16
        });

        //loading audio.
        this.load.audio("peaceful-music", "assets/audio/ancient-path.ogg");
        //this.load.audio("heroic-music", "assets/audio/heroism.ogg");

        this.load.html("inputform", "assets/text/inputform.html");

        //player UI assets.
        this.load.spritesheet("hp-hearts", "assets/spritesheets/hp-hearts.png", {
            frameWidth: 455/2,
            frameHeight: 265
        });

        this.load.image("pause-toggle", "assets/ui/toggles/1.png");
        this.load.image("pause-icon", "assets/ui/icons/pause-icon.png");
        this.load.image("pause-button", "assets/ui/buttons/set2/1.png");

        this.load.image("temp-map", "assets/map/temp-map.png");
        this.load.image("game-map", "assets/images/game-map.png");

        this.load.image("phishing-rod", "assets/images/phishing-rod.png");
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

        //Indicate that everything has been loaded into memory.
        isFinishedLoading = true;
        this.scene.stop("PreloadAssets");
    }
}