importScripts('https://www.gstatic.com/firebasejs/9.8.3/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.8.3/firebase-messaging-compat.js');

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB-K7kPZ4ogjG8VPFFhXYU56gIkTcKETJQ",
    authDomain: "ccn-2-0.firebaseapp.com",
    projectId: "ccn-2-0",
    storageBucket: "ccn-2-0.appspot.com",
    messagingSenderId: "824045876713",
    appId: "1:824045876713:web:5c1be82effd05be9020778",
    measurementId: "G-BG3LSLBJS6"
  };

firebase.initializeApp(firebaseConfig);

// Initialize Firebase Messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
