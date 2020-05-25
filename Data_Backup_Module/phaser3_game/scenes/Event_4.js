var event4 = 

			"The company’s Internet gets immediately shut down \n"+
			"because the current Internet provider has a \n"+
			"technical problem. Although they already \n"+
			"immediately recognized this issue, they still need \n"+
			"to take a few days to fix it. In the meantime, you \n"+
			"need to backup your data for those days. So far the \n"+
			"company only has one way to backup data. \n"+
			"What should you do?";

	

var bonus = 200;
var defaultIncome = 500;
var deduction = 100;

class Event_4 extends Phaser.Scene
{

	constructor()
	{
		super("scene_4");
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

    	this.load.spritesheet("noWifi", "assets/animation/no_internet.png",
    	{
    		frameWidth: 300,
    		frameHeight: 255
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
		var noInternetAnimation = this.add.sprite(200,250,"noWifi");
		
		this.anims.create({
			key: "noWifi_anim",
			frames: this.anims.generateFrameNumbers("noWifi"),
			
			frameRate: 5,
			repeat: -1
		})

		noInternetAnimation.play("noWifi_anim");


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

		this.add.text(900,20, "April", {
			font: "bold 30px Arial", 
			fill: "Red",

		});

		this.add.text(460,180, event4, {
			font: "bold 20px Arial", 
			fill: "white",

		});

		this.click = this.sound.add("clickButton");

		this.correct = this.sound.add("correct_sound");

		this.wrong = this.sound.add("wrong_sound");


		this.choice_1 = this.add.text(150, 420, 'I believe our existing backup plan will work', { 
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

				if(this.hasInternalStorage == true)
				{
					this.correct.play();

					this.add.text(240,200, "Nicely done! External storage doesn’t need a strong \n"+
					 					   "internet connection. You can backup data to the \n"+
					 					   "computer or retrieve data from the computer as backup\n"+
					 					   "in case data in the computer is corrupted.", {
						
						font: "bold 20px Arial", 
						fill: "black",

						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_5", {
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

					this.add.text(240,200, "Mhmmm…You should think about your previous decision you\n"+
					 					   "made for your data backup plan. Are you sure it can do\n"+
					 					   "this task without an Internet connection?", {

							font: "bold 20px Arial", 
							fill: "black", 
						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_5", {
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







		this.choice_2 = this.add.text(350, 510, 'Tell boss the situation', { 
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

					this.add.text(240,200, "Your boss thinks you are right and allows you to work\n"+
					 					   "on the job with your computer at home. You can use the \n"+
					 					   "Internet to complete the task now.", {
						
							font: "bold 20px Arial", 
							fill: "black",

						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_5", {
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
					
					this.add.text(240,200, "Your boss gets angry and yells at you saying that you \n"+
					 					   "are not doing the job properly. He deducted some amount \n"+
					 					   "from your budget to hire another person temporarily to \n"+
					 					   "do the job.", {

							font: "bold 20px Arial", 
							fill: "black", 
						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_5", {
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

