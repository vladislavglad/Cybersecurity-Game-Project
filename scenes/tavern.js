class TavernInside extends Phaser.Scene {
    constructor() {
        super("TavernInside");
    }

    create() {
        this.createWorld();
        this.events.on("wake", this.onWake, this);
    }

    createWorld() {
        this.add.image(config.width/2, config.height/2, "title-bg").setScale(1.25);

        //Tile map configuration.
        let map = this.make.tilemap({key: "tavern"});
        map.addTilesetImage("tileset", "layer1");
        let tileset = map.addTilesetImage("tileset", "layer2");
        map.createStaticLayer("layer1", tileset, 40, 0);
        let walls = map.createStaticLayer("layer2", tileset, 40, 0);
        walls.setCollisionByExclusion([-1]);

        this.player = this.physics.add.sprite(config.width/2, config.height - 40, "player", 4);
        this.movementManager = new MovementManager(this);
        this.physics.add.collider(this.player, walls);

        //Npc setup.
        this.physics.add.staticSprite(64, 157, "npc", 10).flipX = true;
        this.physics.add.staticSprite(96, 157, "npc", 7);
        this.physics.add.staticSprite(256, 160, "npc", 4);

        this.bartender = this.physics.add.sprite(config.width/2, 56, "npc", 0);
        this.bartender.setSize(300, 90);
        this.talks = this.add.text(this.bartender.getCenter().x, this.bartender.getTopCenter().y - 10, "Hello, Travaler!", {font: "12px"});
        this.talks.setOrigin(0.5, 0.5).setVisible(false);
        this.physics.add.overlap(this.player, this.bartender, () => {
            this.talks.setVisible(true);
            this.time.addEvent({
                delay: 2000,
                callback: () => {
                    this.talks.setText("What can I get you?");
                    this.delayedHideText(this.talks);
                }, 
                callbackScope: this});
            }, null, this);

        this.exitZone = this.add.zone(config.width/2, config.height - 10, config.width, 10).setOrigin(0.5, 0.5);
        this.physics.world.enableBody(this.exitZone);

        this.physics.add.overlap(this.player, this.exitZone, () => {
            this.events.emit("exitZone");
            this.scene.switch("WorldScene");
            this.scene.stop("TavernInside");
        }, null, this);
        
        this.input.keyboard.on("keydown", this.getPlayerCoordinates, this);
    }

    delayedHideText(text) {
        this.time.addEvent({delay: 2000, callback: () => {text.setVisible(false);}, callbackScope: this});
    }

    getPlayerCoordinates() {
        let center = this.player.getCenter();
        console.log("x: " + Math.round(center.x) + " y: " + Math.round(center.y));
    }

    onWake() {
        this.movementManager.resetCursors();
        //this.createWorld();
    }

    update() {
        this.movementManager.playerMovementManager();
    }
}