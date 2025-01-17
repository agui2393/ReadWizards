function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


let currentChapter = 1;

function nextPage() {
    if (currentChapter === 1) {
        document.getElementById("chapterOne").style.display = "none";
        document.getElementById("chapterTwo").style.display = "flex";
        currentChapter = 2;
    } else if (currentChapter === 2) {
        document.getElementById("chapterTwo").style.display = "none";
        document.getElementById("chapterThree").style.display = "flex";
        currentChapter = 3;
    } else if (currentChapter === 3) {
        document.getElementById("chapterThree").style.display = "none";
        document.getElementById("chapterOne").style.display = "flex";
        currentChapter = 1;
    }
}