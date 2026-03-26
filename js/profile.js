// Page profil santé

const name = document.getElementById("name");
const profilefull = document.getElementById("profilefull");
const birthday = document.getElementById("birthday");
const phone = document.getElementById("phone");
const sex = document.getElementById("sex");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const blood = document.getElementById("blood");
const physics = document.getElementById("physics");

const allergy = document.getElementById("allergy");
const allergyLabel = document.getElementById("allergyLabel");
const allergyText = document.getElementById("allergietext");

const disease = document.getElementById("disease");
const diseaseLabel = document.getElementById("diseaseLabel");
const maladieText = document.getElementById("maladie");

const profilebut = document.querySelector(".profilebut");

// Validation de la date de naissance (limite l'année à 4 chiffres)
if (birthday) {
    birthday.addEventListener('change', function(e) {
        const date = new Date(e.target.value);
        const year = date.getFullYear();
        
        if (year < 1000 || year > 9999) {
            alert('L\'année doit contenir exactement 4 chiffres');
            e.target.value = '';
        }
    });
}

// Cacher les champs au départ
if (allergyLabel) allergyLabel.style.display = "none";
if (allergyText) allergyText.style.display = "none";
if (diseaseLabel) diseaseLabel.style.display = "none";
if (maladieText) maladieText.style.display = "none";

// Gestion de l'affichage des champs allergie
if (allergy && allergyLabel && allergyText) {
    allergy.addEventListener("change", function() {
        if (this.value === "oui") {
            allergyLabel.style.display = "block";
            allergyText.style.display = "block";
        } else {
            allergyLabel.style.display = "none";
            allergyText.style.display = "none";
        }
    });
}

// Gestion de l'affichage des champs maladie
if (disease && diseaseLabel && maladieText) {
    disease.addEventListener("change", function() {
        if (this.value !== "") {
            diseaseLabel.style.display = "block";
            maladieText.style.display = "block";
        } else {
            diseaseLabel.style.display = "none";
            maladieText.style.display = "none";
        }
    });
}

// Gestion du clic sur le bouton Continuer
if (profilebut) {
    profilebut.addEventListener("click", function() {
        const nameValue = name.value.trim();
        const profileFullValue = profilefull.value.trim();
        const birthdayValue = birthday.value.trim();
        const phoneValue = phone.value.trim();
        const sexValue = sex.value.trim();
        const heightValue = height.value.trim();
        const weightValue = weight.value.trim();
        const bloodValue = blood.value.trim();
        const physicsValue = physics.value.trim();
        const allergyValue = allergy.value.trim();
        const allergyTextValue = allergyText.value.trim();
        const diseaseValue = disease.value.trim();
        const maladieTextValue = maladieText.value.trim();

        // Vérification des champs obligatoires (exactement comme tu voulais)
        if (
            nameValue === "" ||
            profileFullValue === "" ||
            birthdayValue === "" ||
            phoneValue === "" ||
            sexValue === "" ||
            heightValue === "" ||
            weightValue === "" ||
            bloodValue === "" ||
            physicsValue === "" ||
            (allergyValue === "oui" && allergyTextValue === "") ||
            (diseaseValue !== "" && maladieTextValue === "")
        ) {
            alert("Veuillez remplir tous les champs obligatoires !");
            return;
        }

        // Sauvegarde dans le localStorage
        localStorage.setItem("name", nameValue);
        localStorage.setItem("profilefull", profileFullValue);
        localStorage.setItem("birthday", birthdayValue);
        localStorage.setItem("phone", phoneValue);
        localStorage.setItem("sex", sexValue);
        localStorage.setItem("height", heightValue);
        localStorage.setItem("weight", weightValue);
        localStorage.setItem("blood", bloodValue);
        localStorage.setItem("physics", physicsValue);
        localStorage.setItem("allergy", allergyValue);
        localStorage.setItem("allergietext", allergyTextValue);
        localStorage.setItem("disease", diseaseValue);
        localStorage.setItem("maladie", maladieTextValue);

        alert("Profil enregistré avec succès !");
        window.location.href = "medication.html";
    });
}