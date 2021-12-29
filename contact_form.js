function contact_check(){
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var country = document.getElementById("country");
    var subject = document.getElementById("subject");

    if (!fname.checkValidity()) {
        document.getElementById("error").innerHTML = "Hello Everyone";
    }
}