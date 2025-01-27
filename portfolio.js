const introElement = document.querySelector('#type1');
const nameElement = document.querySelector("#type2")
const intro = introElement.textContent; // Get the existing text
const myname = nameElement.textContent;
introElement.textContent = ''; // Clear the text
nameElement.textContent = '';
let index = 0;
let nameIndex = 0;

function typeText() {
  if (index < intro.length) {
    introElement.textContent += intro[index];
    index++;
    setTimeout(typeText, 100);
  }
  if (index >= intro.length  && index < intro.length+ myname.length) {
    nameElement.textContent += myname[nameIndex]
    index++;
    nameIndex ++;
    setTimeout(typeText, 200);
  }
  
}
typeText();

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from reloading the page

  const name = event.target.name.value;
  const email = event.target.email.value;
  const subject = event.target.subject.value;
  const message = event.target.message.value;

  
  if (!name || !email || !subject || !message) {
    alert('Please fill in all fields.');
    return;
  }

  alert(`Message Sent!\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
  event.target.reset();

});
