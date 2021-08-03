importScripts('https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.8.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAdh9CP-sLuP7GnfiCORNCQnuRDqp3FcDk",
    authDomain: "bootcamp-am-project7a-quiz-app.firebaseapp.com",
    projectId: "bootcamp-am-project7a-quiz-app",
    storageBucket: "bootcamp-am-project7a-quiz-app.appspot.com",
    messagingSenderId: "917725341902",
    appId: "1:917725341902:web:1807b7784816d5163fc89f"
});

firebase.messaging();