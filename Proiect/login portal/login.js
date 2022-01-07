


function Return(){
    console.log ("Success");
}

//login 
function validateLogin(){
  var y = document.forms["Myform"]["email"].value;
  var z = document.forms["Myform"]["password1"].value;
  
  if (y=="" && z=="")
    {
        alert("Complete all the fields!")
    }
  else if (y == "" || y == null) 
  {
      alert("Email must be filled out");
       return false;
    }
     else if (z == "" || z == null) 
  {
      alert("Password must be filled out");
       return false;
    }
    else 
    {
        signup()
    }
}

function validateCancelLogin(){
  var y = document.forms["Myform"]["email"].value;
  var z = document.forms["Myform"]["password1"].value;
  
  if (y=="" && z=="")
    {
        alert("Complete all the fields!")
    }
    else 
    {
        ShowAlert()
    }
}


function signup() {
    const data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password1").value
    }

    console.log(data)

    url = "http://localhost:3002/login"
    params = {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    fetch(url, params)
        .then(ifSuccess)
        .then(newUserCreated)
        .catch(ifError)
}

function ifSuccess(response) {
    console.log("USER logged in.");
}

function ifError(err) {
    console.log("Error");
}

function newUserCreated(response) {
    console.log("Logged")
}