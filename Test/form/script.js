function validateForm() {

    //getting the values of the form fields
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const web = document.getElementById('web').value;
    const password = document.getElementById("password").value;
    const rePassword = document.getElementById("rePassword").value;
    const tick = document.getElementById("tick");

    
    // Checking if the fname field is empty
    if (fname.trim() === "") {
        alert("First Name must be filled out");
        return false;
    }

    var regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(fname)) {
        alert("First Name can only contain letters and spaces");
        return false;
    }
    
    //LAST NAME CHECKING
    if (lname.trim() === "") {
        alert("Last Name must be filled out");
        return false;
    }

    var regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(lname)) {
        alert("Last Name can only contain letters and spaces");
        return false;
    }

    // EMAIL FIELD CHECKING
    if (email.trim() === "") {
        alert("Email must be filled out");
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return false;
    }

    // PHONE NUMBER FIELD CHECKING
    if (phone.trim() === "") {
        alert("Phone number must be filled out");
        return false;
    }

    var phoneRegex = /^\+?[0-9]{1,4}?[-.\s]?[0-9]{1,3}?[-.\s]?[0-9]{3,4}?[-.\s]?[0-9]{3,4}$/;
    if (!phoneRegex.test(phone)) {
        alert("Invalid phone number format");
        return false;
    }

    //WEBSITE FIELD CHECKING
    if (web.trim() === "") {
        alert("Website address must be filled out");
        return false;
    }
    
    var urlRegex = /^(https?:\/\/)?([a-zA-Z0-9.-]+)(\.[a-zA-Z]{2,})(\/.*)?$/;
    if (!urlRegex.test(web)) {
        alert("Invalid web address format");
        return false;
    }
    
    //PASSWORD FIELD CHECKING
    if (password === "") {
        alert("Password field must be filled out");
        return false;
    }
    
    if(password.length < 8) {
        alert("Password must be atleast 8 characters long");
        return false;
    }

    //RE-TYPE PASSWORD FIELD CHECKING
    if(rePassword === "") {
        alert("Re-type Password must be filled out");
        return false;
    }
    
    if(password != rePassword) {
        alert("Passwords do not match");
        return false;
    }

    //CHECK THE CHECKBOX
    if(!tick.checked) {
        alert("Check the box");
        return false;
    }

    alert("Form submitted successfully!!");
    return true;
}

