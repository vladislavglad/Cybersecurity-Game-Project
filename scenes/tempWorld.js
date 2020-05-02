class TempWorld extends Phaser.Scene {
    constructor() {
        super("TempWorld");
    }

    create() {
        this.createWorld();
        this.events.on("wake", this.onWake, this);

        //TODO: Implement logic and place points of interest on the map...
    }

    createWorld() {
        //Testing concept.
        this.add.image(config.width/2, config.height/2, "temp-map").setScale(0.66);
        this.player = this.physics.add.sprite(40, config.height - 40, "player", 4);
        this.movementManager = new MovementManager(this);

        this.physics.world.bounds.width = config.width;
        this.physics.world.bounds.height = config.height;
        this.player.setCollideWorldBounds(true);

        this.exitZone = this.add.zone(config.width/2, config.height - 10, 330, 10).setOrigin(0.5, 0.5);
        this.physics.world.enableBody(this.exitZone);

        this.physics.add.overlap(this.player, this.exitZone, () => {
            this.events.emit("exitZone");
            this.scene.switch("WorldScene");
            this.scene.stop("TempWorld");
        }, null, this);

    }

    onWake() {
        this.movementManager.resetCursors();
        //this.createWorld();
    }

    update() {
        this.movementManager.playerMovementManager();
    }
}