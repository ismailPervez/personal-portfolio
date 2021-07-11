// send email using js -> from contact form

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var from_email = document.getElementById("email");
var message = document.getElementById("message");
var submitBtn = document.getElementById("submit-btn");

function sendMail(firstName, lastName, from_email, message) {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "CashVirtualOfficial@gmail.com",
        Password : "c@$hMoney_001",
        To : 'CashVirtualOfficial@gmail.com',
        From : `${from_email}`,
        Subject : `you've received an email from ${firstName} ${lastName}`,
        Body : `${message}`
    }).then(
      message => alert(message)
    );
}

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    if (firstName === "" || lastName === "" || from_email === "" || message === "") {
        alert("please fill in all fields");
    }

    else {
        sendMail(firstName, lastName, from_email, message); 
    }
})



// sendMail(firstName, lastName, from_email, message); 


// timeline effects - toggle the ball button to activate animation and move timeline

var ballBtn = document.querySelector(".line-1 .ball");

ballBtn.addEventListener("click", function(e) {
    ballBtn.classList.add("active");
})


