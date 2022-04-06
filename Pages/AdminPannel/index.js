var tags = document.getElementById('tags');
var chipBtn = document.getElementById('chipBtn');
var chipsEle = document.getElementById('chipsEle');
var chipsDiv = document.getElementById('chipsDiv');
var chips = document.getElementsByClassName('chip')

chipBtn.addEventListener('click' , (e) => {
    e.preventDefault();
    var tag = document.createElement("div");
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