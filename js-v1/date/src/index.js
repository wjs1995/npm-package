const moment = require('moment')
const DEFAULT = 'YYYY-MM-DD HH:mm:ss'

function Moment(date = new Date(), locale= 'zh-cn') {
    return moment(date).locale(locale)
}

function Format(date, format = DEFAULT, locale = 'zh-cn') {
    return date ? Moment(new Date(date), locale).format(format) : null
}


function YYYYMM(date = null) {
    return Format(date, 'YYYY-MM')
}

function YYYYMMDD(date = null) {
    return Format(date, 'YYYY-MM-DD')
}

function YYYYMMDDHH(date = null) {
    return Format(date, 'YYYY-MM-DD HH')
}

function YYYYMMDDHHmm(date = null) {
    return Format(date, 'YYYY-MM-DD HH:mm')
}

function YYYYMMDDHHmmss(date = null) {
    return Format(date)
}

module.exports = {
    test() {
        console.log('调试')
    },
    Moment,
    YYYYMM,
    YYYYMMDD,
    YYYYMMDDHH,
    YYYYMMDDHHmm,
    YYYYMMDDHHmmss
}
