// const contactForm = document.getElementById('review');
// const msgcontact = document.getElementById('tt');

// const sendemail = (e) =>{
//  e.preventDefault()
// emailjs.sendForm('service_symimcd','template_qvqdyqk','#review','BHwjBClX4ICLqAq7x')
// .then(() => {
//     msgcontact.textContent = 'message sent successfully'
//     setTimeout(() =>{
//         msgcontact.textContent = ''
//     },5000)
// contactForm.reset()
// })
// }
// contactForm.addEventListener('submit',sendemail)

const icon = document.querySelector(".menu-bar i");
const list = document.querySelector("nav");
const links = document.querySelectorAll("nav ul li a"); // Tous les liens du menu

// Clic sur l'icône hamburger
icon.onclick = () => {
  icon.classList.toggle('fa-xmark'); // Bascule l'icône
  list.classList.toggle('active');   // Affiche / cache le menu
};

// Clic sur un lien du menu : on ferme le menu
links.forEach(link => {
  link.onclick = () => {
    icon.classList.remove('fa-xmark'); // Restaure l'icône hamburger
    list.classList.remove('active');   // Cache le menu
  };
});
