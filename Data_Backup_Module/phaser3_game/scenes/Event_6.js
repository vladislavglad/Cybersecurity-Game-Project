var event6 =

			 "Boss brings his kid to the company this month. \n"+
			 "While you are working, his kid brings a water \n"+
			 "bottle and walks past you. Oops! He falls down.\n"+
			 "The water spills out onto your computer and then \n"+
			 "your computer shuts down. You need to retrieve the \n"+
			 "data that was on it!";
	

var bonus = 200;
var defaultIncome = 500;
var deduction = 100;

class Event_6 extends Phaser.Scene
{

	constructor()
	{
		super("scene_6");
	}

	init(data)
	{
		this.money = data.money;
		this.hasInternalStorage = data.hasInternalStorage;
		this.hasCloudStorage = data.hasCloudStorage;
		this.hasUSBStorage = data.hasUSBStorage;
		this.hasPrinterStorage = data.hasPrinterStorage;
	}

	preload()
	{

		this.load.image("background_2", "assets/images/game_Scene.jpg");	

		this.load.image("textField", "assets/images/wallpaperflare.com_wallpaper.jpg");

		this.load.image("eventBox", "assets/UI/event_result.png");
		this.load.image("next", "assets/UI/continue.png");

    	this.load.spritesheet("waterInComputer", "assets/animation/drink_in_computer.png",
    	{
    		frameWidth: 300,
    		frameHeight: 300
    	});

    	this.load.audio('clickButton', 'assets/music/click.mp3');

    	this.load.audio('correct_sound', 'assets/music/correct.mp3');

    	this.load.audio('wrong_sound', 'assets/music/wrong.mp3');

    	this.load.image("money_icon", "assets/images/money.png");
		this.load.image("events", "assets/images/event_text.png");
	}

	create()
	{
		
		var backgroundImage = this.add.image(0,0,"background_2");
		backgroundImage.setOrigin(0,0);

		var borderImage = this.add.image(450,100,"textField");
		borderImage.setOrigin(0,0);
		borderImage.setScale(0.5);

		// create animation of current event's image
		var computerDamagedAnimation = this.add.sprite(200,250,"waterInComputer");
		
		this.anims.create({
			key: "waterInComputer_anim",
			frames: this.anims.generateFrameNumbers("waterInComputer"),
			
			frameRate: 20,
			repeat: -1
		})

		computerDamagedAnimation.play("waterInComputer_anim");


		var dollar_icon = this.add.image(10,15,"money_icon");
		dollar_icon.setOrigin(0,0);
		dollar_icon.setScale(0.2);

		this.value = this.add.text(70,20, this.money, {
			font: "bold 40px Arial", 
			fill: "white",

		});

		var event = this.add.image(650,0,"events");
		event.setOrigin(0,0);
		event.setScale(0.2);

		this.add.text(900,20, "June", {
			font: "bold 30px Arial", 
			fill: "Red",

		});

		this.add.text(460,180, event6, {
			font: "bold 20px Arial", 
			fill: "white",

		});

		this.click = this.sound.add("clickButton");

		this.correct = this.sound.add("correct_sound");

		this.wrong = this.sound.add("wrong_sound");



		this.choice_1 = this.add.text(150, 420, 'Your backup plan will allow you to recover your data', { 
			font: "bold 30px Arial", 
			fill: "white" 
		});

    	this.choice_1.setStroke("#239DDA", 50);
   	    this.choice_1.setShadow(2, 2, "#333333", 2, true, true);
		

		this.choice_1.setInteractive();
		this.choice_1.on("pointerdown", () =>
			{
				//this.cameras.main.setBackgroundColor('#000000');
				this.box = this.add.image(512,300,"eventBox");
				this.box.setScale(0.6);

				this.click.play();


				if(this.hasCloudStorage == true)
				{
					this.correct.play();

					this.add.text(240,200, "Hooray! You find out your data can be retrieved because \n"+
					 					   "you used cloud technique to backup last time. The data is\n"+
					 					   "stored on a server in a different location; you can\n"+
					 					   "retrieve it any time no matter how broken your device is, \n"+
					 					   "while the Internet is available."  , {
						
						font: "bold 20px Arial", 
						fill: "black",

						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_7", {
							money: this.money + defaultIncome + bonus,
							hasInternalStorage: this.hasInternalStorage,
							hasCloudStorage: this.hasCloudStorage,
							hasUSBStorage: this.hasUSBStorage,
							hasPrinterStorage: this.hasPrinterStorage
						});

					}, this);

				}
				else 
				{
					this.wrong.play();

					this.add.text(240,200, "Uh oh. Your plan is not going to work this time because\n"+
					 					   "the device you stored the data in before is either broken\n"+
					 					   "or corrupted because of water.", {

							font: "bold 20px Arial", 
							fill: "black", 
						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_7", {
							money: this.money - deduction,
							hasInternalStorage: this.hasInternalStorage,
							hasCloudStorage: this.hasCloudStorage,
							hasUSBStorage: this.hasUSBStorage,
							hasPrinterStorage: this.hasPrinterStorage
						});

					}, this);

				}

				// so the choice only can be interact only once 
				this.choice_1.removeInteractive();
				this.choice_2.removeInteractive();

			}, this);







		this.choice_2 = this.add.text(400, 510, 'Report to boss', { 
			font: "bold 30px Arial", 
			fill: "white" 
		});

		this.choice_2.setStroke("#EEA71A", 50);
   	    this.choice_2.setShadow(2, 2, "#333333", 2, true, true);
		

		this.choice_2.setInteractive();
		this.choice_2.on("pointerdown", () =>
			{
					//this.cameras.main.setBackgroundColor('#000000');
				this.box = this.add.image(512,300,"eventBox");
				this.box.setScale(0.6);

				this.click.play();

				// gives number 0 or 1 randomly
				var randomNum = Phaser.Math.Between(0, 1);

				if(randomNum == 0)
				{

					this.correct.play();

					this.add.text(240,200, "Your boss forgives you and just tells you to replicate\n"+
					 					   "the work and no great harm will come from losing the data.\n"+
					 					   "However, time is wasted.", {
						
							font: "bold 20px Arial", 
							fill: "black",

						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_7", {
							money: this.money + defaultIncome,
							hasInternalStorage: this.hasInternalStorage,
							hasCloudStorage: this.hasCloudStorage,
							hasUSBStorage: this.hasUSBStorage,
							hasPrinterStorage: this.hasPrinterStorage
						});

					}, this);

				}
				else 
				{
					this.wrong.play();

					this.add.text(240,200, "Your boss yells at you for being so careless and deducts\n"+
					 					   "money from the current balance in your department.", {

							font: "bold 20px Arial", 
							fill: "black", 
						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_7", {
							money: this.money - deduction,
							hasInternalStorage: this.hasInternalStorage,
							hasCloudStorage: this.hasCloudStorage,
							hasUSBStorage: this.hasUSBStorage,
							hasPrinterStorage: this.hasPrinterStorage
						});

					}, this);

				}

				// so the choice only can be interact only once 
				this.choice_1.removeInteractive();
				this.choice_2.removeInteractive();

			}, this);

	}

	update()
	{
		
	}
}
