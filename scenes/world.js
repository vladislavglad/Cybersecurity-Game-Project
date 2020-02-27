class WorldScene extends Phaser.Scene {
    constructor() {
        super("WorldScene");
    }

    create() {
        //Phaser's Tilemap object.
        let map = this.make.tilemap({key: "map"});

        //Processed Tileset (from an image).
        //tilemap.addTilesetImage(nameOfFile (noExt), key that you specified when loading in a boot scene); 
        
        //Create layers.
        map.createStaticLayer("grass", map.addTilesetImage("grass-tile", "layer1"), 0,0); //name of your layer in .JSON file.
        let obstacles = map.createStaticLayer("obstacles", map.addTilesetImage("tileset", "layer2"), 0,0);

        //Make obstacles availabel for collison detection.
        obstacles.setCollisionByExclusion([-1]);

        //at our player/character.
        this.player = this.physics.add.sprite(50, 100, "player", 6);

        //0 down, 1 is up, 2 is left, 3 is right.
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

        this.cameras.main.setBounds(0,0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setRoundPixels(true);

        this.spawns = this.physics.add.group({classType: Phaser.GameObjects.Sprite});
        this.spawns.create(110, 180, "baddie"); 
        this.physics.add.overlap(this.player, this.spawns, this.onMeetEnemy, null, this);

        this.npc_mage = this.physics.add.sprite(379, 343, "npc_mage", 10); //x = 313, y = 350
        this.npc_mage.flipX = true;
        this.npc_mage.play("idle_mage");
        this.physics.add.overlap(this.player, this.npc_mage, this.onMeetNPC, null, this);

        this.book = this.physics.add.image(150, 580, "book");
        this.book.setScale(0.35);
        this.physics.add.overlap(this.player, this.book, (pl, bk) => {
            bk.destroy();
        }, null, this);

    }

    update(time, delta) {
        this.playerMovementManager();
    }

    playerMovementManager() {
        this.player.body.setVelocity(0);
        
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

    onMeetEnemy(player, zone) {

        this.player.body.setVelocity(0);

        //shake camera if player overlaps with a zone.
        this.cameras.main.shake(300);

        //following will be the transition to the BattleScene.
        //this.scene.pause();
        this.scene.switch("BattleScene");
    }

    onMeetNPC() {
        this.player.body.setVelocity(0);
        this.scene.pause();
        this.scene.start("DialogScene");
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