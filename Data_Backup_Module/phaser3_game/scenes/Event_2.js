var event2 =
			"This is the second month you are working here.\n"+
			"Everything seems to be working well. However, you \n"+
			"heard from the Internet that there is going to be \n"+
			"an earthquake in your area soon. Your boss is \n"+
			"worrying about his data. You should";


var bonus = 200;
var defaultIncome = 500;
var deduction = 100;

class Event_2 extends Phaser.Scene
{

	constructor()
	{
		super("scene_2");
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

		this.load.image("money_icon", "assets/images/money.png");
		this.load.image("events", "assets/images/event_text.png");

    	this.load.spritesheet("earthquake_pic", "assets/animation/earthquake.png",
    	{
    		frameWidth: 300,
    		frameHeight: 169
    	});


    	this.load.audio('clickButton', 'assets/music/click.mp3');

    	this.load.audio('correct_sound', 'assets/music/correct.mp3');

    	this.load.audio('wrong_sound', 'assets/music/wrong.mp3');

	}

	create()
	{
		
		var backgroundImage = this.add.image(0,0,"background_2");
		backgroundImage.setOrigin(0,0);

		var borderImage = this.add.image(450,100,"textField");
		borderImage.setOrigin(0,0);
		borderImage.setScale(0.5);

		// create animation of current event's image
		var earthquakeAnimation = this.add.sprite(200,250,"earthquake_pic");
		
		this.anims.create({
			key: "earthquake_anim",
			frames: this.anims.generateFrameNumbers("earthquake_pic"),
			
			frameRate: 15,
			repeat: -1
		})

		earthquakeAnimation.play("earthquake_anim");



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



		this.add.text(890,20, "February", {
			font: "bold 30px Arial", 
			fill: "Red",

		});

		this.add.text(460,180, event2, {
			font: "bold 20px Arial", 
			fill: "white",

		});


		this.click = this.sound.add("clickButton");

		this.correct = this.sound.add("correct_sound");

		this.wrong = this.sound.add("wrong_sound");



		this.choice_1 = this.add.text(100, 450, 'Backup data now', { 
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

					this.add.text(240,200, "Great! You saved your data. Cloud storage is the only\n" +
										   "one that stores multiple copies on multiple servers at\n" +
										   "the different locations. So if one of them stops working,\n"+
										   "data can be retrieved from other locations.", 
						{
						
						font: "bold 20px Arial", 
						fill: "black",

						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_3", {
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

					this.add.text(240,200, "Oops, your data backup gets destroyed by the earthquake,\n"+
					 					   "and since it is physically damaged you cannot retrieve \n"+
					 					   "any data from the device. You need to buy the device \n"+
					 					   "again, but there is no way to compensate for the years\n"+
					 					   "of data that are now lost forever.", 
					 	{

							font: "bold 20px Arial", 
							fill: "black", 
						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_3", {
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







		this.choice_2 = this.add.text(600, 450, 'Hope it is just fake news', { 
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

					this.add.text(240,200, "Lucky you! A government official has announced that it \n"+
					 					   "was just a mistaken prediction. Nothing will happen to \n"+
					 					   "your data. Phew!", 
					 	{
						
							font: "bold 20px Arial", 
							fill: "black",

						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_3", {
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
					
					this.add.text(240,200, "Oops, the ground starts shaking, and your computer is \n"+
										   "falling. You will pay the price for the choice that you\n"+
										   "made.",
						{

							font: "bold 20px Arial", 
							fill: "black", 
						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_3", {
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


