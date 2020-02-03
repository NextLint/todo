import { ITask, IFilter } from "../redux/store/state-types"

export const search = (text: string, tasks: Array<ITask>) => {
    return tasks.filter(task => {
        const taskText = `${task.title.toUpperCase()}`
        const newText = text.toUpperCase()
        return taskText.indexOf(newText) > -1
    })
}

export const getVisibleTasks = (tasks: Array<ITask>, filter: IFilter) => {
    switch (filter) {
        case 'ALL': return tasks
        case 'ACTIVE': return tasks.filter(task => !task.completed)
        case 'COMPLETED': return tasks.filter(task => task.completed)
        default: return tasks
    }
}

export const getPercentCompletion = (completed: number, uncompleted: number) => {
    return completed / uncompleted * 100
}