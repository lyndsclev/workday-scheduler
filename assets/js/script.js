// current day is displayed at the top of the calendar 

var today = moment().format("dddd, MMMM Do");
$("#currentDay").append(today);

// scroll down for timeblocks for standard business hours (9-5)

// each timeblock is color-coded for past, present, or future 

// open timeblock to enter an event 

// save event entered in localStorage 

// refreshing the page - events stay 