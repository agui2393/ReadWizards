/* Hamburger*/

document.getElementById('hamburger-icon').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

/*Event listeners*/
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button-begin-quest2").addEventListener("click", nextPage);
    document.getElementById("button-cast-name").addEventListener("click", startGame);
    document.getElementById("new-game-button").addEventListener("click", newGame);
});

/* Function to show input page and hide text */
function nextPage() {
    document.getElementById("start-page").style.display = "none";
    document.getElementById("game-page-2").style.display = "none";
    document.getElementById("name-page").style.display = "flex";
}
/* Function to start name after introducing USER details*/
function startGame() {
    const userName = document.getElementById("first-name").value.trim();
    let userGender = "wizard";
    const genderCheckboxes = document.querySelectorAll("input[name='gender']:checked");
    if (genderCheckboxes.length > 0) {
        userGender = genderCheckboxes[0].value === "boy" ? "male" : "female";
    }
    if (userName === "") {
        alert("Please enter your name!");
        return;
    }

    document.getElementById("name-page").style.display = "none";
    document.getElementById("game-page-2").style.display = "flex";

    /* Fetch wizard character data from an API and filter by gender and return a ramdon name*/
    fetch('https://hp-api.onrender.com/api/characters')
        .then(response => response.json())
        .then(data => {
            const filteredCharacters = data.filter(character =>
                userGender === "wizard" || character.gender === userGender
            );

            const randomCharacter = filteredCharacters[Math.floor(Math.random() * filteredCharacters.length)];

            const wizardName = `${randomCharacter.name} the Wizard`;
            document.getElementById("wizard-name").textContent = `${userName}, your magical name is ${wizardName}!`;
        })
        .catch(error => {
            alert('Oops! Something went wrong while fetching wizard data. Please try again later.');
            console.error('Error fetching wizard data:', error);
        });

    document.getElementById("new-game-button").style.display = "flex";

}

/*Redirect to the "quest2.html" page*/
function newGame() {
    window.location.href = "quest2.html"
}