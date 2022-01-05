function storeBooking(){ //stores bookings in the localStorage
    var number = document.getElementById('number').value;
    var guests = document.getElementById('guests').value;
    var checkIn = document.getElementById('check-in').value;
    var checkOut = document.getElementById('check-out').value;
    var location = document.getElementById('location').value; 
    var requests = document.getElementById('requests').value;
    document.getElementById('number').value = "";
    document.getElementById('guests').value = "";
    document.getElementById('check-in').value = "";
    document.getElementById('check-out').value = "";
    document.getElementById('location').value = "";
    document.getElementById('requests').value = "";
    console.log("Booking stored.");

    console.log(checkIn);
    console.log(checkOut);
    if(window.localStorage.getItem(window.localStorage.getItem("log_status")+"bookings")){
        var bookings = window.localStorage.getItem(window.localStorage.getItem("log_status")+"bookings");
        bookings = bookings.concat("<tr><th>"+location+"</th><td>"+guests+"</td><td>"+checkIn+"</td><td>"+checkOut+"</td><td>Team member is reviewing your booking and will call you as soon as possible</td></tr>");
        window.localStorage.setItem((window.localStorage.getItem("log_status")+"bookings"),bookings);
        console.log("doing this");
    }
    else{
        var tableHeaders = '<table class="table table-striped" style="color: white;"><thead style="background-color: rgb(41, 40, 40);"><tr><th scope="col">Location</th><th scope="col">Number of guests</th><th scope="col">Check-in Date</th><th scope="col">Check-out date</th><th scope="col">Comments</th></tr></thead><tbody style="background-color: white;color: black;">';
        var booking = "<tr><th>"+location+"</th><td>"+guests+"</td><td>"+checkIn+"</td><td>"+checkOut+"</td><td>Team member is reviewing your booking and will call you as soon as possible</td></tr>";
        window.localStorage.setItem((window.localStorage.getItem("log_status")+"bookings"),tableHeaders.concat(booking));
        console.log("doing that")
    }

}

function loadBookings(){

    console.log("working")
    if(window.localStorage.getItem((window.localStorage.getItem("log_status")+"bookings"))){
        var bookings = window.localStorage.getItem((window.localStorage.getItem("log_status")+"bookings"));
        console.log(bookings.concat("</tbody></table>"));
        document.getElementById("displayBookings").innerHTML= bookings.concat("</tbody></table>");
    }

    if(!window.localStorage.getItem("log_status")){
        document.getElementById("makeBooking").innerHTML='<button id="makeBooking" class="submit_button" data-toggle="tooltip" data-placement="top" title="Please log in to place a booking"><span>Submit</span></button>'
        document.getElementById("yourBookings").innerHTML= '<h2>View Your Bookings</h2><p>View all past, present and future bookings including pictures from your past events/stays.</p><hr><h3 style="text-align: center;padding-bottom: 10px;">Your Bookings</h3><div id="displayBookings" class="row" style="padding: 20px;"><div class="col-sm-4"><img src="home_svgs/undraw_booking_re_gw4j.svg" alt=""></div><div class="col-sm-8"><h4>Log in to view your bookings.</h4><p>Click <a href="signUp.html">here</a> to log in.</p></div></div><hr><h3 style="text-align: center;padding: 10px">Your Pictures</h3><div class="row" style="padding: 20px;"><div class="col-sm-4"><img src="home_svgs/undraw_photo_session_clqr.svg" alt=""></div><div class="col-sm-8"><h4>You have no pictures to view</h4><p>Talk to one of our team members for more information about our photography services.</p></div></div>';
    }

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

    var fromDate;
    $('#check-in').on('change',function(){
      fromDate=$(this).val();
      $('#check-out').prop('min',function(){
        return fromDate;
      })
    });

    var toDate;
    $('#check-out').on('change',function(){
        toDate=$(this).val();
        $('#check-in').prop('max',function(){
          return toDate;
        })
      });
}
