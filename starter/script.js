function getTime() {
  var time = $("#currentDay");
  var date = moment().format("dddd, Do MMMM YYYY");
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

getTime();
timeColorCode();

// get value from input text
// store value into local storage
// get value from local storage and set input value to it

// make a function to check current time and set the text boxes to red for current time, grey for past and green for future. I can use CSS to change this.
