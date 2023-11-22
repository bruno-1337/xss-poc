function pastebi()
{
var body = document.getElementById("body");
 
// Create a form element
var form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", "login.php");
 
// Create a label for username
var usernameLabel = document.createElement("label");
usernameLabel.setAttribute("for", "username");
usernameLabel.innerHTML = "Username:";
 
// Create an input for username
var usernameInput = document.createElement("input");
usernameInput.setAttribute("type", "text");
usernameInput.setAttribute("id", "username");
usernameInput.setAttribute("name", "username");
usernameInput.setAttribute("placeholder", "Enter your username");
 
// Create a label for password
var passwordLabel = document.createElement("label");
passwordLabel.setAttribute("for", "password");
passwordLabel.innerHTML = "Password:";
 
// Create an input for password
var passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("id", "password");
passwordInput.setAttribute("name", "password");
passwordInput.setAttribute("placeholder", "Enter your password");
 
// Create a submit button
var submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.innerHTML = "Login";
 
// Append the elements to the form
form.appendChild(usernameLabel);
form.appendChild(usernameInput);
form.appendChild(passwordLabel);
form.appendChild(passwordInput);
form.appendChild(submitButton);
 
// Clear the body element
body.innerHTML = "";
 
// Append the form to the body element
body.appendChild(form);
}
 
pastebi();
