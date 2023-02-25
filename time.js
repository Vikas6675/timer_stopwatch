// Countdown Timer
var countdownInterval;

function startCountdown() {
	var minutes = document.getElementById("countdown-minutes").value;
	var seconds = minutes * 60;

	countdownInterval = setInterval(function() {
		var countdown = document.getElementById("countdown");
		countdown.innerHTML = "Time Remaining: " + formatTime(seconds);

		if (seconds == 0) {
			clearInterval(countdownInterval);
			countdown.innerHTML = "Time's Up!";
		}

		seconds--;
	}, 1000);
}

function formatTime(time) {
	var minutes = Math.floor(time / 60);
	var seconds = time % 60;

	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	return minutes + ":" + seconds;
}


// Stopwatch
var stopwatchInterval;
var stopwatchTime = 0;

function startStopwatch() {
	stopwatchInterval = setInterval(function() {
		stopwatchTime++;
		var stopwatch = document.getElementById("stopwatch");
		stopwatch.innerHTML = formatTime(stopwatchTime);
	}, 1000);
}

function stopStopwatch() {
	clearInterval(stopwatchInterval);
}

function resetStopwatch() {
	stopwatchTime = 0;
	document.getElementById("stopwatch").innerHTML = "0:00";
}
