class DialogScene extends Phaser.Scene {
    constructor() {
        super("DialogScene");
    }

    create() {
        this.add.image(0,0, "sky");

        //Draw rectangle and color it.
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);
        this.graphics.strokeRect(2, 150, 317, 300);
        this.graphics.fillRect(2, 150, 317, 300);

        //Scene level container.
        this.container = this.add.container();
        this.dialogMenu = new DialogMenu(this, 10, 155);
                                                            //placeholder.
        let dialogPhrases = ["Bla-Blaa-Blad,", "Something Else!", "", "(Press Space To Continue)"];
        this.dialogMenu.remap(dialogPhrases); //load and remap phrases into Menu class.

        //add to this Scene's container to display on screen.
        this.container.add(this.dialogMenu);

        //highlight n-th item in the Menu.
        this.dialogMenu.select(3);

        //add npc.
        this.npc = this.add.image(55, 87, "npc_dialog");
        this.npc.setScale(-0.5);
        this.npc.flipY = true;

        //listen to input.
        this.input.keyboard.on("keydown", this.onSpaceKey, this);
    }

    onSpaceKey(event) {
        if (event.code === "Space") {
            this.scene.setVisible(false);
            this.scene.pause();
            this.scene.start("WorldScene");
        }
    }
}