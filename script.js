function ValidateEmail(inputText) {
    var x = document.getElementById("email").value;
    if (x == "") {
        document.getElementById("email").style.borderColor = "red";
        const error = document.createElement("p");
        const node = document.createTextNode("Email cannot be empty");
        error.appendChild(node);
        error.style.color = "red";
        error.style.marginLeft = "15px";
        const element = document.getElementById("content-w-o-logo");
        element.appendChild(error);
        var img = document.createElement('img');
        img.src = "images/icon-error.svg";
        img.setAttribute('class', 'error-icon');
        document.getElementById("error").appendChild(img);
        return false;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        document.getElementById("email").style.borderColor = "green";
        const success = document.createElement("p");
        const node = document.createTextNode("Thanks for entering your email");
        success.appendChild(node);
        success.style.color = "green";
        success.style.marginLeft = "15px";
        const element = document.getElementById("content-w-o-logo");
        element.appendChild(success);
        return true;
    }
    else {
        document.getElementById("email").style.borderColor = "red";
        const error = document.createElement("p");
        const node = document.createTextNode("Please provide a valid email");
        error.appendChild(node);
        error.style.color = "red";
        error.style.marginLeft = "15px";
        const element = document.getElementById("content-w-o-logo");
        element.appendChild(error);
        var img = document.createElement('img');
        img.src = "images/icon-error.svg";
        img.setAttribute('class', 'error-icon');
        document.getElementById("error").appendChild(img);
        return false;
    }
}