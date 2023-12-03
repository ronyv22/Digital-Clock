/* Create a Digital clock */

/*
Step 1: In HTML, set up structure for clock appearance.
Step 2: Style clock face with CSS.
Step 3: In JavaScript, have the clock display the current date and time and update every second.


The first thing I did was defined a function called updateTime. Within it, I declared a variable and assigned a date object method that will be used to get the current date and time.
To return the hour minute and second of the date object, I declared several variables that the get date methods will be assigned to. I also wanted to return the name of the month and day 
on the clock so I assigned arrays containing them to variables the method will cycle through. To get the current day out of the week and month. I declared variables and assigned the 
getday and date methods.

To determine if the current hour is in am or pm I used conditional statements. It checks if the current hour is 12 or more, if true, it means it is the afternoon or evening 'PM'. 
Because the getHour method returns the hours of a date as a number (0-23) = 24hours, I subtracted the current hour by 12. This will give you the actual hour, essentially 
converting the 24 hour format into a 12 hour one split into AM and PM. Example: 19(current hour) - 12 = 7pm. Else, if the current hour is 0 then it will be set to 12, making it midnight 'AM'.  

I wanted to update and display the text on the face of the digital clock in html doc. To do that, I used the querySelector method to return #time from the html doc and with the 
textContent property to return the hour, minutes, the colon symbols, the seconds and the meridiem in a concatenated string.

I did the samething for the day and day of the week to return the month, date, and day of the week.


To display the current hour, minute and second as a double digit format when the update function is called, I defined the function with t representing the time componenets (hr, min, sec) as a parameter.
I created a conditional statement that will return a 0 as the leading digit on the current (hr, min, sec) if it is less than 10. If not true then the current time component will return as is.

Finally, I used the setInterval method to update the updateTime function every second.

*/




//Function called to make new date object and retrieve the current hr, min and sec//
function updateTime() {
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let meridiem = "";

 
//Arrays containing the names of weekday and month//
  let weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  let month = ['January','February','March','April','May','June','July','August','September','October','November','December'];


//Get the current day and month//
  let dayOfWeek = weekday[date.getDay()];
  let dayOfMonth = date.getDate();


//Conditions to determine if current hour is in AM or PM//
  if (hour >= 12) {
    meridiem = "PM";
    if (hour > 12) hour -= 12;   
  } else {
    meridiem = "AM";
    if (hour == 0) hour = 12;
  }


//Ensures that the hour, minute and seconds are always two digits when the function 'update' is called//
  hour = update(hour);
  minute = update(minute);
  second = update(second);


//Updates and displays the text inside the html element with the ID of the div element and queryselector//
  document.querySelector('#time').textContent = hour + ":" + minute + ":" + second + " " + meridiem;
  document.querySelector('.day').textContent = month[date.getMonth()] + ' ' + dayOfMonth + ', ' + date.getFullYear();
  document.querySelector('.dayOfWeek').textContent = dayOfWeek;


//Calls the updateTime function again after on second//
  setInterval(updateTime, 1000);
}


//Function will add a 0 as leading digit to display two digit format if the hr min and sec is less than 10//
function update(t) {
  if (t < 10) {
    return "0" + t;
  } else {
    return t;
  }
}


//Call function//
updateTime();