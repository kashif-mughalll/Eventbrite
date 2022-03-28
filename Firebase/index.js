const firebaseConfig = {
  apiKey: 'AIzaSyAVCfH_4c7J4F7fc5flOH_Ox4FjvQAb_m0',
  authDomain: 'auth-practice-52721.firebaseapp.com',
  projectId: 'auth-practice-52721',
  storageBucket: 'auth-practice-52721.appspot.com',
  messagingSenderId: '626324125559',
  appId: '1:626324125559:web:e79b177951acf73eea5372',
};

// //new configurations
// const firebaseConfig = {
//   apiKey: "AIzaSyDYxbnJ0dXHxGh-sMR2S19ZooU_ymPQ-FQ",
//   authDomain: "auth-6fdd8.firebaseapp.com",
//   projectId: "auth-6fdd8",
//   storageBucket: "auth-6fdd8.appspot.com",
//   messagingSenderId: "929392229076",
//   appId: "1:929392229076:web:b40dc4a45cc24ff8fb1941",
// };


async function connectFirebase(auth = false, firestore = false, storage = false, func) {
  await addScriptInDOM("https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js", "firebase-source-scr");
  if (auth) await addScriptInDOM("https://www.gstatic.com/firebasejs/7.15.0/firebase-auth.js", "auth-firebase-scr-1");
  if (firestore) await addScriptInDOM("https://www.gstatic.com/firebasejs/7.15.0/firebase-firestore.js", "firestore-firebase-scr-1");
  if (storage) await addScriptInDOM("https://www.gstatic.com/firebasejs/7.15.0/firebase-storage.js", "storage-firebase-scr-1");
  firebase.initializeApp(firebaseConfig);
  if (func) func();
}


async function addScriptInDOM(url, id) {
  return new Promise((resolve, reject) => {
    var script = document.createElement('script');
    script.src = url;
    script.id = id;
    document.body.prepend(script);

    document.getElementById(id).addEventListener('load', () => {
      resolve();
      return;
    });
    setTimeout(reject, 10000);
  });
}


