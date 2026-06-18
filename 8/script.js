// --------------------
// TAB SWITCHING
// --------------------

function openTab(tabId) {

    let tabs = document.querySelectorAll(".tab");

    tabs.forEach(function(tab){
        tab.classList.remove("active-tab");
    });

    let buttons = document.querySelectorAll(".menu-btn");

    buttons.forEach(function(button){
        button.classList.remove("active");
    });

    document.getElementById(tabId).classList.add("active-tab");

    event.target.classList.add("active");

}


// --------------------
// STUDENT SEARCH
// --------------------

let searchInput = document.getElementById("studentSearch");

if(searchInput){

    searchInput.addEventListener("keyup", function(){

        let value = searchInput.value.toLowerCase();

        let cards = document.querySelectorAll(".student-card");

        cards.forEach(function(card){

            let text = card.innerText.toLowerCase();

            if(text.includes(value)){
                card.style.display = "block";
            }
            else{
                card.style.display = "none";
            }

        });

    });

}


// --------------------
// SIMPLE DASHBOARD COUNTER
// --------------------

function animateNumber(element, target){

    let current = 0;

    let increment = target / 50;

    let timer = setInterval(function(){

        current += increment;

        if(current >= target){

            current = target;

            clearInterval(timer);
        }

        element.innerText = Math.floor(current);

    },20);

}


// --------------------
// OPTIONAL CARD ANIMATION
// --------------------

window.addEventListener("load", function(){

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card,index){

        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(function(){

            card.style.transition = "0.4s";

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        },index * 100);

    });

});


// --------------------
// HOVER EFFECT FOR STUDENTS
// --------------------

let studentCards = document.querySelectorAll(".student-card");

studentCards.forEach(function(card){

    card.addEventListener("mouseenter", function(){

        card.style.boxShadow =
        "0 10px 25px rgba(0,0,0,0.12)";

    });

    card.addEventListener("mouseleave", function(){

        card.style.boxShadow =
        "0 2px 10px rgba(0,0,0,0.05)";

    });

});


// --------------------
// DEMO STUDENT CLICK
// --------------------

studentCards.forEach(function(card){

    card.addEventListener("click", function(){

        alert(
            "Student profile page will open here."
        );

    });

});


// --------------------
// DOCUMENT PROGRESS COLORS
// --------------------

let progressBars = document.querySelectorAll(".progress");

progressBars.forEach(function(bar){

    let width = parseInt(bar.style.width);

    if(width < 50){

        bar.style.background = "#ef4444";
    }
    else if(width < 80){

        bar.style.background = "#f59e0b";
    }
    else{

        bar.style.background = "#22c55e";
    }

});


// --------------------
// TABLE ROW HOVER
// --------------------

let rows = document.querySelectorAll("table tr");

rows.forEach(function(row){

    row.addEventListener("mouseenter", function(){

        row.style.background = "#f9fafb";

    });

    row.addEventListener("mouseleave", function(){

        row.style.background = "";

    });

});


// --------------------
// READY
// --------------------

console.log(
    "Erasmus Mobility Portal Loaded"
);