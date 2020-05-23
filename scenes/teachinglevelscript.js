//This game is to teach about Malware (instruction module)

var MalGameScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:
    
    //Give this object a name for other Phaser scenes to refer to
    function MalGameScene () {

        Phaser.Scene.call(this, { key: 'MalGameScene'});

    },

    //Preload all images
    preload: function() {

        this.load.image("background", "assets/images/malwareimages/bck.png");
        this.load.image("recycle", "assets/images/malwareimages/recycle.png");
        this.load.image("trojan", "assets/images/malwareimages/trojan.png");
        this.load.image("keylog", "assets/images/malwareimages/keylog.png");
        this.load.image("dos", "assets/images/malwareimages/dos.png");
        this.load.image("spy", "assets/images/malwareimages/spy.png");
        this.load.image("root", "assets/images/malwareimages/root.png");
        this.load.image("virusicon", "assets/images/malwareimages/virusicon.png");
        this.load.image("ransom", "assets/images/malwareimages/ransom.png");
        this.load.image("adware", "assets/images/malwareimages/adware.png");
        this.load.image("worm", "assets/images/malwareimages/worm.png");
        this.load.image("antivirus", "assets/images/malwareimages/antivirus.png");

        this.load.image("ransomalert", "assets/images/malwareimages/ransomalert.png");
        this.load.image("adalert", "assets/images/malwareimages/adalert.png");
        this.load.image("spyalert", "assets/images/malwareimages/spyalert.png");
        this.load.image("trojanalert", "assets/images/malwareimages/trojanalert.png");
        this.load.image("botalert", "assets/images/malwareimages/botalert.png");
        this.load.image("virusalert", "assets/images/malwareimages/virusalert.png");
        this.load.image("rootalert", "assets/images/malwareimages/rootalert.png");
        this.load.image("keyalert", "assets/images/malwareimages/keyalert.png");
        this.load.image("wormalert", "assets/images/malwareimages/wormalert.png");
        this.load.image("alert", "assets/images/malwareimages/ransomalert.png");
        this.load.image("recyclealert", "assets/images/malwareimages/recyclealert.png");

        this.load.image("hitbox", "assets/images/malwareimages/hitbox.png");

        this.load.image("completed", "assets/images/malwareimages/completed.png");

    },
    
    create: function() {
        
        //Keep track of how many icons are scanned until completion of all 10 icons
        let countdown = 10;

        //background image
        this.add.image(0,0,"background").setOrigin(0,0);

        
        //Creation of variables that refer to the game objects. Use setInteractive to enable objects to interact with user, setDraggable so user can drag the icons
        var antivirus = this.physics.add.sprite(200,100,"antivirus").setInteractive();
        var hitbox = this.physics.add.sprite(200,100,"hitbox").setInteractive();

        //Once all icons have been scanned, allow the user to switch back to the main game
        var completed = this.physics.add.sprite(200,100,"completed").setInteractive();
        completed.visible = false;
        completed.once('pointerdown', function(){
            this.scene.switch("WorldScene");
        }, this);

        var recycle = this.physics.add.sprite(15,15,"recycle").setInteractive();
        this.input.setDraggable(recycle);
        var recyclealert = this.add.sprite(200,100,"recyclealert").setInteractive();
        recyclealert.visible = false;       //alert estalished but invisible until the icon relative to it is scanned. Dismissed by clicking.
        recyclealert.once('pointerdown', function (){
            
            recyclealert.visible= false;

        }, this);
         this.physics.add.overlap(recycle, hitbox, function (){

            recyclealert.visible = true;
            recycle.destroy();
            countdown--;
            if (countdown === 0){
                completed.visible= true;
            }
        
         });          

        var trojan = this.physics.add.sprite(15,45,"trojan").setInteractive();
        this.input.setDraggable(trojan);
        var trojanalert = this.add.sprite(200,100,"trojanalert").setInteractive();
        trojanalert.visible = false;
        trojanalert.once('pointerdown', function (){
            
            trojanalert.visible= false;

        }, this);
         this.physics.add.overlap(trojan, hitbox, function (){

            trojanalert.visible = true;
            trojan.destroy();
            countdown--;
            if (countdown === 0){
                completed.visible= true;
            }
        
         });  
    
        var root = this.physics.add.sprite(15,75,"root").setInteractive();
        this.input.setDraggable(root);
        var rootalert = this.add.sprite(200,100,"rootalert").setInteractive();
        rootalert.visible = false;
        rootalert.once('pointerdown', function (){
            
            rootalert.visible= false;

        }, this);
         this.physics.add.overlap(root, hitbox, function (){

            rootalert.visible = true;
            root.destroy();
            countdown--;
            if (countdown === 0){
                completed.visible= true;
            }
        
         });  
    
        var spy = this.physics.add.sprite(15,105,"spy").setInteractive();
        this.input.setDraggable(spy);
        var spyalert = this.add.sprite(200,100,"spyalert").setInteractive();
        spyalert.visible = false;
        spyalert.once('pointerdown', function (){
            
            spyalert.visible= false;

        }, this);
         this.physics.add.overlap(spy, hitbox, function (){

            spyalert.visible = true;
            spy.destroy();
            countdown--;
            if (countdown === 0){
                completed.visible= true;
            }
        
         });  
    
        var virusicon = this.physics.add.sprite(15,135,"virusicon").setInteractive();
        this.input.setDraggable(virusicon);
        var virusalert = this.add.sprite(200,100,"virusalert").setInteractive();
        virusalert.visible = false;
        virusalert.once('pointerdown', function (){
            
            virusalert.visible= false;

        }, this);
         this.physics.add.overlap(virusicon, hitbox, function (){

            virusalert.visible = true;
            virusicon.destroy();
            countdown--;
            if (countdown === 0){
                completed.visible= true;
            }
        
         });  
    
        var worm = this.physics.add.sprite(15,165,"worm").setInteractive();
        this.input.setDraggable(worm);
        var wormalert = this.add.sprite(200,100,"wormalert").setInteractive();
        wormalert.visible = false;
        wormalert.once('pointerdown', function (){
            
            wormalert.visible= false;

        }, this);
         this.physics.add.overlap(worm, hitbox, function (){

            wormalert.visible = true;
            worm.destroy();
            countdown--;
            if (countdown === 0){
                completed.visible= true;
            }
        
         });  
    
        var ransom = this.physics.add.sprite(45,15,"ransom").setInteractive();
        this.input.setDraggable(ransom);
        var ransomalert = this.add.sprite(200,100,"ransomalert").setInteractive();
        ransomalert.visible = false;
        ransomalert.once('pointerdown', function (){
            
            ransomalert.visible= false;

        }, this);
         this.physics.add.overlap(ransom, hitbox, function (){

            ransomalert.visible = true;
            ransom.destroy();
            countdown--;
            if (countdown === 0){
                completed.visible= true;
            }
        
         });        
    
        var keylog = this.physics.add.sprite(45,45,"keylog").setInteractive();
        this.input.setDraggable(keylog);
        var keyalert = this.add.sprite(200,100,"keyalert").setInteractive();
        keyalert.visible = false;
        keyalert.once('pointerdown', function (){
            
            keyalert.visible= false;

        }, this);
         this.physics.add.overlap(keylog, hitbox, function (){

            keyalert.visible = true;
            keylog.destroy();
            countdown--;
            if (countdown === 0){
                completed.visible= true;
            }
        
         });  
    
        var dos = this.physics.add.sprite(45,75,"dos").setInteractive();
        this.input.setDraggable(dos);
        var botalert = this.add.sprite(200,100,"botalert").setInteractive();
        botalert.visible = false;
        botalert.once('pointerdown', function (){
            
            botalert.visible= false;

        }, this);
         this.physics.add.overlap(dos, hitbox, function (){

            botalert.visible = true;
            dos.destroy();
            countdown--;
            if (countdown === 0){
                completed.visible= true;
            }
        
         });  
    
        var adware = this.physics.add.sprite(45,105,"adware").setInteractive();
        this.input.setDraggable(adware);
        var adalert = this.add.sprite(200,100,"adalert").setInteractive();
        adalert.visible = false;
        adalert.once('pointerdown', function (){
            
            adalert.visible= false;

        }, this);
         this.physics.add.overlap(adware, hitbox, function (){

            adalert.visible = true;
            adware.destroy();
            countdown--;
            if (countdown === 0){
                completed.visible= true;
            }
        
         });

        //Define drag
        this.input.dragDistanceThreshold = 16;
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
    
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

    },

    update: function () {

    }
});


/*

OLD DATA USED BEFORE THE INTEGRATION INTO MAIN GAME

*/

//store the configuration of the game in a variable that will be passed on the creation of the game
/* var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 625,
    backgroundColor: 0x000000,
    scene: [MalGameScene],
    physics: {
        default: "arcade",
        arcade:{
            gravity: 0
        }
    }
};

//create a new instance of a Phaser game
var Malgame = new Phaser.Game(config);
 */