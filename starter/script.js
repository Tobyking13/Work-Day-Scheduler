getSchedule();

var day = {
  hour9: JSON.parse(localStorage.getItem("hour9")),
  hour10: JSON.parse(localStorage.getItem("hour10")),
  hour11: JSON.parse(localStorage.getItem("hour11")),
  hour12: JSON.parse(localStorage.getItem("hour12")),
  hour13: JSON.parse(localStorage.getItem("hour13")),
  hour14: JSON.parse(localStorage.getItem("hour14")),
  hour15: JSON.parse(localStorage.getItem("hour15")),
  hour16: JSON.parse(localStorage.getItem("hour16")),
  hour17: JSON.parse(localStorage.getItem("hour17")),
};

function getTime() {
  var time = $("#currentDay");
  var date = moment().format("dddd, Do MMMM YYYY");
  var empty = "";
  time.text(empty);
  time.append(date);
}

setInterval(timeColorCode, 60000);
setInterval(getTime, 60000);

function timeColorCode() {
  var hour = moment().format("HH");
  var totalHours = $(".container").children().length;

  for (var i = 0; i < totalHours; i++) {
    var rowHour = $(".container").children().eq(i).attr("id");

    if (hour === rowHour) {
      let currentHour = $("#" + rowHour);
      currentHour.attr("class", "row present");
    } else if (hour < rowHour) {
      currentHour = $("#" + rowHour);

      currentHour.attr("class", "row future");
    } else {
      currentHour = $("#" + rowHour);
      currentHour.attr("class", "row past");
    }
  }
}

function getSchedule() {
  $("document").ready(function () {
    $("#text9").val(day.hour9);
  });
  $("document").ready(function () {
    $("#text10").val(day.hour10);
  });
  $("document").ready(function () {
    $("#text11").val(day.hour11);
  });
  $("document").ready(function () {
    $("#text12").val(day.hour12);
  });
  $("document").ready(function () {
    $("#text13").val(day.hour13);
  });
  $("document").ready(function () {
    $("#text14").val(day.hour14);
  });
  $("document").ready(function () {
    $("#text15").val(day.hour15);
  });
  $("document").ready(function () {
    $("#text16").val(day.hour16);
  });
  $("document").ready(function () {
    $("#text17").val(day.hour17);
  });
}



function setSchedule() {
  $("document").ready(function () {
    $("#btn9").click(function (e) {
      let hour9Text = $("#text9").val().trim();
      localStorage.setItem("hour9", JSON.stringify(hour9Text));
    });
    $("#btn10").click(function () {
      let hour10Text = $("#text10").val().trim();
      localStorage.setItem("hour10", JSON.stringify(hour10Text));
    });
    $("#btn11").click(function () {
      let hour11Text = $("#text11").val().trim();
      localStorage.setItem("hour11", JSON.stringify(hour11Text));
    });
    $("#btn12").click(function () {
      let hour12Text = $("#text12").val().trim();
      localStorage.setItem("hour12", JSON.stringify(hour12Text));
    });
    $("#btn13").click(function () {
      let hour13Text = $("#text13").val().trim();
      localStorage.setItem("hour13", JSON.stringify(hour13Text));
    });
    $("#btn14").click(function () {
      let hour14Text = $("#text14").val().trim();
      localStorage.setItem("hour14", JSON.stringify(hour14Text));
    });
    $("#btn15").click(function () {
      let hour15Text = $("#text15").val().trim();
      localStorage.setItem("hour15", JSON.stringify(hour15Text));
    });
    $("#btn16").click(function () {
      let hour16Text = $("#text16").val().trim();
      localStorage.setItem("hour16", JSON.stringify(hour16Text));
    });
    $("#btn17").click(function () {
      let hour17Text = $("#text17").val().trim();
      localStorage.setItem("hour17", JSON.stringify(hour17Text));
    });
  });
}

getTime();
timeColorCode();
setSchedule();


// Too much repetative code. Look for ways to simplify things
// style the page so it looks good.

// add a button to clear the hour
// when user hits enter textarea saves