export const getCurrentDateTime = () => {
    const months = [
        'янв',
        'февр',
        'март',
        'апр',
        'май',
        'июн',
        'июл',
        'авг',
        'снт',
        'окт',
        'нбр',
        'дкбр',
    ]

    const weekdays = [
        'воскресенье',
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота',
    ]

    const date = new Date()
    const dayOfMonth = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    const dayOfWeek  = weekdays[date.getDay()]

    let hours = date.getHours()<10 ? `0${date.getHours()}` : date.getHours()
    let minutes = date.getMinutes()<10 ? `0${date.getMinutes()}`: date.getMinutes()

    return {
        dayOfMonth,
        month,
        year,
        dayOfWeek,
        hours,
        minutes
    }
}