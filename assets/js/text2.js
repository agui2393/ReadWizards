function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function nextPage() {
    document.getElementById("startPage").style.display = "none";
    document.getElementById("namePage").style.display = "flex";
}

function startGame() {
    const userName = document.getElementById("firstName").value.trim();
    let userGender = "wizard";
    const genderCheckboxes = document.querySelectorAll("input[name='gender']:checked");
    if (genderCheckboxes.length > 0) {
        userGender = genderCheckboxes[0].value === "boy" ? "male" : "female";
    }

    if (userName === "") {
        alert("Please enter your name!");
        return;
    }

    document.getElementById("namePage").style.display = "none";
    document.getElementById("gamePage").style.display = "block";

    fetch('https://hp-api.onrender.com/api/characters')
        .then(response => response.json()) // Convert response to JSON
        .then(data => {
            const filteredCharacters = data.filter(character =>
                userGender === "wizard" || character.gender === userGender
            );

            const randomCharacter = filteredCharacters[Math.floor(Math.random() * filteredCharacters.length)];

            const wizardName = `${randomCharacter.name} the Wizard`;
            document.getElementById("wizardName").textContent = `${userName}, your magical name is ${wizardName}!`;
        })
        .catch(error => {
            alert('Oops! Something went wrong while fetching wizard data. Please try again later.');
            console.error('Error fetching wizard data:', error);
        });
}