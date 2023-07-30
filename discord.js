const email = document.getElementById("logemail");
const password = document.getElementById("logpassword");
const login = document.queryselector (".btn");
const ptxt = document.getElementById("pword-txt");
const etxt = document.getElementById("email-txt");
const Error = document.getElementById("email-error");
const perror = document.getElementById("password-error");
const input = document.queryselector (".form-style");
const container = document. querySelector (".container");
const esearch = /^[^ ]+@[^ ]+\.[a-z](2,3)$/; 
const psearch = /[a-z](8,32}/g;

login.addEventListener("click", (e) => {
    if(!password.value.match(psearch)){
        password.focus();
        e.preventDefault();
        password.style.borderColor = "#ec4846";
        ptxt.style.color = "#ec4846";
        perror.innerText = " - Password must be 8-32 characters long";
    }
    else if(email.value === "" || !email.value.match(esearch)){
        email.focus();
        e.preventDefault();
        email.style.borderColor = "#ec4846";
        etxt.style.color = "#ec4846";
        Eerror.innerText = "Email must be valid";
    }
    else{
        email.value = "";
        password.value = "";
        container.style.animation = "jump 3s linear";
        container.addEventListener("animationend", () => {
            container.style.display = "none";
            canvas.style.transform = "translate(0vw)";

            user.login= true;
        })
       
    }
    setTimeout(() => {
        ptxt.style.color = "#919296";
        etxt.style.color = "#919296";
        perror.innerText = "";
        Eerror.innerText = "";
        password.style.borderColor = "";
        email.style.borderColor = "";
    }, 2500)
});