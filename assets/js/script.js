// current day is displayed at the top of the calendar 

var today = moment().format("dddd, MMMM Do");
$("#currentDay").append(today);

// each timeblock is color-coded for past, present, or future 

var curHr = moment().hour();

$("textarea").each(function(index, element) {

    if (this.id == curHr) {
        $(this).addClass("present");
    }
    else if (this.id < curHr) {
        $(this).addClass("past");
    }
    else if (this.id > curHr) {
        $(this).addClass("future");
    };
}); 

// save task to local storage on saveBtn click 

$(".saveBtn").on("click", function() {

    var saveRow = $(this).parent().attr("id");
    var task = $(this).siblings(".description").val();

    localStorage.setItem(saveRow, task);
});

// get items from localStorage

