var event5 = 

			 "You have been working at this company for almost \n"+
			 "half a year now. You can buy a new plan for your \n"+
			 "company now. Please choose wisely for the second \n"+
			 "plan. It will help you a lot for the next few months.";

class Event_5 extends Phaser.Scene
{



	constructor()
	{
		super("scene_5");
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
			
		this.load.image("background_3", "assets/images/backupChoice_Scene.jpg");

		this.load.image("textField", "assets/images/wallpaperflare.com_wallpaper.jpg");

		this.load.image("cloud_storage", "assets/images/cloud_storage.png");
		this.load.image("internal_storage", "assets/images/internal_storage.png");
		this.load.image("printer_storage", "assets/images/printer_storage.png");
		this.load.image("USB_storage", "assets/images/USB_storage.png");

    	this.load.spritesheet("backup_pic", "assets/animation/backup.png",
    	{
    		frameWidth: 300,
    		frameHeight: 148
    	});

    	this.load.audio('payMoney', 'assets/music/pay.mp3');

    	this.load.audio('clickButton', 'assets/music/click.mp3');

    	this.load.image("money_icon", "assets/images/money.png");
		this.load.image("events", "assets/images/event_text.png");
	}

	create()
	{
		
		var backgroundImage = this.add.image(0,0,"background_3");
		backgroundImage.setOrigin(0,0);

		var borderImage = this.add.image(450,100,"textField");
		borderImage.setOrigin(0,0);
		borderImage.setScale(0.5);

		// create animation of current event's image
		var backupAnimation = this.add.sprite(200,250,"backup_pic");
		
		this.anims.create({
			key: "backup_anim",
			frames: this.anims.generateFrameNumbers("backup_pic"),
			
			frameRate: 3,
			repeat: -1
		})

		backupAnimation.play("backup_anim");


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

		this.add.text(900,20, "May", {
			font: "bold 30px Arial", 
			fill: "Red",

		});

		this.add.text(460,180, event5, {
			font: "bold 20px Arial", 
			fill: "white",

		});

		this.pay = this.sound.add('payMoney');

		this.click = this.sound.add("clickButton");


		if(this.hasCloudStorage == true)
		{
			
			this.add.text(100,450, "Already \nchosen", {

				font: "bold 30px Arial", 
				fill: "Red",

			});

			this.name_1 = this.add.text(80,420, "(Cloud Storage)", {
				font: "20px Arial",
				fill: "white"
			});
		}
		else
		{
			this.cloud = this.add.image(100,450,"cloud_storage").setOrigin(0,0);
			this.cloud.setScale(0.2);

			this.name_1 = this.add.text(100,420, "Cloud Storage", {
				font: "20px Arial",
				fill: "white"
			});

			this.cloud.setInteractive();
			this.cloud.on("pointerover", () =>
				{
					this.value.setText(this.money + " - $250 ");
				

				}, this);

			this.cloud.on("pointerout", () =>
				{
					this.value.setText( this.money);
				

				}, this);

			this.cloud.on("pointerdown", () =>
				{

					this.click.play();

					this.pay.play();

					this.scene.start("scene_6", {
						money: this.money - 250,
						hasInternalStorage: this.hasInternalStorage,
						hasCloudStorage: true,
						hasUSBStorage: this.hasUSBStorage,
						hasPrinterStorage: this.hasPrinterStorage
					});

				}, this);
		}

		if(this.hasInternalStorage == true)
		{
			this.add.text(350,450, "Already \nchosen", {

				font: "bold 30px Arial", 
				fill: "Red",

			});

			this.name_2 = this.add.text(330,420, "(Internal Storage)", {
			font: "20px Arial",
			fill: "white"
			});
		}
		else
		{


			this.internal = this.add.image(350,450,"internal_storage").setOrigin(0,0);
			this.internal.setScale(0.2);


			this.name_2 = this.add.text(350,420, "Internal Storage", {
			font: "20px Arial",
			fill: "white"
			});

			this.internal.setInteractive();
			this.internal.on("pointerover", () =>
			{
				
				this.value.setText(this.money + " - $200 ");
				

			}, this);

			this.internal.on("pointerout", () =>
			{
				this.value.setText( this.money);
				

			}, this);

			this.internal.on("pointerdown", () =>
			{
				this.click.play();

				this.pay.play();

				this.scene.start("scene_6", {
					money: this.money - 200,
					hasInternalStorage: true,
					hasCloudStorage: this.hasCloudStorage,
					hasUSBStorage: this.hasUSBStorage,
					hasPrinterStorage: this.hasPrinterStorage
				});

			}, this);
		}

		if(this.hasPrinterStorage == true)
		{
			this.add.text(600,450, "Already \nchosen", {

				font: "bold 30px Arial", 
				fill: "Red",

			});

			this.name_3 = this.add.text(580,420, "(Printer Storage)", {
			font: "20px Arial",
			fill: "white"
			});
		}
		else
		{

			this.printer = this.add.image(600,450,"printer_storage").setOrigin(0,0);
			this.printer.setScale(0.2);

			this.name_3 = this.add.text(600,420, "Printer Storage", {
			font: "20px Arial",
			fill: "white"
			});

			this.printer.setInteractive();
			this.printer.on("pointerover", () =>
			{
				this.value.setText(this.money + " - $150 ");
				

			}, this);

			this.printer.on("pointerout", () =>
			{
				this.value.setText(this.money);
				

			}, this);

			this.printer.on("pointerdown", () =>
			{
				this.click.play();

				this.pay.play();

				this.scene.start("scene_6", {
					money: this.money - 150,
					hasInternalStorage: this.hasInternalStorage,
					hasCloudStorage: this.hasCloudStorage,
					hasUSBStorage: this.hasUSBStorage,
					hasPrinterStorage: true
				});

			}, this);
		
		}

		if(this.hasUSBStorage == true)
		{
			this.add.text(850,450, "Already \nchosen", {

				font: "bold 30px Arial", 
				fill: "Red",

			});

			this.name_4 = this.add.text(830,420, "(USB Storage)", {
			font: "20px Arial",
			fill: "white"
			});
		}
		else
		{


			this.USB = this.add.image(850,450,"USB_storage").setOrigin(0,0);
			this.USB.setScale(0.2);

			this.name_4 = this.add.text(850,420, "USB Storage", {
			font: "20px Arial",
			fill: "white"
			});


			this.USB.setInteractive();
			this.USB.on("pointerover", () =>
			{
				this.value.setText(this.money + " - $100 ");
				

			}, this);

			this.USB.on("pointerout", () =>
			{
				this.value.setText(this.money);
				

			}, this);

			this.USB.on("pointerdown", () =>
			{
				this.click.play();

				this.pay.play();

				this.scene.start("scene_6", {
					money: this.money - 100,
					hasInternalStorage: this.hasInternalStorage,
					hasCloudStorage: this.hasCloudStorage,
					hasUSBStorage: true,
					hasPrinterStorage: this.hasPrinterStorage
				});

			}, this);
		}
		

	}


	update()
	{
		
	}


	
}

