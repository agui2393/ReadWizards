const test = require("/index")

// To mock DOM elements and simulate clicks
document.body.innerHTML = `
    <div id="hamburger-icon"></div>
    <div class="nav-links"></div>
    <div id="next-chapter-btn-1"></div>
    <div id="next-chapter-btn-2"></div>
    <div id="next-chapter-btn-3"></div>
    <div id="chapter-one" style="display: flex;">Chapter One</div>
    <div id="chapter-two" style="display: none;">Chapter Two</div>
    <div id="chapter-three" style="display: none;">Chapter Three</div>
`;

describe('Hamburger menu and chapter navigation', () => {
    // Test the hamburger icon toggle behavior
    test('should toggle the "active" class on the nav-links when hamburger is clicked', () => {
        const hamburgerIcon = document.getElementById('hamburger-icon');
        const navLinks = document.querySelector('.nav-links');

        // Initially, nav-links should not have "active"
        expect(navLinks.classList.contains('active')).toBe(false);

        // Simulate a click on the hamburger icon
        hamburgerIcon.click();

        // After click, nav-links should have the "active" class
        expect(navLinks.classList.contains('active')).toBe(true);

        // Simulate another click to toggle it back
        hamburgerIcon.click();

        // After second click, nav-links should not have the "active" class
        expect(navLinks.classList.contains('active')).toBe(false);
    });

    // Test the next chapter navigation behavior
    test('should correctly navigate between chapters when next buttons are clicked', () => {
        const nextButton1 = document.getElementById('next-chapter-btn-1');
        const nextButton2 = document.getElementById('next-chapter-btn-2');
        const nextButton3 = document.getElementById('next-chapter-btn-3');

        // Initially, Chapter One is visible
        expect(document.getElementById("chapter-one").style.display).toBe("flex");
        expect(document.getElementById("chapter-two").style.display).toBe("none");
        expect(document.getElementById("chapter-three").style.display).toBe("none");

        // Simulate clicking the first next button (should go to chapter 2)
        nextButton1.click();
        expect(document.getElementById("chapter-one").style.display).toBe("none");
        expect(document.getElementById("chapter-two").style.display).toBe("flex");
        expect(document.getElementById("chapter-three").style.display).toBe("none");

        // Simulate clicking the second next button (should go to chapter 3)
        nextButton2.click();
        expect(document.getElementById("chapter-one").style.display).toBe("none");
        expect(document.getElementById("chapter-two").style.display).toBe("none");
        expect(document.getElementById("chapter-three").style.display).toBe("flex");

        // Simulate clicking the third next button (should go back to chapter 1)
        nextButton3.click();
        expect(document.getElementById("chapter-one").style.display).toBe("flex");
        expect(document.getElementById("chapter-two").style.display).toBe("none");
        expect(document.getElementById("chapter-three").style.display).toBe("none");
    });
});