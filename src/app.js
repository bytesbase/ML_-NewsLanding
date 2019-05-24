// for webpack, can be moved to webpack config in the future.
import './style.scss';
import './assets/newsletter.gif';
import './assets/background.svg';
import './assets/favicons/favicon-16x16.png';


document.getElementById("email").addEventListener("keyup", function() {
    var emailInput = document.getElementById('email').value;
    if (emailInput != "") {
        document.getElementById('subscribe').removeAttribute("disabled");
    } else {
        document.getElementById('subscribe').setAttribute("disabled", null);
    }
});

// add aditional animations / functionality later.