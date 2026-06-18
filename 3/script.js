const navButtons = document.querySelectorAll(".nav-item, .sub-nav");
const pages = document.querySelectorAll(".page");

navButtons.forEach(button => {
  button.addEventListener("click", () => {

    navButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const pageId = button.dataset.page;

    pages.forEach(page => {
      page.classList.remove("active-page");
    });

    const target = document.getElementById(pageId);

    if(target){
      target.classList.add("active-page");
    }
  });
});

function openPanel(title){

  document.getElementById("panelTitle").innerText = title;

  document.getElementById("detailPanel").classList.add("open");
  document.getElementById("detailOverlay").classList.add("show");
}

function closePanel(){
  document.getElementById("detailPanel").classList.remove("open");
  document.getElementById("detailOverlay").classList.remove("show");
}

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    themeToggle.innerHTML = "☀️";
  }else{
    themeToggle.innerHTML = "🌙";
  }
});

const langToggle = document.getElementById("langToggle");

let currentLang = "en";

langToggle.addEventListener("click", () => {

  currentLang = currentLang === "en" ? "sk" : "en";

  const translatable = document.querySelectorAll("[data-en]");

  translatable.forEach(el => {
    el.innerText = el.dataset[currentLang];
  });
});

const notifBtn = document.getElementById("notifBtn");
const notifDropdown = document.getElementById("notifDropdown");

notifBtn.addEventListener("click", () => {
  notifDropdown.classList.toggle("show");
});

document.addEventListener("click", (e) => {

  if(!notifBtn.contains(e.target) && !notifDropdown.contains(e.target)){
    notifDropdown.classList.remove("show");
  }
});

const mobileToggle = document.getElementById("mobileToggle");
const sidebar = document.getElementById("sidebar");

mobileToggle.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

  const filter = searchInput.value.toLowerCase();

  const rows = document.querySelectorAll("tbody tr");

  rows.forEach(row => {

    const text = row.innerText.toLowerCase();

    if(text.includes(filter)){
      row.style.display = "";
    }else{
      row.style.display = "none";
    }
  });
});

const selects = document.querySelectorAll("select");

selects.forEach(select => {

  select.addEventListener("change", () => {

    select.style.transform = "scale(1.03)";

    setTimeout(() => {
      select.style.transform = "scale(1)";
    }, 150);
  });
});

document.querySelectorAll(".doc-card button").forEach(button => {

  button.addEventListener("click", () => {

    button.innerText = "Processing...";

    setTimeout(() => {
      button.innerText = "Completed";
    }, 900);
  });
});

document.querySelectorAll(".settings-btn").forEach(button => {

  button.addEventListener("click", () => {

    button.innerText = "Exporting...";

    setTimeout(() => {
      button.innerText = "Done";
    }, 1000);
  });
});