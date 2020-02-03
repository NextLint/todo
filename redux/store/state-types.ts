export interface ITask {
    id: string,
    title: string,
    description: string,
    deadline: string,
    priority: Priority,
    completed: boolean,
    img: IImages[]
}

export interface IImages {
    id: string,
    uri: string
}

export type Priority = 'NO' | 'LOW' | 'MEDIUM' | 'HIGH'

export type IFilter = 'ALL' | 'COMPLETED' | 'ACTIVE'

export interface IVisibilityFilter {
    filter: IFilter
}

export interface ITodo {
    tasks: ITask[],
    main: string,
    description: string,
    searchAll: string,
    searchToday: string,
    date: string,
    priority: Priority,
    images: IImages[]
}