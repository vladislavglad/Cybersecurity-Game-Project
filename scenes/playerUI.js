class PlayerUI extends Phaser.Scene {
    constructor() {
        super("PlayerUI");

        //Flag value for internal state.
        this.index = 0;
    }

    create() {
        //Hard coded; should be grouped later.
        let heart0 = this.add.sprite(20, 20, "hp-hearts" , 0).setScale(0.06);
        let heart1 = this.add.sprite(40, 20, "hp-hearts" , 0).setScale(0.06);
        let heart2 = this.add.sprite(60, 20, "hp-hearts" , 0).setScale(0.06);
        this.hearts = [heart0, heart1, heart2];

        //Pause button contents.
        this.toggleButton = this.add.image(config.width-23 , 5, "pause-toggle").setOrigin(0,0).setScale(0.2).setTintFill("0x9e9b8a");
        this.add.image(config.width-25.8 , 3, "pause-icon").setOrigin(0,0).setScale(0.14).setTintFill("0x6b6964");

        //Interactions with toggleButton.
        this.toggleButton.setInteractive();
        this.input.on("gameobjectdown", this.onClick, this);
        this.input.on("gameobjectmove", this.onMoveOver, this);
        this.input.on("gameobjectout", this.onMoveOut, this);

        //Testing spritesheet change.
        this.time.addEvent({delay: 1000, loop: true, callback: this.changeHeart, callbackScope: this});

        //Listen for "Escape" key to bring pause menu.
        this.input.keyboard.on("keydown", key => {if (key.code === "Escape" && !isGamePaused) this.onClick();}, this);

        this.worldScene = this.scene.get("WorldScene");
        //this.events.on("wake", this.onWake, this);
    }

    onClick() {
        //console.log("Button clicked");
     
        //WorldScene is listening (to stop player's animation).
        this.events.emit("pauseGame");
        isGamePaused = true;

        if (this.index === 0) {
            //this.worldScene.scene.sleep("PlayerUI");
            this.worldScene.scene.stop("PlayerUI");
            this.worldScene.scene.run("PauseScene");
            //this.index = 1;
        } else if (this.index === 1) {
            this.worldScene.scene.sleep("PauseScene");
            this.worldScene.scene.resume("PlayerUI");
            this.index = 0;
        }
    }

    onMoveOver(pointer,  object) {
        object.setTintFill("0xcfb319");
    }

    onMoveOut(pointer, object) {
        object.setTintFill("0x9e9b8a");
    }

    changeHeart() {
        if (heartsCounter === 3) {
        this.hearts.forEach(heart => {
                heart.setTexture("hp-hearts", 0);
            });
        } else if (heartsCounter >= 0)
            this.hearts[heartsCounter].setTexture("hp-hearts", 1);
    }

    onWake() {
        
    }
}