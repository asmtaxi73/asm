/* =========================================================
   Taxi Bourg-Saint-Maurice — Scripts
   ========================================================= */
(function () {
  "use strict";

  /* --- Menu mobile --- */
  var burger = document.querySelector(".burger");
  var navLinks = document.querySelector(".nav-links");
  if (burger && navLinks) {
    burger.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { navLinks.classList.remove("open"); });
    });
  }

  /* --- FAQ accordéon --- */
  document.querySelectorAll(".faq-q").forEach(function (q) {
    q.addEventListener("click", function () {
      var item = q.closest(".faq-item");
      var answer = item.querySelector(".faq-a");
      var isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (openItem) {
        openItem.classList.remove("open");
        openItem.querySelector(".faq-a").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  /* --- Traduction anglaise (Google Translate) ---
     Le bouton EN ouvre la page courante du site traduite en anglais
     via le proxy translate.goog (fonctionne sur le domaine en ligne). */
  document.querySelectorAll(".js-translate").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var path = window.location.pathname;
      if (path === "/" || path === "") path = "/index.html";
      window.location.href =
        "https://www-asm--taxi-fr.translate.goog" + path +
        "?_x_tr_sl=fr&_x_tr_tl=en&_x_tr_hl=en";
    });
  });

  /* --- Année dans le pied de page --- */
  document.querySelectorAll(".js-year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* --- Formulaire de devis ---
     Par défaut : compose un e-mail pré-rempli vers l'adresse du taxi (mailto).
     Pour recevoir les demandes automatiquement sans ouvrir la messagerie,
     branche un service gratuit (Formspree, Netlify Forms) — voir README. */
  var form = document.getElementById("devis-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      // Si un vrai backend est configuré (action différente de "#"), on laisse partir.
      var action = form.getAttribute("action");
      if (action && action !== "#" && action.indexOf("mailto:") !== 0) return;

      e.preventDefault();
      var data = new FormData(form);
      var email = form.getAttribute("data-email") || "asm.taxi73@gmail.com";

      var lignes = [
        "Nouvelle demande de devis :",
        "",
        "Nom : " + (data.get("nom") || ""),
        "Téléphone : " + (data.get("tel") || ""),
        "Email : " + (data.get("email") || ""),
        "Départ : " + (data.get("depart") || ""),
        "Destination : " + (data.get("destination") || ""),
        "Date : " + (data.get("date") || ""),
        "Heure : " + (data.get("heure") || ""),
        "Passagers : " + (data.get("passagers") || ""),
        "Message : " + (data.get("message") || "")
      ];
      var corps = encodeURIComponent(lignes.join("\n"));
      var sujet = encodeURIComponent("Demande de devis taxi — " + (data.get("destination") || "course"));

      window.location.href = "mailto:" + email + "?subject=" + sujet + "&body=" + corps;

      var ok = form.parentNode.querySelector(".form-success");
      if (ok) { ok.style.display = "block"; }
    });
  }
})();
