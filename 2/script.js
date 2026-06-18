const panel = document.getElementById("detailPanel");
const overlay = document.getElementById("overlay");

function openPanel() {
    panel.classList.add("open");
    overlay.classList.add("show");
}

function closePanel() {
    panel.classList.remove("open");
    overlay.classList.remove("show");
}

/* DROPDOWNS */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {

    button.addEventListener("click", (e) => {

        e.stopPropagation();

        const dropdown =
            button.parentElement.querySelector(".dropdown");

        document.querySelectorAll(".dropdown").forEach((menu) => {

            if (menu !== dropdown) {
                menu.classList.remove("show");
            }

        });

        dropdown.classList.toggle("show");

    });

});

document.addEventListener("click", () => {

    document.querySelectorAll(".dropdown").forEach((menu) => {
        menu.classList.remove("show");
    });

});

/* SIDEBAR ACTIVE STATES */

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {

    item.addEventListener("click", () => {

        menuItems.forEach((i) => {
            i.classList.remove("active");
            i.classList.remove("active-sub");
        });

        item.classList.add("active-sub");

    });

});

/* THEME BUTTON */

const themeButton = document.querySelector(".theme-btn");

let darkMode = false;

themeButton.addEventListener("click", () => {

    darkMode = !darkMode;

    document.body.classList.toggle("dark-mode");

    if (darkMode) {

        themeButton.innerHTML = "🌙";

    } else {

        themeButton.innerHTML = "☀️";

    }

});

/* LANGUAGE BUTTON */

const langButton = document.querySelector(".lang-btn");

let currentLang = "EN";

langButton.addEventListener("click", () => {

    if (currentLang === "EN") {

        currentLang = "SK";
        langButton.innerHTML = "SK / EN";

    } else {

        currentLang = "EN";
        langButton.innerHTML = "EN / SK";

    }

});

/* NOTE BUTTON */

const addNoteButton = document.querySelector(".full-btn");
const textarea = document.querySelector("textarea");
const notesContainer = document.querySelector(".notes");

addNoteButton.addEventListener("click", () => {

    const text = textarea.value.trim();

    if (text === "") {
        return;
    }

    const now = new Date();

    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
        <div class="note-top">
            <strong>Coordinator</strong>
            <span>
                ${now.toLocaleDateString()} • ${now.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                })}
            </span>
        </div>

        <p>${text}</p>
    `;

    notesContainer.prepend(note);

    textarea.value = "";

});

/* TABLE ROW HOVER ANIMATION */

const tableRows = document.querySelectorAll("tbody tr");

tableRows.forEach((row) => {

    row.addEventListener("mouseenter", () => {

        row.style.transform = "scale(1.002)";

    });

    row.addEventListener("mouseleave", () => {

        row.style.transform = "scale(1)";

    });

});


/* ========================= */
/* TABS */
/* ========================= */

const tabButtons = document.querySelectorAll(".tab-btn");
const tabPages = document.querySelectorAll(".tab-page");

tabButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const target =
            button.getAttribute("data-tab");

        tabButtons.forEach((btn) => {
            btn.classList.remove("active-tab");
        });

        tabPages.forEach((page) => {
            page.classList.remove("active-page");
        });

        button.classList.add("active-tab");

        document
            .getElementById(target)
            .classList.add("active-page");

    });

});