class PhishingHints extends Phaser.Scene {
    constructor() {
        super("PhishingHints");
    }

    create() {
        this.hint1 = this.add.text(config.width/4, config.height - 20, "Press P to Phish.").setVisible(false);
        this.hint2 = this.add.text(15, config.height - 20, "You need PhishingRod to Phish!").setVisible(false);

        this.scene.get("WorldScene").events.on("startPhishing", () => {
            if (hasPhishingRod) 
                this.hint1.setVisible(true);
            else
                this.hint2.setVisible(true);

        }, this);

        this.input.keyboard.on("keydown", key => {
            if (key.code === "KeyP" && hasPhishingRod) {
                this.scene.get("PlayerUI").scene.sleep();
                this.scene.get("WorldScene").scene.switch("PhishingModule");
            }
        }, this);
    }

    update() {
        this.hint1.setVisible(false);
        this.hint2.setVisible(false);
    }
}

class PhishingModule extends Phaser.Scene {
    constructor() {
        super("PhishingModule");
    }

    create() {
        this.add.text(20, config.height/2, "Phishing Module Placeholder.");
    }
}