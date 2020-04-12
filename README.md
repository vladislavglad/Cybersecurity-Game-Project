## CISC 4900 encryption game module.
**This is a first [prototype](https://vladglad.itch.io/phaser-rpg?secret=6ltnySNslGpibAeh8dyZCC8PotI) of my module made using [Phaser.io](https://phaser.io) HTML5 game framework.**

## Available Scripts (to run the game locally).
### 1. Prerequisites:
* Node.js installed on your machine.
* git clone or download this repository.

### 2. In the project directory, you can run:
#### `npm install`
Installs all dependencies necessary, namely http-server.

#### `npm start`
Starts local server and opens default browser to run the game on localhost.

## **TODO:**
* Enemy AI that chases after the player (to trigger one of 5 modules).
* Modularize the game - Create reusable parts and use JS's export/import statements to not write the code twice to controll player character.
* Context switch controller (a “scheduler” of our game modules so to speak) - one .js file that controls which game module is up now. My plan: we need to wrap each of our modules in separate <div> on a single HTML file and let JS control visibility of the divs with something like: 
  
```javascript
document.getElementById("myDiv").style.display = "none";
```

 ### **- OR -** 
 
```javascript
document.getElementById("myDiv").style.visibility = "hidden";
```
* Cosmetic adjustments to the game world/zones: textures and tilemaps (secondary priority).

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
- [ ] Basic enemy AI.
- [ ] Character invincibility frames when hit/collided with an enemy.

**__________________________________________________________________________________________________________________________________**

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

**__________________________________________________________________________________________________________________________________**

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
