// Page médicaments
const reminder = document.getElementById("reminder");
const namemed = document.getElementById("namemed");
const dosage = document.getElementById("dosage");
const frequency = document.getElementById("frequency");
const duration = document.getElementById("duration");
const addmed = document.getElementById("addmed");
const medtbody = document.getElementById("medtbody"); 
const btnmed = document.getElementById("btnmed");

document.addEventListener("DOMContentLoaded", function () {
  if (reminder) {
    const maladie = localStorage.getItem("maladie") || "";
    if (maladie !== "") {
      reminder.textContent =
        "Il est enregistré dans la page profil que vous souffrez de : " + maladie;
    } else {
      reminder.textContent =
        "Il est enregistré dans la page profil que vous souffrez de : (aucune maladie enregistrée)";
    }
  }
});

// Charger les médicaments au chargement de la page
if(medtbody) {
    const medicaments = JSON.parse(localStorage.getItem("medicaments")) || [];
    medicaments.forEach(function(med) {
        const tr = document.createElement("tr");

        const tdnamemed = document.createElement("td");
        tdnamemed.textContent = med.nom;

        const tddosage = document.createElement("td");
        tddosage.textContent = med.dosage;

        const tdfrequency = document.createElement("td"); 
        tdfrequency.textContent = med.frequence;

        const tdduration = document.createElement("td");
        tdduration.textContent = med.duree;

        const tdaction = document.createElement("td");
        const supprime = document.createElement("button");
        supprime.textContent = "Supprimer";
        supprime.addEventListener("click", function () {
            tr.remove();
            // Sauvegarder après suppression
            const medicaments = [];
            const lignes = medtbody.querySelectorAll("tr");
            lignes.forEach(function(ligne) {
                const cellules = ligne.querySelectorAll("td");
                medicaments.push({
                    nom: cellules[0].textContent,
                    dosage: cellules[1].textContent,
                    frequence: cellules[2].textContent,
                    duree: cellules[3].textContent
                });
            });
            localStorage.setItem("medicaments", JSON.stringify(medicaments));
        });
        tdaction.appendChild(supprime);

        tr.appendChild(tdnamemed);
        tr.appendChild(tddosage);
        tr.appendChild(tdfrequency);
        tr.appendChild(tdduration);
        tr.appendChild(tdaction);

        medtbody.appendChild(tr);
    });
}

// Ajouter un médicament
if (addmed) {
  addmed.addEventListener("click", function () {
    const namemedvalue = namemed.value.trim();
    const dosagevalue = dosage.value.trim();
    const frequencyvalue = frequency.value.trim();
    const durationvalue = duration.value.trim();

    if (!namemedvalue ||
       !dosagevalue ||
       !frequencyvalue ||
       !durationvalue) {
      alert("Veuillez ajouter les informations manquantes !");
      return;
    }

    const tr = document.createElement("tr");

    const tdnamemed = document.createElement("td");
    tdnamemed.textContent = namemedvalue;

    const tddosage = document.createElement("td");
    tddosage.textContent = dosagevalue;

    const tdfrequency = document.createElement("td"); 
    tdfrequency.textContent = frequencyvalue;

    const tdduration = document.createElement("td");
    tdduration.textContent = durationvalue;

    const tdaction = document.createElement("td");
    const supprime = document.createElement("button");
    supprime.textContent = "Supprimer";
    supprime.addEventListener("click", function () {
      tr.remove();
      // Sauvegarder après suppression
      const medicaments = [];
      const lignes = medtbody.querySelectorAll("tr");
      lignes.forEach(function(ligne) {
          const cellules = ligne.querySelectorAll("td");
          medicaments.push({
              nom: cellules[0].textContent,
              dosage: cellules[1].textContent,
              frequence: cellules[2].textContent,
              duree: cellules[3].textContent
          });
      });
      localStorage.setItem("medicaments", JSON.stringify(medicaments));
    });
    tdaction.appendChild(supprime);

    tr.appendChild(tdnamemed);
    tr.appendChild(tddosage);
    tr.appendChild(tdfrequency);
    tr.appendChild(tdduration);
    tr.appendChild(tdaction);

    medtbody.appendChild(tr);

    // Sauvegarder tous les médicaments
    const medicaments = [];
    const lignes = medtbody.querySelectorAll("tr");
    lignes.forEach(function(ligne) {
        const cellules = ligne.querySelectorAll("td");
        medicaments.push({
            nom: cellules[0].textContent,
            dosage: cellules[1].textContent,
            frequence: cellules[2].textContent,
            duree: cellules[3].textContent
        });
    });
    localStorage.setItem("medicaments", JSON.stringify(medicaments));

    // Réinitialiser les champs
    namemed.value = "";
    dosage.value = "";
    frequency.value = "";
    duration.value = "";

    alert("Médicament enregistré et ajouté au tableau !");
    
  });
}

if (btnmed) {
  btnmed.addEventListener("click", function() {
    window.location.href = "vaccines.html";
  });
}