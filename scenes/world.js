class WorldScene extends Phaser.Scene {
    constructor() {
        super("WorldScene");

        //Have to initialize these to be able to use MovementManager class.
        this.player = null;
        this.enemies = null;
    }

    create() {
        //Phaser's Tilemap object.
        let map = this.make.tilemap({key: "map"});

        //Syntax for adding tile sets (as images): 
        //tilemap.addTilesetImage(nameOfFile (noExt), key that you specified when loading asset in a boot scene); 

        //Adding tileset images.
        map.addTilesetImage("grass-tile", "layer1");
        map.addTilesetImage("tileset", "layer2");

        //Creating map layers.
        map.createStaticLayer("grass", map.getTileset("grass-tile"), 0,0); //name of your layer in .JSON file.
        let obstacles = map.createStaticLayer("obstacles", map.getTileset("tileset"), 0,0);

        //adding new layer (same tileset).
        map.createStaticLayer("road", map.getTileset("tileset"));

        //Make obstacles availabel for collison detection.
        obstacles.setCollisionByExclusion([-1]);

        //add our player/character.
        this.player = this.physics.add.sprite(50, 100, "player", 7);

        //Character's facing direction: 0 down, 1 is up, 2 is left, 3 is right.
        this.facingDirection = 0;
        
        /**
         * group container for all spells objects shot.
         * (this is done in order to add logic for 
         * the collision with entities such as enemies)
         */
        //this.spells = this.physics.add.group();
         
        //specify world's borders and make player's character colidable with bounds.
        this.physics.world.bounds.width = map.widthInPixels;
        this.physics.world.bounds.height = map.heightInPixels;
        this.player.setCollideWorldBounds(true);

        //colider for player and obstacles.
        this.physics.add.collider(this.player, obstacles);

        //User movement manager (based on preference: arrows or wasd).
        this.movementManager = new MovementManager(this);

        //camera config.
        this.cameras.main.setBounds(0,0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setRoundPixels(true);

        //Enemies spawns.
        // this.spawns = this.physics.add.group({classType: Phaser.GameObjects.Sprite});
        // this.spawns.create(150, 120, "baddie"); //70, 180

        let enemy = new EnemyObject(this, 174, 240, "baddie", 3, 0); // 223 415
        let enemy2 = new EnemyObject(this, 449, 497, "baddie", 3, 1);
        this.enemies = [enemy, enemy2];

        this.movementManager.initiateEnemy();

        this.physics.add.overlap(this.player, this.enemies, this.onMeetEnemy, null, this);

        //Items for the testing/debug purposes.
        //this.createEntities();

        //Adding NPC.
        this.npc_mage = this.physics.add.sprite(377, 348, "npc_mage", 10); //x = 379, y = 343
        this.npc_mage.flipX = true;
        this.npc_mage.play("idle_mage");
        //TODO: plan to create an interactive "ZONE" that will call a DialogScene (instead of NPC's own collision bounds)
        this.physics.add.overlap(this.player, this.npc_mage, this.onMeetNPC, null, this);

        //Book object setup.
        this.book = this.physics.add.image(150, 100, "book"); //39, 393
        this.book.setScale(0.35);
        this.physics.add.overlap(this.player, this.book, this.onBookPickup, null, this);

        //Creating audio.
        this.mainMusic = this.sound.add("peaceful-music");

        //Listening for an input to toggle audio. 
        //(PROBLEM: Map and Mute both binded to "M")
        //this.input.keyboard.on("keydown", this.onMute, this);

        //Run the following scene concurrently.
        this.scene.run("PlayerUI");

        //Listen for "Pause" event (emmited from PlayerUI Scene).
        this.playerUI = this.scene.get("PlayerUI");
        this.playerUI.events.on("pauseGame", () => {this.movementManager.stopAllMovement();}, this);

        //Listen for "Options" menu events (emmited from PauseScene).
        this.pauseScene = this.scene.get("PauseScene");
        this.pauseScene.events.on("playMusic", this.playMusic, this);
        this.pauseScene.events.on("muteMusic", this.muteMusic, this);
        this.pauseScene.events.on("controlsSwitch", () => {
            this.movementManager.switchCursors();
        }, this);

        //NEW: "Phishing" rod and zone.
        this.phishingRod = this.add.image(36, 392, "phishing-rod");
        this.physics.world.enableBody(this.phishingRod);
        this.phishingRod.setScale(0.5);
        this.physics.add.overlap(this.player, this.phishingRod, () => {
            this.phishingRod.destroy();
            hasPhishingRod = true;
        }, null, this);

        //"PhishingHints" is running in parallel and listening for key input.
        this.scene.run("PhishingHints");
        this.phishingZone = this.add.zone(80, 230, 60, 40);
        this.physics.world.enableBody(this.phishingZone);
        this.physics.add.overlap(this.player, this.phishingZone, () => {
            this.events.emit( "startPhishing", [this.player, this.phishingZone] );
        }, null, this);

        //NEW: Interactive zone to transition to another world/biom.
        this.transitionZone1 = this.add.zone(130, 10, 160, 10).setOrigin(0.5, 0.5);
        this.transitionZone2 = this.add.zone(463, 360, 120, 10).setOrigin(0.5,0.5); 
        this.physics.world.enableBody(this.transitionZone1);
        this.physics.world.enableBody(this.transitionZone2);

        this.physics.add.overlap(this.player, this.transitionZone1, this.transitionNextZone, null, this);
        this.physics.add.overlap(this.player, this.transitionZone2, this.transitionNextZone, null, this);

        //Listen for transition between zones.
        this.onExitZone();

        //When WorldScene is "woken up" (resumed).
        this.events.on("wake", this.onWake, this);

        //Listen for any key press.
        this.input.keyboard.on("keydown", this.onKeyDown, this);
    }

    createEntities() {
        this.teachings = [];
        this.modules = [];

        for (let i = 0; i< 5; i++) {
            let instruction = new InstructionObject(this, 50 + 30 * i, 57, "book", i).setScale(0.35);
            this.teachings.push(instruction);

            let mod = new EnemyObject(this, 50 + 30 * i, 155, "baddie", 3, i, false);
            this.modules.push(mod);
        } 

        this.physics.add.overlap(this.player, this.teachings, this.instructionsOverlap, null, this);
        this.physics.add.overlap(this.player, this.modules, this.modulesOverlap, null, this);
    }

    instructionsOverlap(player, instr) {
        return;
    }

    modulesOverlap(player, module) {
        isGamePaused = true;

        //IMPORTANT: allows the game world to know what is being presented.
        currentContentID = module.moduleID;

        switchTo(`mod${currentContentID}`); //called from within scheduler.js
        
        module.active = false;
        module.setVisible(false);
        module.disableBody();
    }

    createInputKeys_local(useDefaultKeys) {
        if (useDefaultKeys === true) 
            return this.input.keyboard.createCursorKeys();
        else {
            return this.input.keyboard.addKeys({
                up: Phaser.Input.Keyboard.KeyCodes.W,
                down: Phaser.Input.Keyboard.KeyCodes.S,
                left: Phaser.Input.Keyboard.KeyCodes.A,
                right: Phaser.Input.Keyboard.KeyCodes.D,
                space: Phaser.Input.Keyboard.KeyCodes.SPACE
            });
        }
    }

    transitionNextZone(player, zone) {
        if (zone === this.transitionZone1) {
            this.scene.switch("TempWorld");
        } else if (zone === this.transitionZone2) {
            this.scene.switch("TavernInside");
        }
        this.movementManager.resetCursors();
    }

    onExitZone() {
        this.scene.get("TempWorld").events.on("exitZone", () => {
            this.player.x = 110;
            this.player.y = 40;
            this.player.anims.play("down");
        }, this);

        this.scene.get("TavernInside").events.on("exitZone", () => {
            this.player.x = 463;
            this.player.y = 375;
            this.player.anims.play("down");
        }, this);
    }

    onKeyDown(key) {
        //console.log(key.code);

        //Track player coordinates.
        let center = this.player.getCenter();
        console.log("x: " + Math.round(center.x) + " y: " + Math.round(center.y));

        //Change input type (arrows or wasd).
        if (key.code === "KeyQ") {
            if (useDefaultKeys === true) 
                useDefaultKeys = false;
            else
                useDefaultKeys = true;
            this.movementManager.switchCursors();
        }
        
        //Also check for "M" key for GameMap to open.
        this.openMap(key);
    }

    openMap(key) {
        if (key.code === "KeyM" && !isMapOpen && !isGamePaused) {
            this.scene.sleep("PlayerUI")
            this.scene.run("GameMap");
            isMapOpen = true;
            isGamePaused = true;
            this.movementManager.stopAllMovement();
        } else if (key.code === "KeyM" && isMapOpen) {
            this.scene.sleep("GameMap");
            this.scene.run("PlayerUI");
            isMapOpen = false;
            isGamePaused = false;
        }
    }

    //Called when this Scene is resumed.
    onWake() {
        isGamePaused = false;
        this.movementManager.resetCursors();

        //Resumes the game (progress is "saved") 
        //Character remains where it was left.
        this.scene.run("PlayerUI");

        //Completely restarts the game (from the the beginning).
        //Problem: transitioning to this Scene causes whole gameworld to reset. 
        //this.scene.restart("PlayerUI");
    }

    onMeetEnemy(player, enemy) {
        isGamePaused = true;
        //this.cameras.main.shake(300);

        //IMPORTANT: allows the game world to know what is being presented.
        currentContentID = enemy.moduleID;

        switchTo(`module${currentContentID}`); //called from within scheduler.js
        
        enemy.active = false;
        enemy.setVisible(false);
        enemy.disableBody();
    }

    onMeetNPC() {
        isGamePaused = true;

        /**
         * disable npc's body to not triger overlap funcion 
         * after returning from the DialogScene back to the WorldScene.
         */
        this.npc_mage.disableBody();
        this.scene.switch("DialogScene");
    }

    onBookPickup(player, book) {
        //Prevent calling pause menu (with "Escape" key) when in another scene.
        isGamePaused = true;

        book.destroy();
        //this.scene.switch("BookInteraction");

        //Temporarily changed this to invoke a scene switch but could add another game object and replace this
        //switchTo(`instruction0`);
        this.scene.switch("MalGameScene");
    }

    onMute(key) {
        //logic to toggle audio.
        if (key.code === "KeyM") {
            if (this.mainMusic.isPaused) {
                this.mainMusic.resume();
                isMusicPlaying = true;
            } else if (!this.mainMusic.isPlaying) {
                this.mainMusic.play();
                isMusicPlaying = true;
            } else {
                this.mainMusic.pause();
                isMusicPlaying = false;
            }
        }
    }

    playMusic() {
        if (this.mainMusic.isPaused) {
            this.mainMusic.resume();
        } else if (!this.mainMusic.isPlaying) {
            this.mainMusic.play();
        }
        isMusicPlaying = true;
    }   

    muteMusic() {
        this.mainMusic.pause();
        isMusicPlaying = false;
    }
        
    //Game loop (should be called by Phaser 60 times per second).
    update(time, delta) {
        //Using the reusable module.
        this.movementManager.playerMovementManager();
    }

    //Character movement.
    MovementManager_local() {
        this.player.body.setVelocity(0);
    
        //First, check if game is paused.
        if (!isGamePaused) {
            //horizonatal movements.
            if (this.cursors.left.isDown) {
                this.player.body.setVelocityX(-80);
                this.facingDirection = 2;
            } else if (this.cursors.right.isDown) {
                this.player.body.setVelocityX(80);
                this.facingDirection = 3;
            }

            //vertical movements.
            if (this.cursors.up.isDown) {
                this.player.body.setVelocityY(-80);
                this.facingDirection = 1;
            } else if (this.cursors.down.isDown) {
                this.player.body.setVelocityY(80);
                this.facingDirection = 0;
            }

            //animations for movements.
            if (this.cursors.left.isDown) {
                this.player.flipX = false;
                this.player.anims.play('left', true);
            } else if (this.cursors.right.isDown) {
                this.player.flipX = true;
                this.player.anims.play('left', true);
            } else if (this.cursors.up.isDown) {
                this.player.anims.play('up', true);
            } else if (this.cursors.down.isDown) {
                this.player.anims.play('down', true);
            } else {
                //stops any animation from playing.
                this.player.anims.stop();
            }
            
            //execute a spell only when space key is down.
            if (Phaser.Input.Keyboard.JustDown(this.cursors.space)) {
                this.shootBeam(this.facingDirection);
            }
        }
    }

    shootBeam(direction) {
        let beam;
        
        if (direction === 0) {
            beam = this.physics.add.sprite(this.player.x, this.player.y + 16, "beam");
            beam.flipY = true;
            beam.setVelocityY(200);
        } else if (direction === 1) {
            beam = this.physics.add.sprite(this.player.x, this.player.y - 16, "beam");
            beam.flipY = false;
            beam.setVelocityY(-200);
        } else if (direction === 2) {
            beam = this.physics.add.sprite(this.player.x - 16, this.player.y, "beam");
            beam.rotation = -1.6;
            beam.setVelocityX(-200);
        } else if (direction === 3) {
            beam = this.physics.add.sprite(this.player.x + 16, this.player.y, "beam");
            beam.rotation = 1.6;
            beam.setVelocityX(200);
        }

        beam.play('beam_anim');
        //this.spells.add(beam);
    }
}