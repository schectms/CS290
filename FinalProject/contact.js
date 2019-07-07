document.getElementById("form").addEventListener("submit", response);
    
function response() {
if (document.getElementById("name").value == "" ||document.getElementById("email").value == "" ||
document.getElementById("comment").value == "")                             
    { 
        alert("Please fill out all required fields and submit."); 
	 event.preventDefault();
        return false; 
    } 
    alert("Thanks for reaching out!");
	 event.preventDefault();
	return false;
}