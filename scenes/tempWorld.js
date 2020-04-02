class TempWorld extends Phaser.Scene {
    constructor() {
        super("TempWorld");
    }

    create() {
        //Testing concept.
        this.add.image(config.width/2, config.height/2, "temp-map").setScale(0.66);
        this.player = this.physics.add.sprite(40, config.height - 40, "player", 7);
        this.cursors = this.input.keyboard.createCursorKeys();

        this.exitZone = this.add.zone(40, config.height - 10, 530, 10);
        this.physics.world.enableBody(this.exitZone);

        this.physics.add.overlap(this.player, this.exitZone, () => {
            this.events.emit("exitZone");
            this.scene.switch("WorldScene");
        }, null, this);
        
        this.events.on("wake", this.onWake, this);
        //TODO: Implement logic and place points of interest below...
    }

    createWorld() {
        //Testing concept.
        //this.add.image(config.width/2, config.height/2, "temp-map").setScale(0.66);
        //this.player = this.physics.add.sprite(40, config.height - 30, "player", 7);
        //this.cursors = this.input.keyboard.createCursorKeys();

        //this.time.addEvent({delay: 3000, callback: () => {this.scene.switch("WorldScene");}, callbackScope: this});
    }

    onWake() {
        this.cursors.left.reset();
        this.cursors.right.reset();
        this.cursors.up.reset();
        this.cursors.down.reset();
        //this.createWorld();
    }

    update() {
        this.playerMovementManager();
    }

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