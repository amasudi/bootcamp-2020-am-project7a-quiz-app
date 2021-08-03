import firebase from "firebase";

const config = {
    apiKey: "AIzaSyAdh9CP-sLuP7GnfiCORNCQnuRDqp3FcDk",
    authDomain: "bootcamp-am-project7a-quiz-app.firebaseapp.com",
    projectId: "bootcamp-am-project7a-quiz-app",
    storageBucket: "bootcamp-am-project7a-quiz-app.appspot.com",
    messagingSenderId: "917725341902",
    appId: "1:917725341902:web:1807b7784816d5163fc89f"
}

firebase.initializeApp(config);

export default firebase;