document.querySelector("form").addEventListener("submit", generateTable)
document.addEventListener("DOMContentLoaded", generateTable)

function generateTable(e) {
    if (e) e.preventDefault()

    const minCol = parseInt(document.getElementById('minCol').value)
    const maxCol = parseInt(document.getElementById('maxCol').value)
    const minRow = parseInt(document.getElementById('minRow').value)
    const maxRow = parseInt(document.getElementById('maxRow').value)

    const container = document.getElementsByClassName('table')[0]
    container.innerHTML = ""

    const table = document.createElement("table")

    const thead = document.createElement("thead")
    const headerRow = document.createElement("tr")

    for (let i = minCol; i <= maxCol; i++) {
        if (i === minCol) {
            const topLeft = document.createElement("th")
            headerRow.appendChild(topLeft)
        }
        const th = document.createElement("th")
        th.textContent = i
        headerRow.appendChild(th)
    }

    thead.appendChild(headerRow)
    table.appendChild(thead)

    const tbody = document.createElement("tbody")
    for (let r = minRow; r <= maxRow; r++) {
        const row = document.createElement("tr")
        for (let c = minCol; c <= maxCol; c++) {
            if (c === minCol) {
                const rowValues = document.createElement("td")
                rowValues.textContent = r
                row.append(rowValues)
            }
            const cell = document.createElement("td")
            cell.textContent = r * c
            row.appendChild(cell)
        }
        tbody.appendChild(row)
    }

    table.appendChild(tbody)
    container.appendChild(table)
}