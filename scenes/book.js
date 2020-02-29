class BookInteraction extends Phaser.Scene {
    constructor() {
        super("BookInteraction");
    }

    create() {
        this.add.text(20,20, "Decryption module:");
        this.add.text(20, config.height/3, "Some text describing the task.");

        //An input box should be provided to read users response and evaluate it.
        //(Still need to learn how to do that).

        this.add.text(20, config.height-20, 'Press "Space" to exit...')
        this.input.keyboard.on("keydown", this.onKey, this);
    }

    onKey(event) {
        if (event.code === "Space") {
            this.scene.switch("WorldScene");
        }
    }
}