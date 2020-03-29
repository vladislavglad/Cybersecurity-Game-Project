class PhishingHints extends Phaser.Scene {
    constructor() {
        super("PhishingHints");
    }

    create() {
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(2, 217, 315, 20);
        this.graphics.fillRect(2, 217, 315, 20);
        this.graphics.setVisible(false);

        this.hint1 = this.add.text(config.width/4, config.height - 20, 'Press "P" to Phish.', {color: "yellow"}).setVisible(false);
        this.hint2 = this.add.text(15, config.height - 20, "You need PhishingRod to Phish!").setVisible(false);

        this.scene.get("WorldScene").events.on("startPhishing", () => {
            this.graphics.setVisible(true);
            if (hasPhishingRod) {
                this.hint1.setVisible(true);
            } else {
                this.hint2.setVisible(true);
            }
        }, this);

        this.input.keyboard.on("keydown", key => {
            if (key.code === "KeyP" && hasPhishingRod) {
                this.scene.get("PlayerUI").scene.sleep();
                this.scene.get("WorldScene").scene.switch("GameModule");
            }
        }, this);
    }

    update() {
        this.hint1.setVisible(false);
        this.hint2.setVisible(false);
        this.graphics.setVisible(false);
    }
}

class GameModule extends Phaser.Scene {
    constructor() {
        super("GameModule");
    }

    create() {
        this.add.text(20, config.height/2, "Game Module Placeholder.");

        //Exit placeholder.
        this.time.addEvent({delay: 2000, repeat: true, callback: () => {
            this.scene.switch("WorldScene");
        }, callbackScope: this});
    }
}