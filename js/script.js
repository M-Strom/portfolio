// GSAP - Animation de la Hero Section
gsap.from("#hero h1", {
  duration: 2,
  opacity: 0,
  y: -50,
  ease: "power2.out"
});

gsap.from("#hero p", {
  duration: 2,
  opacity: 0,
  y: 50,
  ease: "power2.out",
  delay: 0.5
});

gsap.from("#hero .btn", {
  duration: 2,
  opacity: 0,
  y: 100,
  ease: "power2.out",
  delay: 1
});

// GSAP - Animation des cartes du portfolio
gsap.utils.toArray(".card").forEach(card => {
  gsap.from(card, {
      duration: 1.5,
      opacity: 0,
      y: 50,
      ease: "power2.out",
      scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true
      }
  });
});


// Fonction pour valider le formulaire
function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Vérification des champs
  if (name === "") {
      alert("Veuillez entrer votre nom.");
      return false;
  }

  // Expression régulière pour valider l'email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
      alert("Veuillez entrer une adresse email valide.");
      return false;
  }

  if (message === "") {
      alert("Veuillez entrer un message.");
      return false;
  }

  const msg = document.getElementById('output-succes').textContent = "Formulaire soumis avec succès !"
  setTimeout(() => {
    msg.textContent = ""
  }, 1000)

  //requête AJAX Node.js backend.
  document.querySelector("form").reset(); // Réinitialiser le formulaire
  return true;
}

document.querySelector("form").addEventListener("submit", validateForm);
