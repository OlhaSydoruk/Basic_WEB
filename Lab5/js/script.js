///////////////// 1 /////////////////
function validate(data) {
    /* ПІБ */
    if (!(/^[А-ЯІЇЄҐ][а-яіїєҐ']+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/.test(data.fnm.value))) {
        alert('Введіть поле "Ваше ПІБ" формата ТТТТТТ Т.Т., де Т - буква');
        return false;
    }

    /* Група */
    if (!(/^[А-ЯІЇЄҐТ]+-\d{2}$/.test(data.group.value))) {
        alert('Введіть поле "Група" формата ТТ-ЧЧ, де Т - буква, Ч - число');
        return false;
    }

    /* Телефон */
    if (!(/^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/.test(data.phone.value))) {
        alert('Введіть поле "Телефон" формата (ЧЧЧ)-ЧЧЧ-ЧЧ-ЧЧ, де Ч - число');
        return false;
    }

    /* Адреса */
    if (!(/^м.\s\d{6}$/.test(data.address.value))) {
        alert('Введіть поле "Адреса" формата м. ЧЧЧЧЧЧ, де Ч - число');
        return false;
    }

    /* email */
    if (!(/^[a-z]+@[a-z]+\.com$/.test(data.email.value))) {
        alert('Введіть поле "Email" формата ттттт@ттттт.com, де т - буква');
        return false;
    }

    const formData = {};

    formData['ПІБ'] = data.fnm.value;
    formData['Група'] = data.group.value;
    formData['Телефон'] = data.phone.value;
    formData['Адреса'] = data.address.value;
    formData['Email'] = data.email.value;

    const output = document.getElementById("output");
    output.innerHTML = "<h2>Введені дані</h2>";

    for (const field in formData) {
        output.innerHTML += `<p><strong>${field}:</strong> ${formData[field]}</p>`;
    }
}

///////////////// 2 /////////////////
const tableBody = document.getElementById("tableBody");
for (let i = 0; i < 6; i++) {
    const row = tableBody.insertRow(i);
    for (let j = 0; j < 6; j++) {
        const index = i * 6 + j + 1;
        const cell = row.insertCell(j);
        cell.textContent = index;

        if (index === 25) {
            changeColorOnHover(cell);
            changeColorOnClick(cell);
            changeColorOnDblClick(cell);
        }
    }
}

function changeColorOnHover(td) {
    td.addEventListener("mouseover", function () {
        td.style.backgroundColor = getRandomColor();
    });
}

function changeColorOnClick(td) {
    td.addEventListener("click", function () {
        td.style.backgroundColor = document.getElementById('color_picker').value;
    });
}

function changeColorOnDblClick(td) {
    td.addEventListener("dblclick", function () {
        changeCellsColorsWithoutCell(tableBody, td);
    });
}

function changeCellsColorsWithoutCell(table, withoutCell) {
    const rows = table.rows;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            const cell = rows[i].cells[j];
            if (cell.textContent === withoutCell.textContent) continue;
            cell.style.backgroundColor = getRandomColor();
        }
    }
}

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
