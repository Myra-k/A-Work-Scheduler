

// this shows the current day in the header using dayjs

var now = dayjs().format('dddd, MMMM D, YYYY');
$('#currentDay').text(now);
console.log(now)

//added .ready so the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {

//below is the save button and i am adding local storage


  $('.saveButton').on('click', function () {
    
      var value= $(this).siblings('.description').val();
      var time= $(this).parent().attr('id');

      localStorage.setItem(time, value);

  
  });
});

//below is for the color coded blocks for past,present and future

  function hours() {

    var currHour= dayjs().hour();

    $('.time-block').each(function () {
      var hourB= parseInt($(this).attr('id').split('-')[1]);

      if (hourB < currHour) {
        $(this).addClass('past');
      } else if (hourB === currHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
};

hours();

setInterval(hours, 15000);

// below are the event listeners

$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

