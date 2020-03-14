auth.onAuthStateChanged((user) => {
    if (user) {

    } else {
        window.location.href = "./login.html";
    }
})