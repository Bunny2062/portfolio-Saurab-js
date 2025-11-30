//DOM (Document Object Model)
const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuButton.innerHTML = navLinks.classList.contains("open") ? "✕" : "☰";
});

const form = document.getElementById("contact-form");
const msg = document.getElementById("form-message");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if(name === "" || email === ""){
        msg.textContent = "Please fill all fields!";
        msg.style.color = "red";
        return;
    }

    msg.textContent = "Message Sent Successfully!";
    msg.style.color = "lightgreen";
    form.reset();
});