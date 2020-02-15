class WorldScene extends Phaser.Scene {
    constructor() {
        super("WorldScene");
    }

    preload() {

    }

    create() {
        //Phaser's Tilemap object.
        var map = this.make.tilemap({key: "map"});

        //Processed Tileset (from image).
        //args in the following function: (nameOfFile.noExt, key that you specified when loading)
        //var grassTileset = map.addTilesetImage("grass-tile", "layer1"); 
        //var objectsTileset = map.addTilesetImage("tileset", "layer2");

        //Create layers.
        map.createStaticLayer("grass", map.addTilesetImage("grass-tile", "layer1"), 0,0); //name of your layer in .JSON file.
        var obstacles = map.createStaticLayer("obstacles", map.addTilesetImage("tileset", "layer2"), 0,0);

        //Make obstacles availabel for collison detection.
        obstacles.setCollisionByExclusion([-1]);

        //at our player/character.
        this.player = this.physics.add.sprite(50, 100, "player", 6);

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
        //this.cameras.main.roundPixels = true;
        this.cameras.main.setRoundPixels(true);

        // this.spawns = this.physics.add.group({ classType: Phaser.GameObjects.Zone});
        // for (var i = 0; i < 30; i++) {
        //     var x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
        //     var y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
        //     this.spawns.create(x, y, 20,20);
        // }
        // this.physics.add.overlap(this.player, this.spawns, this.onMeetZone, null, this);
    }

    update(time, delta) {
        this.playerMovementManager();
    }

    playerMovementManager() {
        this.player.body.setVelocity(0);
        
        //horizonatal movements.
        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-80);
        } else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(80);
        }

        //vertical movements.
        if (this.cursors.up.isDown) {
            this.player.body.setVelocityY(-80);
        } else if (this.cursors.down.isDown) {
            this.player.body.setVelocityY(80);
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
            this.player.anims.stop();
        }
    }

    onMeetZone(player, zone) {
        //move zone to another location.
        zone.x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
        zone.y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);

        //shake camera if player overlaps with a zone.
        this.cameras.main.shake(300);

        //following will be the logic for battle.
    }
    
}