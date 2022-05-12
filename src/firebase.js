import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDtoc-9QPVPPSK1x9QCMrPYiTmisQUeenM",
    authDomain: "blindside-task.firebaseapp.com",
    projectId: "blindside-task",
    storageBucket: "blindside-task.appspot.com",
    messagingSenderId: "921644073663",
    appId: "1:921644073663:web:451d32272cd7688dcbbc0a"
  };

firebase.initializeApp(firebaseConfig)

export default firebase.auth()