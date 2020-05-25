var event12 = 
	
 			  "While you are watching material online, you \n"+
 			  "accidentally click on a website that contains a \n"+
 			  "virus and infect your computer. The hacker tells \n"+
 			  "you to pay money in order to recover the data. \n"+
 			  "Everything is blocked and you need to make a \n"+
 			  "choice right now.";

var bonus = 200;
var defaultIncome = 500;
var deduction = 100;

class Event_12 extends Phaser.Scene
{

	constructor()
	{
		super("scene_12");
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

    	this.load.spritesheet("got_virus", "assets/animation/virus_in_computer.png",
    	{
    		frameWidth: 300,
    		frameHeight: 225
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
		var virusAnimation = this.add.sprite(200,250,"got_virus");
		
		this.anims.create({
			key: "got_virus_anim",
			frames: this.anims.generateFrameNumbers("got_virus"),
			
			frameRate: 25,
			repeat: -1
		})

		virusAnimation.play("got_virus_anim");


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

		this.add.text(850,20, "December", {
			font: "bold 30px Arial", 
			fill: "Red",

		});

		this.add.text(460,150, event12, {
			font: "bold 20px Arial", 
			fill: "white",

		});

		this.click = this.sound.add("clickButton");

		this.correct = this.sound.add("correct_sound");

		this.wrong = this.sound.add("wrong_sound");



		this.choice_1 = this.add.text(100, 450, 'Reject him ', { 
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

					this.add.text(240,200, "Nice! You made a good choice. Since you do have external\n"+
										   "backup, it allows you to restore the data on another \n"+
										   "computer. The external plan is the best way in this case\n"+
										   "because it does not depend on the Internet.", {
						
						font: "bold 20px Arial", 
						fill: "black",

						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("ending", {
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

					this.add.text(240,200, "NO! Of the plans you have so far, none are compatible \n"+
										   "with your situation now. You should have planned better \n"+
										   "and thought of the different eventualities.", 
					 	{
					 						

							font: "bold 20px Arial", 
							fill: "black", 
						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("ending", {
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







		this.choice_2 = this.add.text(550, 450, 'Try to trick him', { 
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

					this.add.text(240,200, "Nicely done! You figured out the identity of the hacker!\n"+
					 					   "Now you can recover your data. ", {
						
							font: "bold 20px Arial", 
							fill: "black",

						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("ending", {
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
					
					this.add.text(240,200, "The mission fails. It seems like the hacker is smarter \n"+
					 					   "than you. He doesn’t fall into your trap. You pay ransom \n"+
					 					   "money to the hacker to unlock the computer." , {

							font: "bold 20px Arial", 
							fill: "black", 
						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("ending", {
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