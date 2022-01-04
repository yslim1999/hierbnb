function contact_check(){

        var fname = document.getElementById("fname");
        var lname = document.getElementById("lname");
        var country = document.getElementById("country");
        var subject = document.getElementById("subject");

        if(typeof fname !== "undefined" && fname.value == '' && typeof lname !== "undefined" && lname.value == '' && typeof country !== "undefined" && country.value == '' && typeof subject !== "undefined" && subject.value == ''){
            return;
        }
        document.getElementById("whole_container").style.visibility = "hidden";
        document.getElementById("status_thing").innerHTML = "Thank you " + fname.valueOf() +", We have received your feedback. We will get in touch with you soon."
        document.getElementById("feedbackbox").style.display = "block";
}