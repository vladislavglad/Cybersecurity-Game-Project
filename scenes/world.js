class WorldScene extends Phaser.Scene {
    constructor() {
        super("WorldScene");
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

        //user input.
        this.cursors = this.input.keyboard.createCursorKeys();

        //camera config.
        this.cameras.main.setBounds(0,0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setRoundPixels(true);

        //Enemies spawns.
        this.spawns = this.physics.add.group({classType: Phaser.GameObjects.Sprite});
        this.spawns.create(70, 180, "baddie"); 
        this.physics.add.overlap(this.player, this.spawns, this.onMeetEnemy, null, this);

        //Adding NPC.
        this.npc_mage = this.physics.add.sprite(150, 100, "npc_mage", 10); //x = 379, y = 343
        this.npc_mage.flipX = true;
        this.npc_mage.play("idle_mage");
        //TODO: plan to create an interactive "ZONE" that will call a DialogScene (instead of NPC's own collision bounds)
        this.physics.add.overlap(this.player, this.npc_mage, this.onMeetNPC, null, this);

        //Book object setup.
        this.book = this.physics.add.image(160, 240, "book"); //x=150, y=580
        this.book.setScale(0.35);
        this.physics.add.overlap(this.player, this.book, this.onBookPickup, null, this);

        //creating audio.
        this.heroicMusic = this.sound.add("heroic_music");

        //listening for an input to toggle audio.
        this.input.keyboard.on("keydown", this.onMute, this);

        //When Scene is "woken up" (resumed).
        this.events.on("wake", this.onWake, this);

        //Run the following scene concurrently.
        this.scene.run("PlayerUI");

        //NEW: Interactive zone to transition to another world/biom (TESTING CONCEPT).
        this.transitionZone1 = this.add.zone(50, 0, 160, 10).setOrigin(0,0);
        this.transitionZone2 = this.add.zone(0, 40, 10, 160).setOrigin(0,0);
        this.physics.world.enableBody(this.transitionZone1);
        this.physics.world.enableBody(this.transitionZone2);

        this.physics.add.overlap(this.player, this.transitionZone1, this.transitionNextZone, null, this);
        this.physics.add.overlap(this.player, this.transitionZone2, this.transitionNextZone, null, this);

        //Listen for Pause menu event from PlayerUI Scene.
        this.playerUI = this.scene.get("PlayerUI");
        this.playerUI.events.on("Pause", () => {this.player.anims.stop()}, this);
    }

    transitionNextZone(player, zone) {
        zone.x += 1500;
        zone.y += 1500;
        this.scene.switch("TempWorld");
    }

    //Called when this Scene is resumed.
    onWake() {
        this.cursors.left.reset();
        this.cursors.right.reset();
        this.cursors.up.reset();
        this.cursors.down.reset();

        isGamePaused = false;

        //Resumes the game (progress is "saved") 
        //Character remains where it was left.
        this.scene.run("PlayerUI");

        //Completely restarts the game (from the the beginning).
        //Problem: transitioning to this Scene causes whole gameworld to reset. 
        //this.scene.restart("PlayerUI");
    }

    onMeetEnemy(player, spawn) {
        //move enemy out of character's way so no overlap logic would happen again.
        spawn.x = spawn.x + 170;

        //following will be the transition to the BattleScene.
        this.scene.switch("BattleScene");
    }

    onMeetNPC() {
        /**
         * disable npc's body to not triger overlap funcion 
         * after returning from the DialogScene back to the WorldScene.
         */
        this.npc_mage.disableBody();
        this.scene.switch("DialogScene");
    }

    onBookPickup(player, book) {
        book.destroy();
        this.scene.switch("BookInteraction");
    }

    onMute(event) {
        //logic to toggle audio.
        if (event.code === "KeyM") {
            if (this.heroicMusic.isPaused) {
                this.heroicMusic.resume();
            } else if (!this.heroicMusic.isPlaying) {
                this.heroicMusic.play();
            } else {
                this.heroicMusic.pause()
            }
        }
    }

    //Game loop (should be called by Phaser 60 times per second).
    update(time, delta) {
        this.playerMovementManager();
    }

    //key codes: KeyW, KeyS, KeyA, KeyD. 
    playerMovementManager() {
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