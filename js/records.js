const history=document.getElementById("history");
const eventdate=document.getElementById("eventdate");
const eventype=document.getElementById("eventype");
const description=document.getElementById("description");
const addevent=document.getElementById("addevent");
const historythead=document.getElementById("historythead");
const historytbody=document.getElementById("historytbody");
const btnhis=document.getElementById("btnhis");

// Validation de la date de l'événement (limite l'année à 4 chiffres)
if (eventdate) {
    eventdate.addEventListener('change', function(e) {
        const date = new Date(e.target.value);
        const year = date.getFullYear();
        
        // Vérifier si l'année a 4 chiffres (entre 1000 et 9999)
        if (year < 1000 || year > 9999) {
            alert('L\'année doit contenir exactement 4 chiffres');
            e.target.value = ''; 
        }
    });
}

// Charger les données au chargement de la page
if(historytbody) {
    const evenements = JSON.parse(localStorage.getItem("evenements")) || [];
    evenements.forEach(function(evt) {
        const tr=document.createElement("tr");

        const tdeventdate=document.createElement("td");
        tdeventdate.textContent=evt.date;

        const tdeventype=document.createElement("td");
        tdeventype.textContent=evt.type;

        const tddescription=document.createElement("td");
        tddescription.textContent=evt.description;

        const tdaction=document.createElement("td");
        const supprime=document.createElement("button");
        supprime.textContent="Supprimer";
        supprime.addEventListener("click",function(){
            tr.remove();
            // Sauvegarder après suppression
            const evenements = [];
            const lignes = historytbody.querySelectorAll("tr");
            lignes.forEach(function(ligne) {
                const cellules = ligne.querySelectorAll("td");
                evenements.push({
                    date: cellules[0].textContent,
                    type: cellules[1].textContent,
                    description: cellules[2].textContent
                });
            });
            localStorage.setItem("evenements", JSON.stringify(evenements));
        });

        tr.appendChild(tdeventdate);
        tr.appendChild(tdeventype);
        tr.appendChild(tddescription);
        tdaction.appendChild(supprime);
        tr.appendChild(tdaction);

        historytbody.appendChild(tr);
    });
}

if(addevent){
    addevent.addEventListener("click",function(){

     const eventdatevalue=eventdate.value.trim();
     const eventypevalue=eventype.value.trim();
     const descriptionvalue=description.value.trim();

     if(eventdatevalue==="" ||
        eventypevalue ===""||
        descriptionvalue ===""){
        alert("veuillez ajouter les informations manquantes !");
        return;
     }

     const tr=document.createElement("tr");

     const tdeventdate=document.createElement("td");
     tdeventdate.textContent=eventdatevalue;

     const tdeventype=document.createElement("td");
     tdeventype.textContent=eventypevalue;

     const tddescription=document.createElement("td");
     tddescription.textContent=descriptionvalue;

     const tdaction=document.createElement("td");
     const supprime=document.createElement("button");
     supprime.textContent="Supprimer";
     supprime.addEventListener("click",function(){
        tr.remove();
        // Sauvegarder après suppression
        const evenements = [];
        const lignes = historytbody.querySelectorAll("tr");
        lignes.forEach(function(ligne) {
            const cellules = ligne.querySelectorAll("td");
            evenements.push({
                date: cellules[0].textContent,
                type: cellules[1].textContent,
                description: cellules[2].textContent
            });
        });
        localStorage.setItem("evenements", JSON.stringify(evenements));
     });

     tr.appendChild(tdeventdate);
     tr.appendChild(tdeventype);
     tr.appendChild(tddescription);
     tdaction.appendChild(supprime);
     tr.appendChild(tdaction);

     historytbody.appendChild(tr);

     // Sauvegarder tous les événements
     const evenements = [];
     const lignes = historytbody.querySelectorAll("tr");
     lignes.forEach(function(ligne) {
         const cellules = ligne.querySelectorAll("td");
         evenements.push({
             date: cellules[0].textContent,
             type: cellules[1].textContent,
             description: cellules[2].textContent
         });
     });
     localStorage.setItem("evenements", JSON.stringify(evenements));

     eventdate.value="";
     eventype.value="";
     description.value="";

     alert("historique medicale enregistre et ajouter au tableau !")

    });
}

if (btnhis) {
  btnhis.addEventListener("click", function() {
    window.location.href = "recap.html";
  });
}