class TitleScreen extends Phaser.Scene {
    constructor() {
        super("TitleScreen");
    }

    create() {
        this.add.image(config.width/2, config.height/2, "title-bg").setScale(1.25);

        this.add.text(20,20, "Hello");

        this.add.text(config.width/4 + 20, config.height/2, "Press Enter");
        this.input.keyboard.on("keydown", this.onEnter, this);

        //While TitleScreen is active, assets will be preloaded (background process).
        this.scene.run("PreloadAssets");
    }

    onEnter(event) {
        console.log(event.code);
        if (event.code === "Enter" && isFinishedLoading) {
            this.scene.switch("WorldScene");
        }
    }
}