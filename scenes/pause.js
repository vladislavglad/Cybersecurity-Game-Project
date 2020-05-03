class PauseScene extends Phaser.Scene {
    constructor() {
        super("PauseScene");
    }

    create() {
        this.pauseTextTitle = this.add.text(config.width/3, config.height/6, "Paused", {
            font: "25px Arial",
            fill: "Black"
        });

        this.optionsTextTitle = this.add.text(config.width/3, config.height/6, "Options", {
            font: "25px Arial",
            fill: "Black"
        }).setVisible(false);

        //Add resume, options, quit to title screen.
        this.resumeBtn = this.add.image(config.width/3 - 7, config.height/4 + 15, "pause-button").setScale(0.5).setOrigin(0,0).setTintFill("0x9e9b8a");
        this.optionsBtn = this.add.image(config.width/3 - 7, config.height/2, "pause-button").setScale(0.5).setOrigin(0,0).setTintFill("0x9e9b8a");
        this.quitBtn = this.add.image(config.width/3 - 7, config.height/2 + 45, "pause-button").setScale(0.5).setOrigin(0,0).setTintFill("0x9e9b8a");

        this.resumeBtn.setInteractive().on("pointerdown", this.onResumeButton, this);
        this.optionsBtn.setInteractive().on("pointerdown", this.onOptionsButton, this);
        this.quitBtn.setInteractive().on("pointerdown", this.onQuitButton, this);

        this.resumeBtnTxt = this.add.text(config.width/3 - 7 + 4, config.height/4 + 15, "Resume", {
            font: "25px Arial",
            fill: "Black"
        });

        this.optionsBtnTxt = this.add.text(config.width/3 - 7 + 5, config.height/2, "Options", {
            font: "25px Arial",
            fill: "Black"
        });

        this.quitBtnTxt = this.add.text(config.width/3 - 7 + 25, config.height/2 + 45, "Quit", {
            font: "25px Arial",
            fill: "Black"
        });

        //first collection of UI elements.
        this.elmentsArr = [this.resumeBtn, this.optionsBtn, this.quitBtn, this.resumeBtnTxt, this.optionsBtnTxt, this.quitBtnTxt];

        //UI events (to highlight buttons).
        this.input.on("gameobjectmove", this.onMoveOver, this);
        this.input.on("gameobjectout", this.onMoveOut, this);

        //Listen for "Escape" key to close pause menu.
        this.input.keyboard.on("keydown", key => {if (key.code === "Escape" && isGamePaused) this.onResumeButton();}, this);
    }

    onResumeButton() {
        //Resume the game.
        isGamePaused = false;
        this.scene.switch("PlayerUI");
    }

    //TODO: implement this.
    onOptionsButton() {
        this.pauseTextTitle.setVisible(false);
        this.optionsTextTitle.setVisible(true);

        //Remove/Deactivate menu's elements.
        this.elmentsArr.forEach(element => {
            element.setVisible(false);
        });

        //MUSIC Button.
        this.btn1 = this.add.image(config.width/3 - 7, config.height/4 + 15, "pause-button").setScale(0.5).setOrigin(0,0).setTintFill("0x9e9b8a");
        this.btn1.setInteractive().on("pointerdown", this.musicConfig, this);

        //Text indicator.
        this.txt1 = this.add.text(config.width/3 - 7 + 5, config.height/4 + 20, "PLACE HOLDER", {
            font: "18px Arial",
            fill: "Black"
        });

        //Set the text indicator to an appropriate state.
        if (isMusicPlaying) {
            this.txt1.setText("Music: ON"); 
        } else {
            this.txt1.setText("Music: OFF");
        }

        //CONTROLS Button.
        this.btn2 = this.add.image(config.width/3 - 7, config.height/2, "pause-button").setScale(0.5).setOrigin(0,0).setTintFill("0x9e9b8a");
        this.btn2.setInteractive().on("pointerdown", this.controlsConfig, this);

        this.txt2 = this.add.text(config.width/3 -2, config.height/2, "PLACE HOLDER", {
            font: "14px Arial",
            fill: "Black"
        });

        if (useDefaultKeys) {
            this.txt2.setText("Controls: \n     Arrows"); 
        } else {
            this.txt2.setText("Controls: \n     WASD");
        }

        //BACK Button.
        this.btn3 = this.add.image(config.width/3 - 7, config.height/2 + 45, "pause-button").setScale(0.5).setOrigin(0,0).setTintFill("0x9e9b8a");
        this.btn3.setInteractive().on("pointerdown", this.bringBackOptions, this);

        this.txt3 = this.add.text(config.width/3 - 7 + 25, config.height/2 + 45, "Back", {
            font: "25px Arial",
            fill: "Black"
        });

        //second collection of UI elements.
        this.elmentsArr2 = [this.btn1, this.txt1, this.btn2, this.txt2, this.btn3, this.txt3];
    }

    controlsConfig() {
        if (useDefaultKeys) {
            this.txt2.setText("Controls: \n     WASD");
            useDefaultKeys = false;
        } else {
            this.txt2.setText("Controls: \n     Arrows");
            useDefaultKeys = true;
        }
        this.events.emit("controlsSwitch");
    }
    
    musicConfig() {
        if (!isMusicPlaying) {
            this.txt1.setText("Music: ON");
            //isMusicPlaying = true;
            this.events.emit("playMusic");  //WorldScene is listening.
        } else {
            this.txt1.setText("Music: OFF");
            //isMusicPlaying = false;
            this.events.emit("muteMusic"); //WorldScene is listening.
        }
    }

    bringBackOptions() {
        this.optionsTextTitle.setVisible(false);
        this.pauseTextTitle.setVisible(true);

        this.elmentsArr2.forEach(element => {
            element.setVisible(false);
        });

        this.elmentsArr.forEach(element => {
            element.setVisible(true);
        });
    }

    onQuitButton() {
        this.events.emit("muteMusic"); 
        this.scene.sleep();
        this.scene.get("WorldScene").scene.switch("TitleScreen");
        heartsCounter = 3;
    }

    onWake() {
        
    }

    onMoveOver(pointer, object) {
        object.setTintFill("0xcfb319");
    }

    onMoveOut(pointer, object) {
        object.setTintFill("0x9e9b8a");
    }
}