const Excel = require('./pkg/Export2Excel')
const IExcel = require('./pkg/ImportExcel')
module.exports = class Xlsx {
    constructor() {
    }

    XLSX() {
        return IExcel.Xlsx()
    }

    SetMultiHeader(multiHeader = []) {
        this.multiHeader = multiHeader
    }

    SetHeader(header = []) {
        this.header = header
    }

    SetData(data = []) {
        this.data = data
    }

    SetFilename(filename = null) {
        this.filename = filename
    }

    SetMerges(merges = []) {
        this.merges = merges
    }

    SetAutoWidth(autoWidth = true) {
        this.autoWidth = autoWidth
    }

    Reset() {
        this.SetMultiHeader()
        this.SetHeader()
        this.SetData()
        this.SetFilename()
        this.SetMerges()
        this.SetAutoWidth()
    }

    isExcel(file) {
        return /\.(xlsx|xls|csv)$/.test(file.name)
    }

    Import(fileList = [], isHeader = true, isResults = true) {
        return new Promise((resolve, reject) => {
            if (!fileList) {
                reject("请传入文件")
            }
            if (!fileList.every(file => this.isExcel(file))) {
                reject("请传入excel文件")
            }
            IExcel.ReadExcel(fileList, isHeader, isResults).then(resolve).catch(reject)
        })
    }

    Export(reset = true) {
        return new Promise((resolve, reject) => {
            Excel.export_json_to_excel({
                multiHeader: this.multiHeader || [],
                header: this.header || [],
                data: this.data || [],
                filename: this.filename || (new Date().getTime()),
                merges: this.merges,
                autoWidth: !!this.autoWidth,
                bookType: 'xlsx'
            })
            if (reset) {
                this.Reset()
            }
            resolve()
        })
    }
}

