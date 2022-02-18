// current day is displayed at top

var today = moment().format("dddd, MMMM, Do");
$("#currentDay").append(today);

// color-code time block 

var curHr = moment().hour();

$("textarea").each(function() {

    if ($(this).parent().attr("id") == curHr) {
        $(this).addClass("present");
    }
    else if ($(this).parent().attr("id") < curHr) {
        $(this).addClass("past");
    }
    else if ($(this).parent().attr("id") > curHr) {
        $(this).addClass("future");
    };
    
});

// get existing items from localStorage 

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

// save task to localStorage on saveBtn click 

$(".saveBtn").on("click", function() {

    var saveRow = $(this).parent().attr("id");
    var task = $(this).siblings(".description").val();

    localStorage.setItem(saveRow, task);
});
