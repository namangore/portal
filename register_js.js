function register()
{
    var email = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    if(pass.length > 6){
        if(localStorage.getItem(email)==null)
        {
            localStorage.setItem(email,pass);   
        }
        else{
        alert("User already exists.");
        return;
        }
    }
    else{
            alert("Password should be more than 6 letters.");
            return; 
    }
    alert("User registered successfully.");
}