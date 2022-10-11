'use strict';

// Date : 11/10/22
// Day : Tuesday

const dateUIElm = document.querySelector('#dateUI');
const bodyElm = document.querySelector('body');

const allImgElm = [
	"url('image/b.jpg')",
	"url('image/default-backround.jpg')",
	"url('image/img-1.jpg')",
	"url('image/img-2.jpg')",
	"url('image/img-3.jpg')",
	"url('image/img-4.jpg')",
	"url('image/img-5.jpg')",
	"url('image/img-6.jpg')",
	"url('image/img-7.jpg')",
	"url('image/img-8.jpg')",
	"url('image/img-9.jpg')",
	"url('image/img-10.jpg')",
	"url('image/img-11.jpg')",
];

// dateUIElm.style.backgroundImage = allImgElm[1];
function randomNumber(arr)
{
	let receveIndexNumber = [];

	for(let i = 1; i <= arr.length; i++)
	{
		receveIndexNumber.push(i)
	}

	console.log(...receveIndexNumber);
	
	// console.log(Math.ceil(Math.random() * 3))
}
randomNumber(allImgElm)



// document.body.style.backgroundImage = "url('img_tree.png')";

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


