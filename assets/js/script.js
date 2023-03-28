$(function () 
{
  //calls the  saveBtn class in to a jquerry event listener
  $(".saveBtn").on("click", function () 
  {
    //log to make sure event listener is working
    console.log("click click boom");
    //we called the siblings of textarea targeting them so that we can save whats written within the bar
    const val = $(this).siblings("textarea").eq(0).val();
    //calling the unique id attribute from the current elements parent
    const id = $(this).parent().attr("id");
    localStorage.setItem(id, val); //storing within local storage
  });
  //initializing dayjs for current date and time
  const today = dayjs().format("MM/DD/YYYY ");
  const currentHour = dayjs().format(" h:mm:A");
  const currentTime = dayjs().hour();
  //prints header using jquerry
  $('header').append(today);
  $('header').append(currentHour);
  //calling the attribute id
  const id = $(this).attr("id");
  //asking local storage to retrieve anything thats stored in id
  const val = localStorage.getItem(id);
  //find the textarea and set the value to what we have within local storage
  $(this).children("textarea").eq(0).val(val);


  $(".time-block").each(function () 
  {
    //saving time blocks
    var hour = parseInt($(this).attr("id").split("-").pop());

    //comparing values below
    if (hour < currentTime) 
    {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }
    else if (hour === currentTime) 
    {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    }
    else 
    {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
    //calling the attribute id
    const id = $(this).attr("id");
    //asking local storage to retrieve anything thats stored in id
    const val = localStorage.getItem(id);
    //find the textarea and set the value to what we have within local storage
    $(this).children("textarea").eq(0).val(val);
  });
});
