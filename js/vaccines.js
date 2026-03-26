// page vaccins

const vaccineselect = document.getElementById("vaccineselect");
const vaccinediv = document.getElementById("vaccinediv");
const vaccinetext = document.getElementById("vaccinetext");
const target = document.getElementById("target");
const date = document.getElementById("date");
const planned = document.getElementById("planned");
const number = document.getElementById("number");
const addvaccine = document.getElementById("addvaccine");
const vaccineth = document.getElementById("vaccineth");
const vaccinetbody = document.getElementById("vaccinetbody");
const btnvac = document.getElementById("btnvac");

// Validation de la date de vaccination (limite l'année à 4 chiffres)
if (date) {
    date.addEventListener('change', function(e) {
        const dateObj = new Date(e.target.value);
        const year = dateObj.getFullYear();

        if (year < 1000 || year > 9999) {
            alert('L\'année doit contenir exactement 4 chiffres');
            e.target.value = ''; 
        }
    });
}

// Validation de la date de rappel prévue (limite l'année à 4 chiffres)
if (planned) {
    planned.addEventListener('change', function(e) {
        const dateObj = new Date(e.target.value);
        const year = dateObj.getFullYear();
        
        if (year < 1000 || year > 9999) {
            alert('L\'année doit contenir exactement 4 chiffres');
            e.target.value = ''; 
        }
    });
}

// Charger les vaccins au chargement de la page
if(vaccinetbody) {
    const vaccins = JSON.parse(localStorage.getItem("vaccins")) || [];
    vaccins.forEach(function(vac) {
        const tr = document.createElement("tr");

        const tdvaccinetext = document.createElement("td");
        tdvaccinetext.textContent = vac.nom;

        const tdtarget = document.createElement("td");
        tdtarget.textContent = vac.maladie;

        const tddate = document.createElement("td");
        tddate.textContent = vac.date;

        const tdnumber = document.createElement("td");
        tdnumber.textContent = vac.doses;

        const tdplanned = document.createElement("td");
        tdplanned.textContent = vac.rappel;

        const tdaction = document.createElement("td");
        const supprime = document.createElement("button");
        supprime.textContent = "supprimer";
        supprime.addEventListener("click", function () {
            tr.remove();
            // Sauvegarder après suppression
            const vaccins = [];
            const lignes = vaccinetbody.querySelectorAll("tr");
            lignes.forEach(function(ligne) {
                const cellules = ligne.querySelectorAll("td");
                vaccins.push({
                    nom: cellules[0].textContent,
                    maladie: cellules[1].textContent,
                    date: cellules[2].textContent,
                    doses: cellules[3].textContent,
                    rappel: cellules[4].textContent
                });
            });
            localStorage.setItem("vaccins", JSON.stringify(vaccins));
        });

        tdaction.appendChild(supprime);
        tr.appendChild(tdvaccinetext);
        tr.appendChild(tdtarget);
        tr.appendChild(tddate);
        tr.appendChild(tdnumber);
        tr.appendChild(tdplanned);
        tr.appendChild(tdaction);

        vaccinetbody.appendChild(tr);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  if (vaccineselect && vaccinediv) {
    vaccineselect.addEventListener("change", function () {
      if (this.value === "oui") {
        vaccinediv.style.display = "block";
      } else {
        vaccinediv.style.display = "none";
      }
    });
  }

  if (addvaccine) {
    addvaccine.addEventListener("click", function () {
      const vaccineselectvalue = vaccineselect ? vaccineselect.value.trim() : "";
      const vaccinetextvalue = vaccinetext ? vaccinetext.value.trim() : "";
      const targetvalue = target ? target.value.trim() : "";
      const datevalue = date ? date.value.trim() : "";
      const numbervalue = number ? number.value.trim() : "";
      const plannedvalue = planned ? planned.value.trim() : "";

      if (
        vaccineselectvalue === "" ||
        vaccinetextvalue === "" ||
        targetvalue === "" ||
        datevalue === "" ||
        numbervalue === "" ||
        plannedvalue === ""
      ) {
        alert("Veuillez ajouter toutes les informations demandées !");
        return;
      }

      const tr = document.createElement("tr");

      const tdvaccinetext = document.createElement("td");
      tdvaccinetext.textContent = vaccinetextvalue;

      const tdtarget = document.createElement("td");
      tdtarget.textContent = targetvalue;

      const tddate = document.createElement("td");
      tddate.textContent = datevalue;

      const tdnumber = document.createElement("td");
      tdnumber.textContent = numbervalue;

      const tdplanned = document.createElement("td");
      tdplanned.textContent = plannedvalue;

      const tdaction = document.createElement("td");
      const supprime = document.createElement("button");
      supprime.textContent = "supprimer";
      supprime.addEventListener("click", function () {
        tr.remove();
        // Sauvegarder après suppression
        const vaccins = [];
        const lignes = vaccinetbody.querySelectorAll("tr");
        lignes.forEach(function(ligne) {
            const cellules = ligne.querySelectorAll("td");
            vaccins.push({
                nom: cellules[0].textContent,
                maladie: cellules[1].textContent,
                date: cellules[2].textContent,
                doses: cellules[3].textContent,
                rappel: cellules[4].textContent
            });
        });
        localStorage.setItem("vaccins", JSON.stringify(vaccins));
      });

      tdaction.appendChild(supprime);
      tr.appendChild(tdvaccinetext);
      tr.appendChild(tdtarget);
      tr.appendChild(tddate);
      tr.appendChild(tdnumber);
      tr.appendChild(tdplanned);
      tr.appendChild(tdaction);

      vaccinetbody.appendChild(tr);

      // Sauvegarder tous les vaccins
      const vaccins = [];
      const lignes = vaccinetbody.querySelectorAll("tr");
      lignes.forEach(function(ligne) {
          const cellules = ligne.querySelectorAll("td");
          vaccins.push({
              nom: cellules[0].textContent,
              maladie: cellules[1].textContent,
              date: cellules[2].textContent,
              doses: cellules[3].textContent,
              rappel: cellules[4].textContent
          });
      });
      localStorage.setItem("vaccins", JSON.stringify(vaccins));

      vaccinetext.value = "";
      target.value = "";
      date.value = "";
      number.value = "";
      planned.value = "";

      alert("Vaccin enregistré et ajouté au tableau !");
    });
  }
});

if (btnvac) {
  btnvac.addEventListener("click", function() {
    window.location.href = "records.html";
  });
}