// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// this shows the current day in the header using dayjs

var now = dayjs().format('DD,MMMM,YYYY');
$('#currentDay').text(now);
console.log(now)

//

$(document).ready(function () {


  $('.saveButton').on('click', function () {
    
      var value= $(this).siblings('.description').val();
      var time= $(this).parent().attr('id');

      localStorage.setItem(time, value);

  
  });
});

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

$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

