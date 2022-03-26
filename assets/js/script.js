// Display current day
var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todayDate);

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var description = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, description);
  });

  function changeColor() {
    var currentTime = moment().hour();

    $(".row").each(function () {
      var timeSlot = parseInt($(this).attr("id").split("hour")[1]);

      if (timeSlot < currentTime) {
        $(this)
        .removeClass("future");
        $(this)
        .removeClass("present");
        $(this)
        .addClass("past");
      } else if (timeSlot === currentTime) {
        $(this)
        .removeClass("past");
        $(this)
        .removeClass("future");
        $(this)
        .addClass("present");
      } else {
        $(this)
        .removeClass("present");
        $(this)
        .removeClass("past");
        $(this)
        .addClass("future");
      }
    });
  }




  $("#8a .description").val(localStorage.getItem("8a"));
  $("#9a .description").val(localStorage.getItem("9a"));
  $("#10a .description").val(localStorage.getItem("10a"));
  $("#11a .description").val(localStorage.getItem("11a"));
  $("#12p .description").val(localStorage.getItem("12p"));
  $("#1p .description").val(localStorage.getItem("1p"));
  $("#2p .description").val(localStorage.getItem("2p"));
  $("#3p .description").val(localStorage.getItem("3p"));
  $("#4p .description").val(localStorage.getItem("4p"));
  $("#5p .description").val(localStorage.getItem("5p"));



  changeColor();
  
});
