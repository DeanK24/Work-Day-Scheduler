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

    $(".row").each(function (i) {
      var timeSlot = parseInt($(".row")[i].id)
      var timeSlotId = $(".row")[i].id

      if (timeSlot < currentTime) {

        $("#" + timeSlotId).addClass("past");
     
      } else if (timeSlot > currentTime) {

        $("#" + timeSlotId).addClass("future")

      } else if (timeSlot === currentTime) {

        $("#" + timeSlotId).addClass("present")
      };
    });
  }

  $("#8 .description").val(localStorage.getItem("8"));
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));



  changeColor();
  
});
