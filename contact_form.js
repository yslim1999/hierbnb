function contact_check(){

        var fname = document.getElementById("fname").innerHTML;
        var lname = document.getElementById("lname").innerHTML;
        var country = document.getElementById("country").innerHTML;
        var subject = document.getElementById("subject").innerHTML;

        if(typeof fname !== "undefined" && fname.value == '' && typeof lname !== "undefined" && lname.value == '' && typeof country !== "undefined" && country.value == '' && typeof subject !== "undefined" && subject.value == ''){
            return;
        }
        alert("Thank you, We have received your feedback. We will get in touch with you soon.")
        document.getElementById('fname').value = "";
        document.getElementById('lname').value = "";
        document.getElementById('email').value = "";
        document.getElementById('country').value = "";
        document.getElementById('subject').value = "";
}