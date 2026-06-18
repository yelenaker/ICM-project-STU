// ======================
// STUDENTS
// ======================

const students = [

{
    id: 1,
    name: "Sofia Shepelieva",
    country: "Ukraine",
    university: "KNUBA",
    type: "Long-term",
    status: "Active",
    start: "01.03.2024",
    end: "15.05.2024"
},

{
    id: 2,
    name: "Kseniia Vii",
    country: "Ukraine",
    university: "Taras Shevchenko University",
    type: "Long-term",
    status: "Active",
    start: "01.10.2024",
    end: "15.12.2024"
},

{
    id: 3,
    name: "Mesha Mbisana",
    country: "Botswana",
    university: "University of Botswana",
    type: "Long-term",
    status: "Completed",
    start: "05.06.2025",
    end: "04.09.2025"
},

{
    id: 4,
    name: "Tumelo Padiso",
    country: "Botswana",
    university: "University of Botswana",
    type: "Long-term",
    status: "Completed",
    start: "05.06.2025",
    end: "04.09.2025"
},

{
    id: 5,
    name: "Tatenda Runganga",
    country: "South Africa",
    university: "University of the Western Cape",
    type: "Short-term",
    status: "Upcoming",
    start: "13.06.2025",
    end: "02.07.2025"
},

{
    id: 6,
    name: "Colin Lee",
    country: "South Africa",
    university: "University of the Western Cape",
    type: "Short-term",
    status: "Upcoming",
    start: "15.06.2026",
    end: "04.07.2026"
},

{
    id: 7,
    name: "Adili Mbembela",
    country: "Tanzania",
    university: "MBEYA University",
    type: "Long-term",
    status: "Upcoming",
    start: "25.09.2025",
    end: "24.12.2025"
},

{
    id: 8,
    name: "Tshering Tshokey",
    country: "Bhutan",
    university: "Sherubtse College",
    type: "Long-term",
    status: "Upcoming",
    start: "11.12.2025",
    end: "10.03.2026"
},

{
    id: 9,
    name: "Andrija Mitrovic",
    country: "Montenegro",
    university: "University of Montenegro",
    type: "Long-term",
    status: "Upcoming",
    start: "16.02.2026",
    end: "15.07.2026"
},

{
    id: 10,
    name: "Aleksa Sabljic",
    country: "Bosnia",
    university: "Apeiron University",
    type: "Long-term",
    status: "Upcoming",
    start: "10.02.2026",
    end: "09.07.2026"
}

];


// ======================
// STAFF
// ======================

const staff = [

{
    name: "Ivan Spanik",
    country: "Bhutan",
    type: "Teaching",
    status: "Upcoming"
},

{
    name: "Olena Verenych",
    country: "Ukraine",
    type: "Teaching",
    status: "Completed"
},

{
    name: "Osden Jokonya",
    country: "South Africa",
    type: "Teaching",
    status: "Active"
},

{
    name: "Pavle Dakic",
    country: "Bosnia",
    type: "Teaching",
    status: "Upcoming"
},

{
    name: "Valentino Vranic",
    country: "Bosnia",
    type: "Teaching",
    status: "Completed"
}

];


// ======================
// UNIVERSITIES
// ======================

const universities = [

{
    name: "KNUBA",
    country: "Ukraine",
    mobilities: 11
},

{
    name: "Taras Shevchenko University",
    country: "Ukraine",
    mobilities: 11
},

{
    name: "University of Botswana",
    country: "Botswana",
    mobilities: 6
},

{
    name: "Sherubtse College",
    country: "Bhutan",
    mobilities: 10
},

{
    name: "University of Zambia",
    country: "Zambia",
    mobilities: 6
}

];


// ======================
// BUDGET
// ======================

const budget = [

{
    country: "Ukraine",
    amount: 104415,
    used: 96
},

{
    country: "Bhutan",
    amount: 22720,
    used: 99
},

{
    country: "Botswana",
    amount: 28440,
    used: 94
},

{
    country: "South Africa",
    amount: 36068,
    used: 99
},

{
    country: "Zambia",
    amount: 24360,
    used: 99
}

];


// ======================
// DOCUMENTS
// ======================

const documents = [

{
    name: "Sofia Shepelieva",
    progress: 90
},

{
    name: "Mesha Mbisana",
    progress: 100
},

{
    name: "Tatenda Runganga",
    progress: 75
},

{
    name: "Colin Lee",
    progress: 60
},

{
    name: "Tshering Tshokey",
    progress: 95
}

];


// ======================
// CALENDAR
// ======================

const calendarEvents = [

{
    date: "13 June",
    event: "Osden Jokonya Arrival"
},

{
    date: "15 June",
    event: "Teaching Mobility Starts"
},

{
    date: "28 June",
    event: "Mobility Ends"
},

{
    date: "04 July",
    event: "Student Departure"
}

];

console.log("Data Loaded");