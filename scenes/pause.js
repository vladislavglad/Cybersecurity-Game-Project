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
        this.resumeBtn = this.add.image(config.width/3 - 7, config.height/4 + 15, "pause-button").setScale(0.5).setOrigin(0,0).setTintFill("0x9e9b8a");
        this.optionsBtn = this.add.image(config.width/3 - 7, config.height/2, "pause-button").setScale(0.5).setOrigin(0,0).setTintFill("0x9e9b8a");
        this.quitBtn = this.add.image(config.width/3 - 7, config.height/2 + 45, "pause-button").setScale(0.5).setOrigin(0,0).setTintFill("0x9e9b8a");

        this.resumeBtn.setInteractive().on("pointerdown", this.onResumeButton, this);
        this.optionsBtn.setInteractive().on("pointerdown", this.onOptionsButton, this);
        this.quitBtn.setInteractive().on("pointerdown", this.onQuitButton, this);

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

        //UI events (to highlight buttons).
        this.input.on("gameobjectmove", this.onMoveOver, this);
        this.input.on("gameobjectout", this.onMoveOut, this);

        this.worldScene = this.scene.get("WorldScene");
    }

    onResumeButton() {
        //Resume the game.
        isGamePaused = false;
        this.scene.switch("PlayerUI");
    }

    //TODO: implement this.
    onOptionsButton() {
        return;
    }

    onQuitButton() {
        this.scene.sleep();
        this.worldScene.scene.switch("TitleScreen");
    }

    onWake() {
        
    }

    onMoveOver(pointer, object) {
        object.setTintFill("0xcfb319");
    }

    onMoveOut(pointer, object) {
        object.setTintFill("0x9e9b8a");
    }
}