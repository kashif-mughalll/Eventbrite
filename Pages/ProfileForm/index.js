connectFirebase(true, true, false, () => {
    var auth = firebase.auth()
    var db = firebase.firestore();
    var CreateProfileInDB = async (data) => {
      try {
        await db.collection("Profiles").doc(data.id).set(data);
        console.log("Document succesfully created");
      } catch (error) {
        console.error(error)
      }
    }
    
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