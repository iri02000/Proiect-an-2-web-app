

function Congrats(){
    alert(" Congrats! You have just made your account!")
}

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
        Congrats()
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
