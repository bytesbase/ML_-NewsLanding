// webpack
import './style.scss';
import './assets/newsletter.gif';
import './assets/favicons/favicon-16x16.png';


document.getElementById("email").addEventListener("keyup", function() {
    var emailInput = document.getElementById('email').value;
    if (emailInput != "") {
        document.getElementById('subscribe').removeAttribute("disabled");
    } else {
        document.getElementById('subscribe').setAttribute("disabled", null);
    }
});

