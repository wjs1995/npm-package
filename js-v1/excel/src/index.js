const Excel = require('./pkg/Export2Excel')

module.exports = class Xlsx {
    constructor() {
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

    SetFilename(filename) {
        this.filename = filename
    }

    SetMerges(merges = []) {
        this.merges = merges
    }

    setAutoWidth(autoWidth = true) {
        this.autoWidth = autoWidth
    }

    Import() {
        console.log('导入')
    }

    Export() {
        Excel.export_json_to_excel({
            multiHeader: this.multiHeader || [],
            header: this.header || [],
            data: this.data || [],
            filename: this.filename || (new Date().getTime()),
            autoWidth: !!this.autoWidth,
            bookType: 'xlsx'
        })
        console.log('导出')
    }
}

