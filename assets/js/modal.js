// modal.js

document.addEventListener("DOMContentLoaded", function(event) {
  // CONTATO
  const form  = document.getElementById('contact-us');

  form.addEventListener('submit', (event) => {
    fetch(form.action, {
      method: form.method,
      body: new URLSearchParams(new FormData(form)),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(function(response) {
      if (response.status == 200) showModal("#modal-contact-us-success");
      else showModal("#modal-contact-us-error");
    })
    .catch(function(error) {
      console.log('Erro: ', error.message);
      showModal("#modal-contact-us-error");
    });
  });
 
  // SOCIAL 

  //// whats
  const whatsappIcons = document.querySelectorAll(".whatsapp-icon");

  if (whatsappIcons) {
    whatsappIcons.forEach(whatsappIcon => {
      whatsappIcon.addEventListener("click", function() {
        showModal("#modal-whatsapp");
      });
    });
  }

  //// telegram
  const telegramIcons = document.querySelectorAll(".telegram-icon");

  if (telegramIcons) {
    telegramIcons.forEach(telegramIcon => {
      telegramIcon.addEventListener("click", function() {
        showModal("#modal-telegram");
      });
    });
  }

  //// email
  const emailIcons = document.querySelectorAll(".email-icon");

  if (emailIcons) {
    emailIcons.forEach(emailIcon => {
      emailIcon.addEventListener("click", function() {
        showModal("#modal-email");
      });
    });
  }

  //// notification
  const notificationIcons = document.querySelectorAll(".notification-icon");

  if (notificationIcons) {
    notificationIcons.forEach(notificationIcon => {
      notificationIcon.addEventListener("click", function() {
        showModal("#modal-notification");
      });
    });
  }
  
  //FOURTH

  //// indique
  const sectionIndicate = document.querySelector("#indicate");

  if (sectionIndicate) {
    sectionIndicate.addEventListener("click", function() {
      showModal("#modal-indicate"); 
    });
  }
  
  // FOOTER
  const whoWeAre = document.querySelector("#who-we-are");

  if (whoWeAre) {
    whoWeAre.addEventListener("click", function() {
      showModal("#modal-who-we-are"); 
    });
  }

  const contactUsFooter = document.querySelector("#contact-us-footer");

  if (contactUsFooter) {
    contactUsFooter.addEventListener("click", function() {
      showModal("#modal-contact-us"); 
    });
  }

  const cancel = document.querySelector("#cancel");

  if (cancel) {
    cancel.addEventListener("click", function() {
      showModal("#modal-cancel"); 
    });
  }

  const reportBug = document.querySelector("#report-error");

  if (reportBug) {
    reportBug.addEventListener("click", function() {
      showModal("#modal-report"); 
    });
  }
});

function hideModal() {
  const modalContents = document.getElementsByClassName('myModal-content');
  for (const content of modalContents) {
    content.classList.add("d-none");
  }

  document.getElementById("modal").classList.add("d-none");
}

function showModal(content) {
  document.querySelector(content).classList.remove("d-none");
  document.getElementById("modal").classList.remove("d-none");
}