const moment = require('moment')
const DEFAULT = 'YYYY-MM-DD HH:mm:ss'

function Moment(date = new Date(), locale = 'zh-cn') {
    return moment(date).locale(locale)
}

function Format(date, format = DEFAULT, locale = 'zh-cn') {
    return date ? Moment(new Date(date), locale).format(format) : null
}

function YYYYMM(date = null, separator = '-') {
    return Format(date, `YYYY${separator}MM`)
}

function YYYYMMDD(date = null, separator = '-') {
    return Format(date, `YYYY${separator}MM${separator}DD`)
}

function YYYYMMDDHH(date = null, separator = '-') {
    return Format(date, `YYYY${separator}MM${separator}DD HH`)
}

function YYYYMMDDHHMM(date = null, separator = '-', separator2 = ':') {
    return Format(date, `YYYY${separator}MM${separator}DD HH${separator2}mm`)
}

function YYYYMMDDHHMMSS(date = null) {
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
