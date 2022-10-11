'use strict';

// Date : 11/10/22
// Day : Tuesday
(function()
{
	const dateUIElm = document.querySelector('#dateUI');
	const bodyElm = document.querySelector('body');
	const dateElm = document.querySelector('.dates');

	// ----------------------------- Time setting start here -----------------------------
	// date function
	function dateFun()
	{
		const date = new Date();
		
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		let amOrPm = 'am';
		// condition checking start here
		const currentTime = setTimeCondition(hours,minutes,seconds,amOrPm);


		// randomNumber(allImgElm,bodyElm);
		return currentTime;
	}
	// i just separate my code for cleane coding
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
	// ----------------------------- Time setting end here -----------------------------


	// ------------------------- date start here-----------------------------
	function settingDate()
	{
		const today = new Date();
		let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	    let curWeekDay = days[today.getDay()];
	    let curDay = today.getDate();
	    let curMonth = months[today.getMonth()];
	    let curYear = today.getFullYear();
	 
	    let dates = `${curWeekDay} ${curDay} ${curMonth} ${curYear}`;
	    dateElm.innerHTML = dates;
	}
	 let time = setTimeout(() => 
	{
	 settingDate() 
	}, 500);
	// ------------------------- date stting end here -----------------------------


	// ------------------------------------Randomly value change start here -------------------------------
	const allImgElm = ["url('image/b.jpg')","url('image/default-backround.jpg')","url('image/img-1.jpg')","url('image/img-2.jpg')","url('image/img-3.jpg')","url('image/img-4.jpg')","url('image/img-5.jpg')","url('image/img-6.jpg')","url('image/img-7.jpg')","url('image/img-8.jpg')","url('image/img-9.jpg')","url('image/img-10.jpg')","url('image/img-11.jpg')"];
	// dateUIElm.style.backgroundImage = allImgElm[1];
	function randomNumber(arr,bodyBackround)
	{
		let getLength = arr.length;
		// i have generated random number
		let randomNum = Math.ceil(Math.random() * getLength);
		// applying backround image to the ui
		// bodyBackround.style.backgroundImage = arr[randomNum];
		bodyBackround.style.backgroundImage = arr[randomNum];
	}
	//-----------------------------
	//	Create another date function for changing bodyBackround
	//-----------------------------
	function anotherDateFun()
	{
		const date = new Date();
		
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		let amOrPm = 'am';
		// condition checking start here
		const currentTime = anotherSetConditionFun(hours,minutes,seconds,amOrPm);

		// ------------------------------------
			randomNumber(allImgElm,bodyElm);
		// ------------------------------------
		return currentTime;
	}

	// another condition funciton 
	// i just separate my code for cleane coding
	function anotherSetConditionFun(hours,minutes,seconds,amOrPm)
	{
		amOrPm = amOrPm > 12 ? "pm" : amOrPm;
		hours = hours > 12 ? hours - 12 :  hours; 
		// adding 0 with number 
		hours = hours < 10 ? '0' + hours : hours;
		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;
		return `${hours}:${minutes}:${seconds} ${amOrPm}`;
	}

	// another setInterval function
	const anotherSetInter = setInterval(() => 
	{
		// after five minutes later it will change it's background
		dateUIElm.innerHTML = anotherDateFun();
		
	},50000);
	// ------------------------------------Randomly value change End here -------------------------------
})()