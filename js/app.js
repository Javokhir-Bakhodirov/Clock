const hoursArrow = document.querySelector(".hours");
const minutesArrow = document.querySelector(".minutes");
const secondsArrow = document.querySelector(".seconds");
const deg = 6;

function setDate() {
	const now = new Date();

	const seconds = now.getSeconds() * deg;
	const minutes = now.getMinutes() * deg;
	const hours = now.getHours() * 30;

	hoursArrow.style.transform = `rotate(${hours + minutes / 12}deg)`;
	minutesArrow.style.transform = `rotate(${minutes}deg)`;
	secondsArrow.style.transform = `rotate(${seconds}deg)`;
}
setInterval(setDate, 1000);
setDate();

console.log();
