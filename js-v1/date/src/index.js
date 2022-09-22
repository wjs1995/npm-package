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

function YYYYMMDDHHMMSS(date = null, separator = '-', separator2 = ':') {
    return Format(date, `YYYY${separator}MM${separator}DD HH${separator2}mm${separator2}ss`)
}

function AddYears(date = null, n = 0) {
    return Moment(date).add(n, 'years').format()
}

function AddMonths(date = null, n = 0) {
    return Moment(date).add(n, 'months').format()
}

function AddDays(date = null, n = 0) {
    return Moment(date).add(n, 'days').format()
}

function AddHours(date = null, n = 0) {
    return Moment(date).add(n, 'hours').format()
}

function AddMinutes(date = null, n = 0) {
    return Moment(date).add(n, 'minutes').format()
}

function AddSeconds(date = null, n = 0) {
    return Moment(date).add(n, 'seconds').format()
}

function AddMilliseconds(date = null, n = 0) {
    return Moment(date).add(n, 'milliseconds').format()
}

function AddWeeks(date = null, n = 0) {
    return Moment(date).add(n, 'weeks').format()
}

module.exports = {
    Moment,
    Format,
    YYYYMM,
    YYYYMMDD,
    YYYYMMDDHH,
    YYYYMMDDHHMM,
    YYYYMMDDHHMMSS,
    AddYears,
    AddMonths,
    AddDays,
    AddHours,
    AddMinutes,
    AddSeconds,
    AddMilliseconds,
    AddWeeks
}
