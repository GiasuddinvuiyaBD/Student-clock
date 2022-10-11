'use strict';

// Date : 11/10/22
// Day : Tuesday

const dateUIElm = document.querySelector('#dateUI');

function dateFun()
{
	const date = new Date();
	
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	let amOrPm = 'am';
	// condition checking start here
	const currentTime = setTimeCondition(hours,minutes,seconds,amOrPm);

	return currentTime;
}

function setTimeCondition(hours,minutes,seconds,amOrPm)
{
	amOrPm = amOrPm > 12 ? "pm" : amOrPm;
	hours = hours > 12 ? hours - 12 :  hours; 
	// adding 0 with number 
	hours = hours < 10 ? '0' + hours : hours;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	return `${hours}:${minutes}:${seconds} ${amOrPm}`;
}


const stopInterval = setInterval(() => 
{
	// console.log();
	// show time to ui 
	dateUIElm.innerHTML = dateFun();

},1000);

// clearInterval(stopInterval)


