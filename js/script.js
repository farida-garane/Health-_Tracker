// Récupération des boutons
const btnprofile = document.getElementById("btnprofile");
const btnmedications = document.getElementById("btnmedications");
const btnvaccines = document.getElementById("btnvaccines");
const btnhistory = document.getElementById("btnhistory");
const btnrecap = document.getElementById("btnrecap");
const btntips = document.getElementById("btntips");
const btncontinue = document.getElementById("btncontinue");

// Récupération des divs explicatives
const btnprofilediv = document.getElementById("btnprofilediv");
const btnmedicationsdiv = document.getElementById("btnmedicationsdiv");
const btnvaccinesdiv = document.getElementById("btnvaccinesdiv");
const btnhistorydiv = document.getElementById("btnhistorydiv");
const btnrecapdiv = document.getElementById("btnrecapdiv");
const btntipsdiv = document.getElementById("btntipsdiv");

// Fonction pour cacher toutes les divs
function hideAll() {
  btnprofilediv.style.display = "none";
  btnmedicationsdiv.style.display = "none";
  btnvaccinesdiv.style.display = "none";
  btnhistorydiv.style.display = "none";
  btnrecapdiv.style.display = "none";
  btntipsdiv.style.display = "none";
}

// Ajout des événements sur les boutons
btnprofile.addEventListener("click", function () {
  hideAll();
  btnprofilediv.style.display = "block";
});

btnmedications.addEventListener("click", function () {
  hideAll();
  btnmedicationsdiv.style.display = "block";
});

btnvaccines.addEventListener("click", function () {
  hideAll();
  btnvaccinesdiv.style.display = "block";
});

btnhistory.addEventListener("click", function () {
  hideAll();
  btnhistorydiv.style.display = "block";
});

btnrecap.addEventListener("click", function () {
  hideAll();
  btnrecapdiv.style.display = "block";
});

btntips.addEventListener("click", function () {
  hideAll();
  btntipsdiv.style.display = "block";
});

// Bouton continuer
btncontinue.addEventListener("click", function () {
  window.location.href = "profile.html";
});