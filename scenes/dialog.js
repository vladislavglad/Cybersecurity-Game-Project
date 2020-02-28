class DialogScene extends Phaser.Scene {
    constructor() {
        super("DialogScene");

        //index to check the flow of a dialog.
        this.dialogIndex = 0;

        //Next phrases to display (after user presses "Space" bar)
        //Will be refactored later; for now jsut checking that the idea works.
        this.dialogPhrases = ["Hello travaler, I will teach you", "some decription techniques!", " ", '(Press "Space" To Continue)'];
        this.dialogPhrases2 = ["Another dialog,", "Some words, Just checking!" ," ", '(Press "Space" To Continue)'];
        this.dialogPhrases3 = ["Another check", " ", " ", '(Press "Space" To Exit)'];
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
        this.dialogContainer = this.add.container();

        //Our custom container. 
        //(Needs to be added to this Scene's actual container -> dialogContainer)
        this.dialogMenu = new DialogMenu(this, 10, 155);
                                     
        //Load and remap phrases into Menu class.
        this.dialogMenu.remap(this.dialogPhrases);
        
        //Highlight n-th item in the Menu.
        this.dialogMenu.select(3);

        //IMPORTANT: add to this Scene's container to display on screen.
        this.dialogContainer.add(this.dialogMenu);

        //add image of the npc.
        this.npcImage = this.add.image(55, 87, "npc_dialog");
        this.npcImage.setScale(0.5);
        this.npcImage.flipX = true;

        //listen to an input.
        this.input.keyboard.on("keydown", this.onSpaceKey, this);

        //this.time.addEvent({delay: 3000, callback: this.exitScene, callbackScope: this});
    }

    onSpaceKey(event) {
        if (event.code === "Space") {
            if (this.dialogIndex === 0) {
                this.dialogMenu.remap(this.dialogPhrases2);
                this.dialogMenu.select(3);
                this.dialogIndex++;
            } else if (this.dialogIndex === 1) {
                this.dialogMenu.remap(this.dialogPhrases3);
                this.dialogMenu.select(3);
                this.dialogIndex++;
            } else if (this.dialogIndex === 2) {
                this.exitScene();
            }
        }
    }

    exitScene() {
        this.scene.switch("WorldScene");
    }
}