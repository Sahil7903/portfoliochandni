
let educationButtonSkils = document.getElementById("educationButtonSkils");
let educationButtonQualification = document.getElementById("educationButtonQualification");
let educationButtonHobby = document.getElementById("educationButtonHobby");
let SkillsDescription = document.getElementById("SkillsDescription");
let qualificationDescription = document.getElementById("qualificationDescription");
let hobbyDescription = document.getElementById("hobbyDescription");

qualificationDescription.classList.add("d-none");
hobbyDescription.classList.add("d-none");

function educationSkills() {
    SkillsDescription.classList.remove("d-none");
    qualificationDescription.classList.add("d-none");
    hobbyDescription.classList.add("d-none");
}

function educationQualification() {
    SkillsDescription.classList.add("d-none");
    qualificationDescription.classList.remove("d-none");
    hobbyDescription.classList.add("d-none");
}

function educationHobby() {
    SkillsDescription.classList.add("d-none");
    qualificationDescription.classList.add("d-none");
    hobbyDescription.classList.remove("d-none");
}
