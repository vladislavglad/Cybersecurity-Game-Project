class PauseScene extends Phaser.Scene {
    constructor() {
        super("PauseScene");
    }

    create() {
        this.add.text(config.width/3, config.height/6, "Paused", {
            font: "25px Arial",
            fill: "Black"
        });

        //Add resume, options, quit to title screen.
        this.add.image(config.width/3 - 7, config.height/4 + 15, "pause-button").setScale(0.5).setOrigin(0,0).setTintFill("0x9e9b8a").setInteractive();
        this.add.image(config.width/3 - 7, config.height/2, "pause-button").setScale(0.5).setOrigin(0,0).setTintFill("0x9e9b8a").setInteractive();
        this.add.image(config.width/3 - 7, config.height/2 + 45, "pause-button").setScale(0.5).setOrigin(0,0).setTintFill("0x9e9b8a").setInteractive();

        this.add.text(config.width/3 - 7 + 4, config.height/4 + 15, "Resume", {
            font: "25px Arial",
            fill: "Black"
        });

        this.add.text(config.width/3 - 7 + 5, config.height/2, "Options", {
            font: "25px Arial",
            fill: "Black"
        });

        this.add.text(config.width/3 - 7 + 25, config.height/2 + 45, "Quit", {
            font: "25px Arial",
            fill: "Black"
        });

        //UI events
        this.input.on("gameobjectdown", this.onResumeButton, this);
        this.input.on("gameobjectmove", this.onMoveOver, this);
        this.input.on("gameobjectout", this.onMoveOut, this);
    }

    onResumeButton() {
        this.scene.switch("PlayerUI");
    }

    onMoveOver(pointer, object) {
        object.setTintFill("0xcfb319");
    }

    onMoveOut(pointer, object) {
        object.setTintFill("0x9e9b8a");
    }
}