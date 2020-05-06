## CISC 4900 game world.
**This is a first [prototype](https://vladglad.itch.io/phaser-rpg?secret=6ltnySNslGpibAeh8dyZCC8PotI) of my module made using [Phaser.io](https://phaser.io) HTML5 game framework.**

___

## How to integrate (bring every modules together):
* First off we are truly short on time and to integrate I do not need to know the internal workings of your modules neither do you have to know anything about my game world.
* I made a content switcher API in the effort to ease the process of integration and to let you interface/interact with the game. So, I need your help with this! Here are the steps:
1. Fork this repository to your local machine.
2. Make sure you can run the game locally (see "Available Scripts" section).
3. In the index.html file place all your `<script>` after my scripts; same goes for `<div>`
   * Example:
    ```html
    <head>
      <!-- MY SCRIPTS -->
      <script src="scenes/boot.js"></script>
      ...
      <script defer src="scripts/contentSwitcher.js"></script>
      <script defer src="scripts/other.js"></script>


      <!-- YOUR SCRIPTS -->
      <script src="scripts/module1.js"></script>
      ...

    </head>
    <body>
      <!-- MY DIV -->
      <div id="gameContainer"></div>


      <!-- YOUR DIVS-->
      <div class="gameModule" id="module0"></div>
      ...
    </body>
    ```
   * Side Note #1: The game invokes "teaching" parts with something like `switchTo("instruction0");` and "evaluation" parts with `switchTo("module0");` where the passed argument is div's element id. So, in order for the game to invoke your module, you must use these predefined divs by their id or override them altogether.
   * Side Note #2: `<div>` should be of `class="gameModule"` since they all should be formated the same way (width and height in pixels) if we are to publish the game on [itch.io](https://itch.io/). (I used `width: 800px;` and `height: 600px;` throughout).
   
4. In your evaluation section (exit logic upon **full completion** of your module) use my content switcher API (global `contentSwitcher.js` file with several methods; only two methods are of interest to you).
   * Example: 
   ```javascript
   yourCode();
   ...
   
   
   /**
    * When done with education/learning part; 
    * Just hides your div and displays the game world.
    * @param arg - optional arg for your div's ID to hide it afterwards (if not in class="gameModule").
    */
   switchBack(arg);
   
   /**
    * When done with evaluation part; 
    * Same as before but also informs if completion of the module was successful or not.
    * @param completed - boolean value: true for successful completion, false otherwise.
    * @param arg - optional arg (same as before).
    */
   switchWithCondition(completed, arg);
   ```
   * Note: Every module would be loaded in and on the stand-by, hiden form the player's view; Upon encountering enemy switching will take place -> the game world will be hiden and one of the modules will show up. When exiting with `switchWithCondition(boolean)` an enemy representing your module would behave differently - success means enemy forever disappears, failure enemy is temporary disabled and will later be reactivated to let players try again.
5. Whenever you got it to work locally, issue a new pull request (This will notify and allow me to merge your local commits/changes to the master branch). 
6. Success. You've done it. Nice work!

___

## Available Scripts (to run the game locally).
### 1. Prerequisites:
* Node.js installed on your machine.
* git clone or download this repository.

### 2. In the project directory, you can run:
#### `npm install`
Installs all dependencies necessary, namely http-server.

#### `npm start`
Starts local server and opens default browser to run the game on localhost.

___

**(Week 11-12) Brief updates:**
* Enemy AI that chases after the player.
* Each enemy is identified by their `moduleID` which triggers an appropriate module (out of 5 possible). 
* Modularization of some components (such as MovementManager) to reuse them in other Phaser3 Scenes.
* Content switcher API - one .js file that allows to interface with the game world and control which game module (represented as `<div>` is presented to the player.
* Upon completion of a game module, successful or otherwise, resource indicator and map of contamination change; hearts get taken away, map gets gradually "cleaner."

___

**(Week 7-10) Updates:** 
* My repo is (and has been) public - all commits/updates could be seen directly.
* In-game menu that lets pause the game, change options such as music and controls, and exit the game to the title screen.
* Title screen and some animation; transition to the game.
* In-game map of the world that is dynamically (at random) changes colors to indicate “cyber-threat” severity.
* Transition between game zones and universal character controls -> either arrows or “wasd”
* New “Tavern” game zone with new way to interact with npc: overhead text.
* Introduced a way to integrate a “Phishing” module.
* Lots of tweaks and fixes.
* Checkout and run the game locally in just **two** terminal commands (see "Available Scripts" section).

___

**(Week 5-6) Updates:**
* First prototype of Title screen.
* New assets preload sequence for better performance (loading times).
* Player UI: health indicator (or other resources that we will implement).
* Pause icon and corresponding interface menue.
* First concept of transition between worlds/biomes.
* Testing new concepts of collision detection improvements between the player and game objects.
* Minor tile map updates.

**Considering new things to be done in the next Update:**
- [X] Pause menu logic (stop player from moving when this menu is open and do approppriate actions "Resume, Options, Quit).
- [X] "Phishing" mechanic implementation (as proposed by Jerfyn).
- [X] Title screen animation and other fine cosmetic addjustments to the game.
- [ ] Update tiled map layout and addjust collisions (player & world).
- [X] In game World map and contamination/decontamination concept of our game (very ironic given current state of the world).

**Optional:**
- [X] Player control with WASD (not necessary, but may be later switched from Options menu).
- [ ] New Enemies (loading atlas files in .JSON format).
- [X] Basic enemy AI.
- [ ] Character invincibility frames when hit/collided with an enemy.

___

**(Week 3-4) What has been done:**
* Bug fixed when exiting Scenes: could not exit a Scene due to overlap of game objects.
* Configured "smooth" transitioning between Scenes -> no more Scene restart (on exiting).
* Configured a cycalable dialog Scene with an NPC.
* Tested audio capabilities of Phaser3 and logic to turn on/pause/reume music. (Things don't have to be 8-bit "Retro", you can go as epic as you would like; the only limit is resources and time).
* Explored possibility of loading and using HTML DOM elements into Phaser3.
* Introduced new Scene BookInteraction: where players solve a decryption puzzle. Input check and evaluated (only rudiments so far; the full logic is to be implemented in the future).

**Alternative idea for the game:**
* As we disussed during the 2nd meeting: we could have a world map completely contaminated and it is a player's task to decontaminate the world from this cybersecurity threat. 
* As players travel through this world they learn things from NPCs and need to solve problems introduced in our modules upon encountering enemies.
* Upon succesful progress, world gets gradually cleansed from this threat.

**Potential problems and concerns:**
* **Heavily** time consuming (complexity).
* We are limited on time: when to integrate and polish.

___

**(Week 1-2) Things that had been done:**
* Learned the basics of Phaser3: Loading resources - images spritesheets, creating animation, using "Arcade" physics, scene managemnet, update logic.
* Created two layers of a top-down 2D styled RPG environment to explore using [Tiled](https://www.mapeditor.org "map editor").
* Loaded this environment as a JSON format.
* There are currently 3 scenes: world exploration, turn-based battle, dialog with NPC.
* Hosted the module on [itch.io](https://vladglad.itch.io/phaser-rpg?secret=6ltnySNslGpibAeh8dyZCC8PotI)
* Actual teaching process is to be implemented.

**Things to consider during our next meeting (Still relevant):**
* Team communication: should consider setting up a group chat.
* How should modules be integrated? Is my module standalone or other consepts could be included within my module? (What role does my module play in the final product?)
* Too ambitious? Follow through with this module or abandon it due to a possible complexity and instead create something simpler - like a visual novel.
