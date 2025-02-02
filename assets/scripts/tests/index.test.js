const questions = require("../index")

// app.test.js
const {
    JSDOM
} = require('jsdom');


let dom, document, window;

beforeEach(() => {
    // Set up the DOM and window for each test
    dom = new JSDOM(html);
    document = dom.window.document;
    window = dom.window;

    // Mocking the global variables that your code depends on (i.e., nextPage)
    global.document = document;
    global.window = window;

    // Add the event listeners (You could also import your actual JS file here if needed)
    document.getElementById('hamburger-icon').addEventListener('click', function () {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    });

    document.getElementById('next-chapter-btn-1').addEventListener('click', nextPage);
    document.getElementById('next-chapter-btn-2').addEventListener('click', nextPage);
    document.getElementById('next-chapter-btn-3').addEventListener('click', nextPage);
});

afterEach(() => {
    // Cleanup after each test (if necessary)
    jest.clearAllMocks();
});

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

let currentChapter = 1;

// Test Hamburger Menu Toggle
test('hamburger icon toggles nav-links active class', () => {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navLinks = document.querySelector('.nav-links');

    // Initially, navLinks shouldn't have 'active' class
    expect(navLinks.classList.contains('active')).toBe(false);

    // Simulate click on hamburger icon
    hamburgerIcon.click();

    // After click, the 'active' class should be added
    expect(navLinks.classList.contains('active')).toBe(true);

    // Simulate another click on hamburger icon
    hamburgerIcon.click();

    // After second click, the 'active' class should be removed
    expect(navLinks.classList.contains('active')).toBe(false);
});

// Test Next Chapter Button Functionality
test('next chapter buttons work correctly', () => {
    const nextBtn1 = document.getElementById('next-chapter-btn-1');
    const nextBtn2 = document.getElementById('next-chapter-btn-2');
    const nextBtn3 = document.getElementById('next-chapter-btn-3');

    // Test that chapter-one is initially visible
    expect(document.getElementById('chapter-one').style.display).toBe('flex');
    expect(document.getElementById('chapter-two').style.display).toBe('none');
    expect(document.getElementById('chapter-three').style.display).toBe('none');

    // Simulate clicking on next chapter buttons in order
    nextBtn1.click();
    expect(document.getElementById('chapter-one').style.display).toBe('none');
    expect(document.getElementById('chapter-two').style.display).toBe('flex');
    expect(document.getElementById('chapter-three').style.display).toBe('none');

    nextBtn2.click();
    expect(document.getElementById('chapter-one').style.display).toBe('none');
    expect(document.getElementById('chapter-two').style.display).toBe('none');
    expect(document.getElementById('chapter-three').style.display).toBe('flex');

    nextBtn3.click();
    expect(document.getElementById('chapter-one').style.display).toBe('flex');
    expect(document.getElementById('chapter-two').style.display).toBe('none');
    expect(document.getElementById('chapter-three').style.display).toBe('none');
});