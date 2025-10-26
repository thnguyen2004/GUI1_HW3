document.querySelector("form").addEventListener("input", validateInput);

document.querySelector("form").addEventListener("submit", generateTable);
document.addEventListener("DOMContentLoaded", generateTable);

function validateInput(e) {
  if (e) e.preventDefault();

  const minCol = parseInt(document.getElementById('minCol').value);
  const maxCol = parseInt(document.getElementById('maxCol').value);
  const minRow = parseInt(document.getElementById('minRow').value);
  const maxRow = parseInt(document.getElementById('maxRow').value);

  let valid = true;

  // Reset all errors
  document.getElementById('errorMinCol').textContent = '';
  document.getElementById('errorMaxCol').textContent = '';
  document.getElementById('errorMinRow').textContent = '';
  document.getElementById('errorMaxRow').textContent = '';

  // Column checks
  if (minCol > maxCol) {
    document.getElementById('errorMinCol').textContent = 'Min column must be ≤ max column';
    valid = false;
  }
  if (minCol < -50 || minCol > 50) {
    document.getElementById('errorMinCol').textContent = 'Value must be between -50 and 50';
    valid = false;
  }
  if (maxCol < -50 || maxCol > 50) {
    document.getElementById('errorMaxCol').textContent = 'Value must be between -50 and 50';
    valid = false;
  }

  // Row checks
  if (minRow > maxRow) {
    document.getElementById('errorMinRow').textContent = 'Min row must be ≤ max row';
    valid = false;
  }
  if (minRow < -50 || minRow > 50) {
    document.getElementById('errorMinRow').textContent = 'Value must be between -50 and 50';
    valid = false;
  }
  if (maxRow < -50 || maxRow > 50) {
    document.getElementById('errorMaxRow').textContent = 'Value must be between -50 and 50';
    valid = false;
  }

  // Enable/disable submit button based on validity
  document.getElementById('submit').disabled = !valid;
}

function generateTable(e) {
    if (e) e.preventDefault();

    const minCol = parseInt(document.getElementById('minCol').value);
    const maxCol = parseInt(document.getElementById('maxCol').value);
    const minRow = parseInt(document.getElementById('minRow').value);
    const maxRow = parseInt(document.getElementById('maxRow').value);

    const container = document.getElementsByClassName('table')[0];
    container.innerHTML = "";

    const table = document.createElement("table");

    const tbody = document.createElement("tbody");
    const headerRow = document.createElement("tr");

    for (let i = minCol; i <= maxCol; i++) {
        if (i === minCol) {
            const topLeft = document.createElement("th");
            topLeft.classList.add("topLeft");
            headerRow.appendChild(topLeft);
        }
        const th = document.createElement("th");
        th.classList.add("header-cell");
        th.textContent = i;
        headerRow.appendChild(th);
    }

    tbody.appendChild(headerRow);

    for (let r = minRow; r <= maxRow; r++) {
        const row = document.createElement("tr");
        for (let c = minCol; c <= maxCol; c++) {
            if (c === minCol) {
                const rowValues = document.createElement("th");
                rowValues.classList.add("vertical-header-cell");
                rowValues.textContent = r;
                row.append(rowValues);
            }
            const cell = document.createElement("td");
            cell.textContent = r * c;
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    container.appendChild(table);
}