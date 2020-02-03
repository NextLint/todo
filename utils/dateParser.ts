import moment from 'moment'
import { ITask } from '../redux/store/state-types'
moment.locale('ru')

export const getFullDate = (date: string) => {
    return moment(date, 'YYYY-MM-DD, hh:mm').format('DD MMMM YYYY, HH:MM')
}

export const getToday = (date: any) => {
    if (date != '') { return moment(date, 'YYYY-MM-DD, hh:mm') }
    else return null
}

export const getTodayTasks = (tasks: any) => {
    let now = moment()

    return tasks.filter((task: ITask) => {
        let day: any = getToday(task.deadline)
        return moment(now).isSame(day, 'day')
    })
}

export const getDayWeek = () => {
    let day = moment().get('day')
    switch (day) {
        case 1: return 'Понедельник'
        case 2: return 'Вторник'
        case 3: return 'Среда'
        case 4: return 'Четверг'
        case 5: return 'Пятница'
        case 6: return 'Суббота'
        case 0: return 'Воскресенье'
        default: return '...'
    }
}

export const getMonth = () => {
    let month = moment().get('month')
    switch (month) {
        case 0: return 'Январь'
        case 1: return 'Февраль'
        case 2: return 'Март'
        case 3: return 'Апрель'
        case 4: return 'Май'
        case 5: return 'Июнь'
        case 6: return 'Июль'
        case 7: return 'Август'
        case 8: return 'Сентябрь'
        case 9: return 'Октябрь'
        case 10: return 'Ноябрь'
        case 11: return 'Декабрь'
    }
}

export const getDate = () => {
    let day = moment().format('DD')
    let month = getMonth()
    return `${day}, ${month}`
}