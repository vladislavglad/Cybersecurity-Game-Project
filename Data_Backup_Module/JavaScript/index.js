function startTimer()
{
	var time = 60;

	setInterval(function(){

		time -=1;

		if(time > 0.0)
		{
			var text = document.getElementById("timer");
			text.innerHTML = "Timer: " + time;
		}
		else
		{
			window.location.href = "./phaser3_game/game.html";
		}

	}, 1000);
}