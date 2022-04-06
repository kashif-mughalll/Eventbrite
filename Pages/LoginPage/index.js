// connectFirebase(true, true, false, () => {
//   var auth = firebase.auth()
//   console.log(auth)
// });

// // Ctrl + Alt + F


connectFirebase(true, true, false, () => {
  var loginWithGoogle = document.getElementById("loginGoogle");
  var auth = firebase.auth();

  var signUpBtn = document.getElementById("signUp");
  var userName = document.getElementById("userName");
  var userEmail = document.getElementById("userEmail");
  var userPass = document.getElementById("userPass");

  var signInBtn = document.getElementById("signInBtn");
  var userEmailLogin = document.getElementById("signInUserEmail");
  var userPassLogin = document.getElementById("signInPass");

  var authData = localStorage.getItem("auth");
  authData = JSON.parse(authData);

  ////////////////////event listners/////////////////////

  loginWithGoogle.addEventListener("click", (e) => {
    googleLogin();
  });

  signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signUpFun(userName.value, userEmail.value, userPass.value);
  });

  signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signInWtihEmailPass(userEmailLogin.value, userPassLogin.value);
  });

  ////////////////////////login in with google/////////////////////////

  var googleLogin = async () => {
    try {
      var provider = new firebase.auth.GoogleAuthProvider();
      let userData = await auth.signInWithPopup(provider);
      userData = userData.user;

      authData = userDataObj;
      var userDataObj = {
        image: userData.photoURL,
        email: userData.email,
        name: userData.displayName,
        uid: userData.uid,
      };
      localStorage.setItem("auth", JSON.stringify(userDataObj));
      redirect();

      return userDataObj;
      ////abb kisi bhi function kko login wala data miljaega
    } catch (error) {
      console.log(error)
      alert("something Went wrong!");
    }
  };

  ///////////////////////////////Sign up//////////////////////////////////////

  var signUpFun = async (name, email, pass) => {
    try {
      document.getElementById("signUpSvg").style.display = "inline";
      var data = await auth.createUserWithEmailAndPassword(email, pass);

      data = data.user;
      signUpData = signUpDataObj;
      var signUpDataObj = {
        eamil : data.email ,
        uid : data.uid
      };
      localStorage.setItem("auth",JSON.stringify(signUpDataObj));
      redirect();

      // console.log(data);

      document.getElementById("signUpSuccess").style.display = "inline";
      document.getElementById("signUpSvg").style.display = "none";
      setTimeout(() => {
        document.getElementById("signUpSuccess").style.display = "none";
      }, 2000);
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        //  alert("Invalid Email Address");
        document.getElementById("signUpSvg").style.display = "none";
        document.getElementById("emailLab1").style.display = "inline";
        setTimeout(() => {
          document.getElementById("emailLab1").style.display = "none";
        }, 2000);
      }
      if (error.code === "auth/weak-password") {
        //  alert("Weak Password");
        document.getElementById("signUpSvg").style.display = "none";
        document.getElementById("passLab1").style.display = "inline";
        setTimeout(() => {
          document.getElementById("passLab1").style.display = "none";
        }, 2000);
      }
    }
  };

  ////////////////////////////////Sign in with email and pass//////////////////////////

  var signInWtihEmailPass = async (email, pass) => {
    try {
      document.getElementById("signInSvg").style.display = "inline";
      var signInData = await auth.signInWithEmailAndPassword(email, pass);

      signInData = signInData.user;
      signInAuth = signInDataObj;
      var signInDataObj = {
        email : signInData.email,
        uid : signInData.uid
      };
      localStorage.setItem("auth",JSON.stringify(signInDataObj));
      redirect();
      
      // console.log(signInDataObj);

      // alert("Logged in")
      document.getElementById("signInSuccess").style.display = "inline";
      document.getElementById("signInSvg").style.display = "none";
      setTimeout(() => {
        document.getElementById("signInSuccess").style.display = "none";
      }, 2000)
    } catch (error) {
      if (error.code == "auth/invalid-email") {
        document.getElementById("signInSvg").style.display = "none";
        document.getElementById("emailLab").style.display = "inline";
        setTimeout(() => {
          document.getElementById("emailLab").style.display = "none";
        }, 2000);
      }
      if (error.code === "auth/wrong-password") {
        //  alert("invalid password");
        document.getElementById("signUpSvg").style.display = "none";
        document.getElementById("passLab").style.display = "inline";
        setTimeout(() => {
          document.getElementById("passLab").style.display = "none";
        }, 2000);
      }
    }
  };
})


function redirect(){
  const profile = localStorage.getItem('profile');
  if (profile) {
    location.assign('../UserPage/userpage.html');
  } else location.assign('../ProfileForm/index.html');
}