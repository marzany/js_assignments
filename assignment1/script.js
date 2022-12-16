function showResults(event) {
  event.preventDefault();
  let fullname = document.getElementById("id_fullname").value;
  if (fullname == "") {
    alert("Name cannot be empty")
    return false;
  }
  let password = document.getElementById("id_password").value;
  if (password == "") {
    alert("Please give valid password")
    return false;
  } else {
    let passwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_,.:;?!-])[A-Za-z\d_,.:;?!-]{8,20}$/;
    if (!password.match(passwd)) {
      alert("Password must contain at least one number and one uppercase and lowercase letter, 8-20 characters and special character")
      return false;
    }
  }
  let password2 = document.getElementById("id_password2").value;
  if (password == "" || password2 != password) {
    alert("Passwords do not match")
    return false;
  } else {
    let passwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_,.:;?!-])[A-Za-z\d_,.:;?!-]{8,20}$/;
    if (!password2.match(passwd)) {
      alert("Password must contain at least one number and one uppercase and lowercase letter, 8-20 characters and special character")
      return false;
    }
  }
  let birthday = document.getElementById("birthday").value;
  let gender ="" ;
  for(let genderChoice of document.getElementsByName("gender")){
    if (genderChoice.checked) {
      gender = genderChoice.value;
    }
  }
  let hobbies = [];
  for(let hobbyChoice of document.getElementsByName("hobby")) {
    if (hobbyChoice.checked) {
      hobbies.push(hobbyChoice.value);
    }
  }
  let favcolor = document.getElementById("colorpicker").value;
  let height = document.getElementById("id_height").value;
  let form = document.getElementById("myform");
  let countryEl = document.getElementById("country");
  let country = countryEl.options[countryEl.selectedIndex].text;
  let profession = document.getElementById("id_prof").value;
  let message = document.getElementById("id_message").value;
  if (message == "") {
    alert("Message field cannot be empty")
    return false;
  }
  let result = `Fullname : ${fullname}\n` +
  `Password : ${password}\n` +
  `Password again : ${password2}\n` +
  `Birthday : ${birthday}\n` +
  `Gender : ${gender}\n` +
  `Favourite color : ${favcolor}\n` +
  `Hobbies : ${hobbies.join(", ")}\n` +
  `Height (cm) : ${height}\n` +
  `Country : ${country}\n` +
  `Profession : ${profession}\n` +
  `Message : ${message}\n`;
  document.getElementById("id_result").innerText = result;
  
}