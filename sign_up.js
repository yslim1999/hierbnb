function store(){ //stores items in the localStorage
    var uname = document.getElementById('uname').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pword').value; //gets the key from the user
    console.log("Value stored.");
    const acc = {
        username: uname,
        email: email,
        password: pass
    }
    window.localStorage.setItem(pass,JSON.stringify(acc));  
    document.getElementById("status").innerHTML = "Successful Sign up! You may sign in now."
    //converting object to string
    e.preventDefault();
}

function retrieveRecords(){ //retrieves items in the localStorage
    console.log("retrieve records");
     var key = document.getElementById('retrieveKey').value;
    var records = window.localStorage.getItem(key);
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}