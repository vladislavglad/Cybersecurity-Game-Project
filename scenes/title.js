class TitleScreen extends Phaser.Scene {
    constructor() {
        super("TitleScreen");
        this.index = 0;
    }

    create() {
        this.add.image(config.width/2, config.height/2, "title-bg").setScale(1.25);
        this.titleImg = this.add.image(config.width/2, config.height/2 - 20, "title-img").setScale(1.25);
        this.titleText = this.add.image(config.width/2, config.height/2 + 80, "title-enter").setScale(1.25);
        this.titleInstr = this.add.image(config.width/2, config.height/2 , "title-instr").setScale(1.25).setVisible(false);

        //While TitleScreen is active, assets will be preloaded (background process).
        this.scene.run("PreloadAssets");

        //keyboard listener.
        this.input.keyboard.on("keydown", this.onEnter, this);
    }

    onEnter(event) {
        //console.log(event.code);
        if (event.code === "Enter" && this.index === 0) {
            this.titleImg.setVisible(false);
            this.titleInstr.setVisible(true);
            this.index = 1;
        } else if (event.code === "Enter" && isFinishedLoading && this.index === 1) {
            this.scene.switch("WorldScene");
        }
    }
}