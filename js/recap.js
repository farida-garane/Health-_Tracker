// Page récapitulatif

document.addEventListener("DOMContentLoaded", function () {
  
  // ========== INFORMATIONS PERSONNELLES ==========
  const recapprofile = document.getElementById("recapprofile");
  
  if (recapprofile) {
    const nom = localStorage.getItem("name") || "Non renseigné";
    const prenom = localStorage.getItem("profilefull") || "Non renseigné";
    const naissance = localStorage.getItem("birthday") || "Non renseigné";
    const sexe = localStorage.getItem("sex") || "Non renseigné";
    const contact = localStorage.getItem("phone") || "Non renseigné";
    const taille = localStorage.getItem("height") || "Non renseigné";
    const poids = localStorage.getItem("weight") || "Non renseigné";
    const allergie = localStorage.getItem("allergietext") || "Non renseigné";
    const maladie = localStorage.getItem("maladie") || "Non renseigné";
    const groupesanguin = localStorage.getItem("blood") || "Non renseigné";
    const activite = localStorage.getItem("physics") || "Non renseigné";

    recapprofile.innerHTML = `
      <h2>Informations personnelles</h2>
      <p>Nom : ${nom}</p>
      <p>Prénom : ${prenom}</p>
      <p>Date de naissance : ${naissance}</p>
      <p>Sexe : ${sexe}</p>
      <p>Contact : ${contact}</p>
      <p>Taille : ${taille}</p>
      <p>Poids : ${poids}</p>
      <p>Allergie : ${allergie}</p>
      <p>Maladie : ${maladie}</p>
      <p>Groupe sanguin : ${groupesanguin}</p>
      <p>Activités physiques : ${activite}</p>
    `;
  }

  // ========== MÉDICAMENTS ==========
  const recapmed = document.getElementById("recapmed");
  
  if (recapmed) {
    const medicaments = JSON.parse(localStorage.getItem("medicaments")) || [];
    
    if (medicaments.length === 0) {
      recapmed.innerHTML = `
        <h2>Médicaments</h2>
        <p>Aucun médicament enregistré</p>
      `;
    } else {
      let htmlMed = "<h2>Médicaments</h2>";
      medicaments.forEach(function(med, index) {
        htmlMed += `
          <p><strong>Médicament ${index + 1}</strong></p>
          <p>Nom : ${med.nom}</p>
          <p>Dosage : ${med.dosage}</p>
          <p>Fréquence quotidienne : ${med.frequence}</p>
          <p>Durée du traitement : ${med.duree}</p>
          <br>
        `;
      });
      recapmed.innerHTML = htmlMed;
    }
  }

  // ========== VACCINS ==========
  const recapvaccin = document.getElementById("recapvaccin");
  
  if (recapvaccin) {
    const vaccins = JSON.parse(localStorage.getItem("vaccins")) || [];
    
    if (vaccins.length === 0) {
      recapvaccin.innerHTML = `
        <h2>Vaccins</h2>
        <p>Aucun vaccin enregistré</p>
      `;
    } else {
      let htmlVac = "<h2>Vaccins</h2>";
      vaccins.forEach(function(vac, index) {
        htmlVac += `
          <p><strong>Vaccin ${index + 1}</strong></p>
          <p>Nom : ${vac.nom}</p>
          <p>Maladie ciblée : ${vac.maladie}</p>
          <p>Date : ${vac.date}</p>
          <p>Nombre de doses : ${vac.doses}</p>
          <p>Rappel prévu : ${vac.rappel}</p>
          <br>
        `;
      });
      recapvaccin.innerHTML = htmlVac;
    }
  }

  // ========== HISTORIQUE MÉDICAL ==========
  const recaphistorique = document.getElementById("recaphistorique");
  
  if (recaphistorique) {
    const evenements = JSON.parse(localStorage.getItem("evenements")) || [];
    
    if (evenements.length === 0) {
      recaphistorique.innerHTML = `
        <h2>Historique médical</h2>
        <p>Aucun événement enregistré</p>
      `;
    } else {
      let htmlHist = "<h2>Historique médical</h2>";
      evenements.forEach(function(evt, index) {
        htmlHist += `
          <p><strong>Événement ${index + 1}</strong></p>
          <p>Date : ${evt.date}</p>
          <p>Type : ${evt.type}</p>
          <p>Description : ${evt.description}</p>
          <br>
        `;
      });
      recaphistorique.innerHTML = htmlHist;
    }
  }

  // ========== BOUTON CONTINUER ==========
  const btnrecap = document.getElementById("btnrecap");
 

});
 
  if (btnrecap) {
    btnrecap.addEventListener("click", function() {
      alert("Récapitulatif consulté !");
      window.location.href = "tips.html";
    });
  }