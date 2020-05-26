var form = document.getElementById("formb");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

function validatename() {
  var name = document.forma.Name.value;
  if (name == null || name == "") {
    document.forma.Name.classList.add('validate');
    document.querySelector('.error1').classList.toggle('hide');
    document.querySelector('.error1').textContent = "This Field is Required";
  }else{
    document.querySelector('.error1').classList.toggle('hide');
    document.forma.Name.classList.remove('validate');
  }
}

function validateemail() {
  var x = document.forma.email.value;
  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");
  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= x.length
  ) {
    document.forma.email.classList.add('validate');
    document.querySelector('.error2').classList.toggle('hide');
    document.querySelector('.error2').textContent = "Invalid Input";
  }else{
    document.querySelector('.error2').classList.toggle('hide');
    document.forma.email.classList.remove('validate');
  }
}




  function quiz() {
    try{
    var x = [
      document.querySelector('input[name="q1"]:checked').value,
      document.querySelector('input[name="q2"]:checked').value,
      document.querySelector('input[name="q3"]:checked').value,
      document.querySelector('input[name="q4"]:checked').value,
      document.querySelector('input[name="q5"]:checked').value,
      document.querySelector('input[name="q6"]:checked').value,
      document.querySelector('input[name="q7"]:checked').value,
      document.querySelector('input[name="q8"]:checked').value,
      document.querySelector('input[name="q9"]:checked').value,
      document.querySelector('input[name="q10"]:checked').value,
      document.querySelector('input[name="q11"]:checked').value,
    ];
  }
  catch(error){
    document.querySelector('.warning').classList.toggle('trigger');
  }
  
    var msg;
    const doc = document.getElementById("output");
    var ans = 0;
    for (var i = 0; i < x.length; i++) {
      ans += parseInt(x[i]);
    }
    var name = document.forma.Name.value.toUpperCase();
    var per = ((ans / 22) * 100).toFixed(2);
    var txt;
    if (ans > 15) {
      txt = "Strong Psychopathic Tendencies.";
    } else if (ans > 9 && ans <= 15) {
      txt = "Moderate To Minor Psychopathic Tendencies.";
    } else {
      txt = "No Psychopathic Tendencies";
    }
    document.querySelector('.btn').classList.toggle('hide')
    document.querySelector('.table').classList.toggle('hide')
    document.querySelector('.output').classList.toggle('hide')
    document.querySelector('.warning').classList.toggle('hide')
    msg = name + ", Your Score is " + per + "%, which means " + txt;
    doc.textContent =  msg 
    document.getElementById("formb").reset();
  }
