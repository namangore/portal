
localStorage.setItem("kinshukthapa23@gmail.com","password");




function login()
{
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    if(localStorage.getItem(username)==password)
    {
        alert("Login Successfull.");
        localStorage.setItem("user",username);
        window.location.href="/project.html";
    }
    else{
        alert("Incorrect login");
        document.getElementById("user").value="";
        document.getElementById("user").value="";
    }
}