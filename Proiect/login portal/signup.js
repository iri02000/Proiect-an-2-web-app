console.log("Hii")

function ShowAlert(){
    alert(" Warning! You are about to reset your inputs. Are you sure you want to continue?!")
}

function Congrats(){
    alert(" Congrats! You have just made your account!")
}

function Return(){
    console.log("Success");
}

function validateCancel(){
  var x = document.forms["Myform"]["fname"].value;
  var y = document.forms["Myform"]["email"].value;
  var z = document.forms["Myform"]["password1"].value;
  var w = document.forms["Myform"]["password2"].value;
  
  if (x== "" && y=="" && z=="" && w=="")
    {
        alert("Complete all the fields!")
    }
    else 
    {
        ShowAlert()
    }

}

function validateSignup(){
  var x = document.forms["Myform"]["fname"].value;
  var y = document.forms["Myform"]["email"].value;
  var z = document.forms["Myform"]["password1"].value;
  var w = document.forms["Myform"]["password2"].value;
  var o = document.forms["Myform"]["username"].value;
  
  if (x== "" && y=="" && z=="" && w=="" && o=="")
    {
        alert("Complete all the fields!")
    }
    else if (x == "" || x == null) 
    {
      alert("Full Name must be filled out");
       return false;
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
    else if (w == "" || w == null) 
  {
      alert("Check Password must be filled out");
       return false;
    }
    else if (z !==w)
    {
        alert("Password must match the Check Password. ")
    }
    else if (o == "")
    {
        alert("Write the username!")
    }
    
    else 
    {
        signup()
        Congrats()
    }

}

function signup() {
    const data = {
        name: document.getElementById("fname").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password1").value
    }

    console.log(data)

    url = "http://localhost:3002/signup"
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
    console.log("USER CREATED.");
}

function ifError(err) {
    console.log("Error");
}

function newUserCreated(response) {
    console.log("New user")
}