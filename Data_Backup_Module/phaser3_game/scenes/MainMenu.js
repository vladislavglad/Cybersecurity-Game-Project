class MainMenu extends Phaser.Scene
{
	constructor()
	{
		super("introGame");
	}

	preload()
	{
		// start screen's background
		this.load.image("background_1", "assets/images/bootGame.jpg");

		//UI button for title screen
		this.load.image("play", "assets/UI/PlayButton.png");
		this.load.image("exit", "assets/UI/ExitButton.png");

    	this.load.audio('clickButton', 'assets/music/click.mp3');
	}

	create()
	{
		this.image = this.add.tileSprite(0,0,config.width,config.height, "background_1");
		this.image.setOrigin(0,0);

		this.click = this.sound.add("clickButton");

		var title_Text = this.add.text(config.width/2-220,150, "Secure Your Data", 
		{

			font: "50px Arial", fill: "white"
		});

		title_Text.setStroke("#239Dff", 70);
   	   	title_Text.setShadow(2, 2, "#ffffff", 2, true, true);

		var playBut = this.add.image(config.width/2-300,350,"play");
		playBut.setOrigin(0,0);
		playBut.setScale(0.2);

		playBut.setInteractive();
		playBut.on("pointerdown", function(pointer, gameObject)
			{

				this.click.play();

				this.scene.start("generalization");

			}, this);

		var exitBut = this.add.image(config.width/2+200,350,"exit");
		exitBut.setOrigin(0,0);
		exitBut.setScale(0.2);

		exitBut.setInteractive();
		exitBut.on("pointerdown", function(pointer, gameObject)
			{

				this.click.play();
				
				this.scene.start("over");

			}, this);

	}

	update()
	{
		this.image.tilePositionX -=0.4;



		//testing case to jumping specific scene for checking visual laypout
		// money will be underfine casued it just jumping to the game scene
		//if(Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q)))
		//{
		//	this.scene.start("scene_11");
		//}

	}
}