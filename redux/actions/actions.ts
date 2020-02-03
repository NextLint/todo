import { Priority, IFilter } from "../store/state-types"

const CHANGE_INPUT_TEXT = 'CHANGE-INPUT-TEXT'
const SET_DATE_TIME = 'SET-DATE-TIME'
const SET_PRIORITY = 'SET-PRIORITY'
const ATTACH_IMAGE = 'ATTACH-IMAGE'
const DELETE_IMAGE = 'DELETE-IMAGE'
const ADD_TASK = 'ADD-TASK'
const CLEAR_TASK_CONFIG = 'CLEAR_TASK_CONFIG'
const TASK_COMPLETED = 'TASK-COMPLETED'
const DELETE_TASK = 'DELETE-TASK'
const LOAD_TASK = 'LOAD-TASK'
const CHANGE_TASK = 'CHANGE-TASK'
const CHANGE_FILTER = 'CHANGE-FILTER'
const CHANGE_THEME = 'CHANGE-THEME'

export const changeInputTextAction = (text: string, name: string) => ({
    type: CHANGE_INPUT_TEXT,
    name,
    text,
})

export const setDate = (date: string) => ({
    type: SET_DATE_TIME,
    date,
})

export const setPriority = (value: Priority) => ({
    type: SET_PRIORITY,
    value,
})

export const addTask = () => ({ type: ADD_TASK })

export const clearConfig = () => ({ type: CLEAR_TASK_CONFIG })

export const taskCompleted = (id: string) => ({
    type: TASK_COMPLETED,
    id,
})

export const deleteTask = (id: string) => ({
    type: DELETE_TASK,
    id,
})

export const attachImage = (uri: string) => ({
    type: ATTACH_IMAGE,
    uri
})

export const deleteImgae = (id: string) => ({
    type: DELETE_IMAGE,
    id
})

export const loadTask = (id: string) => ({
    type: LOAD_TASK,
    id
})

export const changeTask = (id: string) => ({
    type: CHANGE_TASK,
    id
})

export const changeFilter = (value: IFilter) => ({
    type: CHANGE_FILTER,
    value
})

export const changeTheme = (id: string) => ({
    type: CHANGE_THEME,
    id
})