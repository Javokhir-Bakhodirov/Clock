const hoursArrow = document.querySelector(".hours");
const minutesArrow = document.querySelector(".minutes");
const secondsArrow = document.querySelector(".seconds");
const deg = 6;
let alarmTime = null;

function setDate() {
	const now = new Date();

	const seconds = now.getSeconds() * deg;
	const minutes = now.getMinutes() * deg;
	const hours = now.getHours() * 30;

	hoursArrow.style.transform = `rotate(${hours + minutes / 12}deg)`;
	minutesArrow.style.transform = `rotate(${minutes}deg)`;
	secondsArrow.style.transform = `rotate(${seconds}deg)`;

	checkAlarm(now);
}

function setAlarm() {
	const alarmInput = document.getElementById("alarm-time").value;
	if (alarmInput) {
		const [alarmHours, alarmMinutes] = alarmInput.split(":").map(Number);
		const now = new Date();
		alarmTime = new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate(),
			alarmHours,
			alarmMinutes,
			0
		);
		document.getElementById("alarm-message").innerText =
			"Alarm set for " + alarmInput;
	}
}

function checkAlarm(now) {
	if (alarmTime) {
		if (
			now.getHours() === alarmTime.getHours() &&
			now.getMinutes() === alarmTime.getMinutes() &&
			now.getSeconds() === alarmTime.getSeconds()
		) {
			triggerAlarm();
		}
	}
}

function triggerAlarm() {
	document.getElementById("alarm-message").innerText = "Alarm ringing!";
	alarmTime = null; // Reset the alarm
	alert("Wake up! It's time!");
}

setInterval(setDate, 1000);
setDate();
