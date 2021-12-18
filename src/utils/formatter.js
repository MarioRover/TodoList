import moment from 'moment'

const momentFormat = (date) => {
    return moment(date).format('MMM Do YYYY, HH:mm:ss')
}

export {
    momentFormat
}