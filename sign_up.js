function store(){ //stores items in the localStorage
    var uname = document.getElementById('uname').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pword').value; //gets the key from the user
    var pass_ver = document.getElementById('confirmPword').value;
    document.getElementById('uname').value = "";
    document.getElementById('email').value = "";
    document.getElementById('pword').value = "";
    document.getElementById('confirmPword').value = "";
    console.log("Value stored.");
    var acc = pass
    if(pass_ver.valueOf() != pass.valueOf()){
        document.getElementById("status").innerHTML = "Passwords are not matching. Please re-enter matching passwords."
        return;
    }
    window.localStorage.setItem(uname,JSON.stringify(acc.hashCode()));  
    document.getElementById("status").innerHTML = "Successful Sign up! You may sign in now."
    //converting object to string
}

function retrieveRecords(){ //retrieves items in the localStorage
    console.log("retrieve records");
    var key = document.getElementById('uname_').value;
    var pass = document.getElementById('pword_').value;
    document.getElementById('uname_').value = "";
    document.getElementById('pword_').value = "";
    if (window.localStorage.getItem(key) == null){
        document.getElementById("status_sign_in").innerHTML = "User does not exist. Please try again or sign up if you do not have an existing account."
        return;
    }
    var record = JSON.parse(window.localStorage.getItem(key));
    if (record.valueOf() ==  pass.hashCode().valueOf()){
        document.getElementById("status_sign_in").innerHTML = "You have successfully signed in."
        var paragraph = document.createElement("p");
        var infor = document.createTextNode(record);
        paragraph.appendChild(infor);
        var element = document.getElementById("status_sign_in");
        element.appendChild(paragraph);
    }
}

String.prototype.hashCode = function() {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr   = this.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };