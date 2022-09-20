import moment from 'moment'

const DEFAULT = 'YYYY-MM-DD HH:mm:ss'

function Format(date, format = DEFAULT) {
    return date ? moment(new Date(date)).format(format) : null
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
    YYYYMM,
    YYYYMMDD,
    YYYYMMDDHH,
    YYYYMMDDHHmm,
    YYYYMMDDHHmmss
}
