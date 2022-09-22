const XLSX = require('xlsx')

export function Xlsx() {
    return XLSX
}

export function GetHeaderRow(sheet) {
    const headers = []
    const range = XLSX.utils.decode_range(sheet['!ref'])
    let C
    const R = range.s.r
    /* start in the first row */
    for (C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({c: C, r: R})]
        /* find the cell in the first row */
        let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
        headers.push(hdr)
    }
    return headers
}

function FileHandle(e, isHeader, isResults) {
    return new Promise((resolve, reject) => {
        const data = e.target.result
        const workbook = XLSX.read(data, {type: 'array'})
        const sheetData = (workbook.SheetNames instanceof Array) && workbook.SheetNames.map(sheetName => {
            const worksheet = workbook.Sheets[sheetName] || {};
            const headers = isHeader ? GetHeaderRow(worksheet) : [];
            const results = isResults ? XLSX.utils.sheet_to_json(worksheet) : [];
            return {
                sheetName,
                headers,
                results,
            }
        })
        resolve(sheetData)
    })
}

export function ReadExcel(fileList = [], isHeader = true, isResults = true) {
    return new Promise((resolve, reject) => {

        const all = fileList.map(file => {
            return new Promise((rv, rj) => {
                const reader = new FileReader()
                const fileName = file && file.name || null;
                const fileSize = file && file.size || null
                reader.onload = e => {
                    FileHandle(e, isHeader, isResults).then(sheetData => {
                        const fileO = {
                            sheetData,
                            fileName,
                            fileSize
                        }
                        rv(fileO)
                    }).catch(rj)
                }
                reader.readAsArrayBuffer(file)
            })
        })

        Promise.all(all).then(resolve).catch(reject)
    })
}
