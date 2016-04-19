function myFunction() {
    var emailVal = document.getElementById("username").value;
	var passVal = document.getElementById("password").value;
    // If the username is "testuser" and pass is "testpass"
    if (emailVal === "testuser" && passVal === "testpass") {
        document.getElementById("username").style.background="#b2ffb2";
		document.getElementById("password").style.background="#b2ffb2";
    // If the username is "testuser" and pass is wrong
    } 
	else if(emailVal === "testuser" && passVal !== "testpass")
	{
		document.getElementById("username").style.background="#b2ffb2";
		document.getElementById("password").style.background="#ff4c4c";
	}
	else {
        document.getElementById("username").style.background="#ff4c4c";
		document.getElementById("password").style.background="#ff4c4c";
    }
}
var alertButton = document.getElementById('login');
var textInput = document.getElementById('username');
var passInput = document.getElementById('password');
var siteHost = location.host;
alertButton.addEventListener('click', function(){
	if (textInput.value === "testuser" && passInput.value === "testpass")
	{
		alert("You have successfully logged in, " + textInput.value + "!");
		location.href = siteHost + 'index.html';
	}
	else if(textInput.value === "testuser" && passInput.value !== "testpass")
	{
		alert("Error: password does not match");
	}
	else{
		alert("Error: credentials not found");
	}
});
