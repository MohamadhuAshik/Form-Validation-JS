
function validate() {
  var fName = document.getElementById("fName");
  var lName = document.getElementById("lName");
  var mobile = document.getElementById("number");
  var email = document.getElementById("email");
  var nPass = document.getElementById("nPass");
  var cPass = document.getElementById("cPass");

  if (fName.value == "" || lName.value == "" || email.value == "" || nPass.value == "" || cPass.value == "" || mobile.value == " ") {
    alert("Enter inputs");
    return false;
  } else {
    true;
  }
}
