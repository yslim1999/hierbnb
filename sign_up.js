function store(){ //stores items in the localStorage
    var uname = document.getElementById('uname').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pword').value; //gets the key from the user
    var pass_ver = document.getElementById('confirmPword').value;
    console.log("Value stored.");
    var acc = pass
    if(uname.valueOf() == "log_status"){
        alert("Username not accepted. Please try to use a different username.")
        return;
    }

    if(pass_ver.valueOf() != pass.valueOf()){
        alert("Passwords are not matching. Please re-enter matching passwords.")
        return;
    }
    document.getElementById('uname').value = "";
    document.getElementById('email').value = "";
    document.getElementById('pword').value = "";
    document.getElementById('confirmPword').value = "";
    window.localStorage.setItem(uname,JSON.stringify(acc.hashCode()));  
    alert("Successful Sign up! You may sign in now.")
    //converting object to string
}

function retrieveRecords(){ //retrieves items in the localStorage
    console.log("retrieve records");
    var key = document.getElementById('uname_').value;
    var pass = document.getElementById('pword_').value;
    if (window.localStorage.getItem(key) == null){
        alert("User does not exist. Please try again or sign up if you do not have an existing account.")
        return;
    }
    document.getElementById('uname_').value = "";
    document.getElementById('pword_').value = "";
    var record = JSON.parse(window.localStorage.getItem(key));
    if (record.valueOf() ==  pass.hashCode().valueOf()){
        window.localStorage.setItem("log_status", key);
        alert("You have successfully signed in.")
    }
}

function sign_out(){
    window.localStorage.removeItem("log_status");
    alert("You are now logged out.")
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

  function checkIfCaseExists() {
    var form_valid = false;
    //whatever condition you want to check
    if(true){
      form_valid = true;
    }

    return form_valid;
  }