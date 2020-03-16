class InitialBoot extends Phaser.Scene {
    constructor() {
        super("InitialBoot");
    }

    preload() {
        //preload title-screen resources.
        this.load.image("loading", "assets/images/loading.png");
        this.load.image("title-bg", "assets/images/title-screen-bg.png");
        this.load.image("title-img", "assets/images/title-screen.png");
        this.load.image("title-enter", "assets/images/press-enter-text.png");
        this.load.image("title-instr", "assets/images/instructions.png");
    }

    create() {
        this.scene.start("TitleScreen");
    }
}