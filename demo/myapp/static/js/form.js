function validateForm() {
    let name = document.getElementsByName("userName");
    let pswd = document.getElementsByName("userPswd");
    let email = document.getElementsByName("userEmail");
    let dob = document.getElementsByName("userDOB");
    let desc = document.getElementsByName("userDesc");
    if (name[0].value == ""){
        alert("Invalid Username!");
        return false;
    }
    if (pswd[0].value == ""){
        alert("Invalid Password!");
        return false;
    }
    if (pswd[0].value != pswd[1].value){
        alert("Passwords do not match!");
        return false;
    }
    if (email[0].value == ""){
        alert("Invalid Email!");
        return false;
    }
    if (dob[0].value == ""){
        alert("Invalid Date of Birth!");
        return false;
    }
    if (desc[0].value.length > 250){
        alert("Description should be shorter than 250 chars!");
        return false;
    }
    return true;
}