let loginForm = document.querySelector("#login-form");
if (loginForm != null) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let email = loginForm.email.value;
        let pass = loginForm.pass.value;

        auth.signInWithEmailAndPassword(email, pass).then((cred) => {
            window.location.href = "./admin.html";
        }).catch((e) => {
            alert(e.message);
        })
    })
}