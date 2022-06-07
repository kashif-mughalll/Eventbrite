connectFirebase(true, true, false, () => {
    var auth = firebase.auth()
    console.log(auth)
    var { email} = JSON.parse(localStorage.getItem('auth') || "");
    console.log(email)
    document.getElementById('validationCustom02').value = email ? email : "";
  });







// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()