/* Hamburger*/

document.getElementById('hamburger-icon').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});





/*Meet the wizards*/


document.getElementById('next-chapter-btn-1').addEventListener('click', nextPage);
document.getElementById('next-chapter-btn-2').addEventListener('click', nextPage);
document.getElementById('next-chapter-btn-3').addEventListener('click', nextPage);

let currentChapter = 1;

function nextPage() {
    if (currentChapter === 1) {
        document.getElementById("chapter-one").style.display = "none";
        document.getElementById("chapter-two").style.display = "flex";
        currentChapter = 2;
    } else if (currentChapter === 2) {
        document.getElementById("chapter-two").style.display = "none";
        document.getElementById("chapter-three").style.display = "flex";
        currentChapter = 3;
    } else if (currentChapter === 3) {
        document.getElementById("chapter-three").style.display = "none";
        document.getElementById("chapter-one").style.display = "flex";
        currentChapter = 1;
    }
}