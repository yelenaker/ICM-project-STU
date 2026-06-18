const SHEET_API =
"https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

async function loadStudents(){

    const response = await fetch(SHEET_API);

    const students = await response.json();

    const tbody = document.querySelector("#studentsTable tbody");

    tbody.innerHTML = "";

    for(let i=0; i<students.length; i++){

        const student = students[i];

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.university}</td>
            <td>${student.country}</td>
            <td>${student.email}</td>

            <td class="${student.passportClass}">
                ${student.passport}
            </td>

            <td class="${student.visaClass}">
                ${student.visa}
            </td>

            <td class="${student.insuranceClass}">
                ${student.insurance}
            </td>

            <td class="${student.laClass}">
                ${student.learningAgreement}
            </td>

            <td>${student.overall}</td>

            <td>
              <a href="${student.folder}" target="_blank">
                Open
              </a>
            </td>
        `;

        tbody.appendChild(row);
    }
}