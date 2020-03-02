class BookInteraction extends Phaser.Scene {
    constructor() {
        super("BookInteraction");
    }

    create() {
        //add a background image.
        this.add.image(config.width/2, config.height/2, "book-bg").setScale(1.25);

        this.add.text(20,20, "Decryption module:");
        this.add.text(20, config.height/3, "Some text describing the task.");

        //this.element = this.add.dom(config.width/2, config.height/2, "input", "width: 220px; height: 30px; font: 32px Arial");

        this.element = this.add.dom(config.width/2, config.height/2).createFromCache("inputform");
        this.element.setScale(.5);

        this.element.addListener("keydown");
        this.element.on("keydown", this.enterText, this);

        //this.input.keyboard.on("keydown", this.onKey, this);
        this.add.text(20, config.height-20, 'Press "Esc" to exit...')
    }

    onKey(event) {
        //console.log(event.code);
        if (event.code === "Escape") {
            this.scene.switch("WorldScene");
        }
    }

    enterText(event) {
        //console.log(event.code);
        if (event.code === "Enter") {
            let inputText = this.element.getChildByName("inputField").value;
            
            if (inputText !== "") {
                console.log(inputText);
                
                if (inputText.toLowerCase() === "hello") {
                    //logic to check response goes here.
                    //this.element.removeListener("keydown");
                    //this.element.setVisible(false);
                    this.scene.switch("WorldScene");
                } else {
                    this.add.text(80, config.height - 90, "Please try again!");
                } 
            }

        } else if (event.code === "Escape") {
            this.scene.switch("WorldScene");
        }
    }
}