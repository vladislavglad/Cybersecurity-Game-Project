

// setup for basic screen size of game (before integrating game)
var config =
{
	parent: "gameCanvas",
	type: Phaser.AUTO,
	width: 1024,
	height: 600,
	backgroundColor: "#000000",
	scene: [ MainMenu, StoryScene,  Event_1, Event_2, Event_3, Event_4, Event_5,
				Event_6, Event_7, Event_8, Event_9, Event_10, Event_11, Event_12, EndingMenu
			 ]

};

var game = new Phaser.Game(config);