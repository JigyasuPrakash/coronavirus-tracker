var firebaseConfig = {
    apiKey: "AIzaSyA1zBywYYqWqmOUADJN0i1i0gzv_KMxPcU",
    authDomain: "covid-tracker-in.firebaseapp.com",
    databaseURL: "https://covid-tracker-in.firebaseio.com",
    projectId: "covid-tracker-in",
    storageBucket: "covid-tracker-in.appspot.com",
    messagingSenderId: "1010598695342",
    appId: "1:1010598695342:web:86019e75608fd3589c783f",
    measurementId: "G-5SGY2F7DK8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

function logout(){
    auth.signOut();
}