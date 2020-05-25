var event11 = 

			  "While you are working, you get a call from the boss \n"+
			  "saying that there are some secure files in his \n"+
			  "computer. He wants you to bring the data to his \n"+
			  "location as fast as possible. He doesn’t want \n"+
			  "anyone in his company to know about this trip and \n"+
			  "orders you bring the files without attracting any \n"+
			  "attention. He trusts only you.";

var bonus = 200;
var defaultIncome = 500;
var deduction = 100;

class Event_11 extends Phaser.Scene
{

	constructor()
	{
		super("scene_11");
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

    	this.load.spritesheet("boss_hide", "assets/animation/hiding.png",
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
		var bossHidingAnimation = this.add.sprite(200,250,"boss_hide");
		
		this.anims.create({
			key: "boss_hide_anim",
			frames: this.anims.generateFrameNumbers("boss_hide"),
			
			frameRate: 15,
			repeat: -1
		})

		bossHidingAnimation.play("boss_hide_anim");


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

		this.add.text(850,20, "November", {
			font: "bold 30px Arial", 
			fill: "Red",

		});

		this.add.text(460,150, event11, {
			font: "bold 20px Arial", 
			fill: "white",

		});

		this.click = this.sound.add("clickButton");

		this.correct = this.sound.add("correct_sound");

		this.wrong = this.sound.add("wrong_sound");


		this.choice_1 = this.add.text(100, 450, 'Let’s do it  ', { 
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

				if(this.hasUSBStorage == true)
				{
					this.correct.play();

					this.add.text(240,200, "Well done! USB is the only option in this case. It \n"+
										   "doesn’t occupy much physical space and the backup \n"+
										   "speed is good when you store such a small amount of \n"+
										   "data. You can easily bring it out to other places \n"+
										   "especially when you need to use it in other devices  \n"+
										   "such as a computer. It is universally accepted." , {
						
						font: "bold 20px Arial", 
						fill: "black",

						});

					let nextImage = this.add.image(230,140,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_12", {
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

					this.add.text(240,200, "Sorry! The current plan you have is not working very \n"+
										   "well in this case. You should instead think of something \n"+
										   "small and easy to carry, since the boss doesn’t want\n"+
										   "anyone to know about the transfer.", {

							font: "bold 20px Arial", 
							fill: "black", 
						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_12", {
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


		this.choice_2 = this.add.text(320, 450, 'It is not possible given current data backups', { 
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

					this.add.text(240,200, "Your boss feels a little disappointed in you but he \n"+
										   "understands it might be difficult for a new worker. He  \n"+
										   "sends you a picture of what he is looking for and tells \n"+
										   "you to borrow this item and then transfer the data to him.", {
						
							font: "bold 20px Arial", 
							fill: "black",

						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_12", {
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

					this.add.text(240,200, "Your boss is upset about your response and comes to the \n"+
					 					   "company to pick up data by himself. He thinks you are \n"+
					 					   "not doing a good job and deducted some money from your \n"+
					 					   "department.", {

							font: "bold 20px Arial", 
							fill: "black", 
						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_12", {
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