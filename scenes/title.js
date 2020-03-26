class TitleScreen extends Phaser.Scene {
    constructor() {
        super("TitleScreen");

        //Flag value for internal state.
        this.index = 0;
    }

    create() {
        //While TitleScreen is active, assets will be preloaded (background process).
        this.scene.run("PreloadAssets");

        this.add.image(config.width/2, config.height/2, "title-bg").setScale(1.25);
        this.titleImg = this.add.image(config.width/2, -80, "title-img").setScale(1.25);
        this.titleText = this.add.image(config.width/2, config.height/2 + 80, "title-enter").setScale(1.25);        
        this.titleInstr = this.add.image(config.width/2, -80 , "title-instr").setScale(1.25).setVisible(false);

        //Animation to bring title Image.
        this.tweens.add({
            targets: this.titleImg,
            y: config.height/2 - 20,
            ease: "Power1",
            duration: 1200,
            callbackScope: this,
            onComplete: this.animate
        });

        //Blinking "press enter" text.
        this.time.addEvent({
            delay: 800,
            loop: true,
            callback: () => {
                if (this.titleText.alpha) {
                    this.titleText.alpha = 0;
                } else {
                    this.titleText.alpha = 1;
                }
            },
            callbackScope: this            
        });

        //keyboard listener.
        this.input.keyboard.on("keydown", this.onPressEnter, this);
    }

    onPressEnter(event) {
        //console.log(event.code);
        if (event.code === "Enter" && this.index === 0) {
            this.titleImg.setVisible(false);
            this.titleInstr.setVisible(true);
            this.tweens.add({
                targets: this.titleInstr,
                y: config.height/2,
                ease: "Power1",
                duration: 1200,
                callbackScope: this
            });
            this.index = 1;
        } else if (event.code === "Enter" && isFinishedLoading && this.index === 1) {
            this.scene.switch("WorldScene");
            this.titleInstr.setVisible(false);
            this.titleImg.setVisible(true);
            this.index = 0;
        }
    }

    animate() {
        return;
    }
}