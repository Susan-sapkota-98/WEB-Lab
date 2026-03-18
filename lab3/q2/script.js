function validate() {

  var ok = true;

  // reset all errors first
  var errors = document.getElementsByClassName("err");
  for (var i = 0; i < errors.length; i++) {
    errors[i].style.display = "none";
  }

  // reset red borders
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("invalid-field");
  }
  var selects = document.getElementsByTagName("select");
  for (var i = 0; i < selects.length; i++) {
    selects[i].classList.remove("invalid-field");
  }

  // check username
  var uname = document.getElementById("uname").value;
  if (uname == "") {
    document.getElementById("err1").style.display = "block";
    document.getElementById("uname").classList.add("invalid-field");
    ok = false;
  }

  // check full name
  var fname = document.getElementById("fname").value;
  if (fname == "") {
    document.getElementById("err2").style.display = "block";
    document.getElementById("fname").classList.add("invalid-field");
    ok = false;
  }

  // check role first
  var role = document.getElementById("role").value;
  if (role == "") {
    document.getElementById("err4").style.display = "block";
    document.getElementById("role").classList.add("invalid-field");
    ok = false;
  }

  // check email based on role
  var email = document.getElementById("email").value;
  if (email == "") {
    document.getElementById("err3").style.display = "block";
    document.getElementById("email").classList.add("invalid-field");
    ok = false;
  } else {
    if (role == "student") {
      if (email.endsWith("@student.edu.np") == false) {
        document.getElementById("err3").style.display = "block";
        document.getElementById("err3").innerHTML = "student email must end with @student.edu.np";
        document.getElementById("email").classList.add("invalid-field");
        ok = false;
      }
    }
    if (role == "teacher") {
      if (email.endsWith("@tutor.edu.np") == false) {
        document.getElementById("err3").style.display = "block";
        document.getElementById("err3").innerHTML = "teacher email must end with @tutor.edu.np";
        document.getElementById("email").classList.add("invalid-field");
        ok = false;
      }
    }
  }

  // check age
  var age = document.getElementById("age").value;
  if (age == "") {
    document.getElementById("err5").style.display = "block";
    document.getElementById("age").classList.add("invalid-field");
    ok = false;
  }

  // check gender
  var gender = document.getElementById("gender").value;
  if (gender == "") {
    document.getElementById("err6").style.display = "block";
    document.getElementById("gender").classList.add("invalid-field");
    ok = false;
  }

  // check course
  var course = document.getElementById("course").value;
  if (course == "") {
    document.getElementById("err7").style.display = "block";
    document.getElementById("course").classList.add("invalid-field");
    ok = false;
  }

  // check password
  var pass = document.getElementById("pass").value;
  if (pass.length < 8) {
    document.getElementById("err8").style.display = "block";
    document.getElementById("pass").classList.add("invalid-field");
    ok = false;
  }

  // check confirm password
  var cpass = document.getElementById("cpass").value;
  if (cpass != pass) {
    document.getElementById("err9").style.display = "block";
    document.getElementById("cpass").classList.add("invalid-field");
    ok = false;
  }

  // check terms
  var terms = document.getElementById("terms").checked;
  if (terms == false) {
    document.getElementById("err10").style.display = "block";
    ok = false;
  }

  // show success if all ok
  if (ok == true) {
    document.getElementById("successmsg").style.display = "block";
  }

}