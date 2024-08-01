var typeData = new Typed(".role", {
    strings: [
      "Full Stack Developer",
      "Web Developer",
      "UI-UX Designer",
      "Backend Developer",
      "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});

function SendEmail() {
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_7tx5fbw","template_y38ac5h", params).then(function(res) {
        alert("Success! " + res.status);
    }) 
}