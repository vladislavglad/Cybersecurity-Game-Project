var textSentence_1 = 

		"Hi, welcome to Tech Inc. You are responsible \n" +
		"for our data backup team. Every month, you \n" +
		"will face a situation that will demand your\n" +
		"attention. Please choose your course of action \n" +
		"wisely to solve the problem. \n " + 
		"\n " +
		"If you are successful, you will be paid but \n " +
		"if you are not, you might lose money. If you\n " +
		"are good at your job, you can earn at least \n " +
		"$3,000 by the end of the year! I am giving\n" +
		"you $1,000 in start-up funds to buy a data \n"+
		"backup plan.";
		

var index =0;

var speech;

var currentBudget = 1000;

class StoryScene extends Phaser.Scene
{

	constructor()
	{
		super("generalization");
	}

	preload()
	{

		this.load.image("background_2", "assets/images/game_Scene.jpg");

		this.load.image("boss", "assets/UI/Boss.png");

		this.load.image("text_box", "assets/UI/speech_bubble.png");

		this.load.image("bottom", "assets/images/bottom_Space.jpg");

		this.load.audio('clickButton', 'assets/music/click.mp3');

	}

	create()
	{

		var backgroundImage = this.add.image(0,0,"background_2");
		backgroundImage.setOrigin(0,0);

		var bottom = this.add.image(0,500,"bottom");
		bottom.setOrigin(0,0);

		var character_Boss = this.add.image(550,250,"boss");
		character_Boss.setOrigin(0,0);
		character_Boss.setScale(0.4);

		var text_Field =  this.add.image(350,50,"text_box");
		text_Field.setOrigin(0.5,0.1);
		text_Field.setScale(1.1);


		var hint = this.add.text(280,350, "'Press SPACE to Continue' ", {
			font: "20px Arial",
			fill: "red"
		});
	
		speech = this.add.text(120,50, textSentence_1, {
			font: "23px Arial", 
			fill: "black"
		});


		this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
		
	}

	update()
	{
		if (Phaser.Input.Keyboard.JustDown(this.spaceBar))
		{
			this.click = this.sound.add("clickButton");
			this.click.play();
			
				this.scene.start("scene_1", {
					money: currentBudget,
					hasInternalStorage: false,
					hasCloudStorage: false,
					hasUSBStorage: false,
					hasPrinterStorage: false
				});     		
    	}
		
	}
}