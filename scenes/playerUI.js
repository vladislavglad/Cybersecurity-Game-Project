class PlayerUI extends Phaser.Scene {
    constructor() {
        super("PlayerUI");
        this.index = 0;
    }

    create() {
        //hard coded; should be grouped later.
        this.add.sprite(20, 20, "hp-hearts" , 0).setScale(0.06);
        this.add.sprite(40, 20, "hp-hearts" , 0).setScale(0.06);
        this.heart = this.add.sprite(60, 20, "hp-hearts" , 1).setScale(0.06);

        this.toggleButton = this.add.image(config.width-23 , 5, "pause-toggle").setOrigin(0,0).setScale(0.2);
        this.toggleButton.setTintFill("0x9e9b8a");
        this.toggleButton.setInteractive();
        this.input.on("gameobjectdown", this.onClick, this);
        this.input.on("gameobjectmove", this.onMoveOver, this);
        this.input.on("gameobjectout", this.onMoveOut, this);

        this.add.image(config.width-25.8 , 3, "pause-icon").setOrigin(0,0).setScale(0.14).setTintFill("0x6b6964");

        this.worldScene = this.scene.get("WorldScene");

        //testing spritesheet change.
        this.time.addEvent({delay: 2000, loop: true, callback: this.changeHeart, callbackScope: this});

        //this.events.on("wake", this.onWake, this);
    }

    onClick() {
        console.log("Button clicked");

        if (this.index === 0) {
            //this.worldScene.scene.sleep("PlayerUI");
            this.worldScene.scene.stop("PlayerUI");
            this.worldScene.scene.run("PauseScene");
            this.index = 1;
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
        this.heart.setTexture("hp-hearts", Phaser.Math.Between(0,1));
    }

    onWake() {
        
    }
}