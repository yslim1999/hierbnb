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
    if(window.localStorage.getItem("bookings")){
        var bookings = window.localStorage.getItem("bookings");
        bookings = bookings.concat("<tr><th>"+location+"</th><td>"+checkIn+"</td><td>"+checkOut+"</td><td>Team member is reviewing your booking and will call you as soon as possible</td></tr>");
        window.localStorage.setItem("-bookings",bookings);
        console.log("doing this")
    }
    else{
        var tableHeaders = '<table class="table table-striped" style="color: white;"><thead style="background-color: rgb(41, 40, 40);"><tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr></thead><tbody style="background-color: white;color: black;">';
        var booking = "<tr><th>"+location+"</th><td>"+checkIn+"</td><td>"+checkOut+"</td><td>Team member is reviewing your booking and will call you as soon as possible</td></tr>";
        window.localStorage.setItem("bookings",tableHeaders.concat(booking));
        console.log("doing that")
    }

    console.log(window.localStorage.getItem("bookings"))
}