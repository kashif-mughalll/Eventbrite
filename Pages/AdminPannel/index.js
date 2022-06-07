// Example starter JavaScript for disabling form submissions if there are invalid fields

(function () {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();

var tags = document.getElementById('tags');
var chipBtn = document.getElementById('chipBtn');
var chipsEle = document.getElementById('chipsEle');
var chipsDiv = document.getElementById('chipsDiv');
var chips = document.getElementsByClassName('chip');

chipBtn.addEventListener('click', (e) => {
  e.preventDefault();
  var tag = document.createElement('div');
  tag.classList.add('chip');
  var chi = document.createTextNode(tags.value);
  tag.appendChild(chi);
  // ` <span class="closeBtn" onclick="this.parentElement.style.display='none'">&times;</span>`
  // var cross = document.createElement("span");
  // cross.classList.add('closeBtn');
  // cross.onclick = tag.style.display='none';
  // tag.appendChild(cross);
  // var text =  document.createTextNode("   X");
  // tag.appendChild(text);
  chipsDiv.appendChild(tag);
});

// admin pannel data extract
var title = document.getElementById('validationCustom01');
var organizer = document.getElementById('validationCustom02');
var catagory = document.getElementById('validationCustom03');
var text = catagory.options[catagory.selectedIndex].text;
var Name = document.getElementById('validationCustom04');
var companyName = document.getElementById('validationCustom05');
var email = document.getElementById('validationCustom06');
var password = document.getElementById('validationPass');
var desc = document.getElementById('desc').innerHTML;
var city = document.getElementById('validationCustom07');
var dateAndTime = document.getElementById('dateAndTime');
var loe = document.getElementById('loe');
var selectLoe = loe.options[loe.selectedIndex].text;
var hear = document.getElementById('hear');
var selectHear = hear.options[hear.selectedIndex].text;
var submitAll = document.getElementById('submitAll');

connectFirebase(true, true, false, () => {
  var auth = firebase.auth()
  var db = firebase.firestore();
  var CreateProfileInDB = async (data) => {
    try {
      await db.collection('Events').doc().set(data);
      console.log('Document succesfully created');
    } catch (error) {
      console.error(error);
    }
  };
  
  document
  .getElementsByClassName('submitAll')[0]
  .addEventListener('click', (e) => {
    var apData = {
      titleData: title.value,
      organizerData: organizer.value,
      catagoryData: catagory.options[catagory.selectedIndex].text,
      nameData: Name.value,
      companyNameData: companyName.value,
      emailData: email.value,
      passwordData: password.value,
      descData: desc,
      cityData: city.options[city.selectedIndex].text,
      dateAndTimeData: dateAndTime.value,
      loeData: loe.options[loe.selectedIndex].text,
      hearData: hear.options[hear.selectedIndex].text,
    };
    console.log(apData);
    CreateProfileInDB(apData)
    e.preventDefault();
  });
});

