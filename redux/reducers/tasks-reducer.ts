import { ITodo } from "../store/state-types";

const initialState: ITodo = {
    tasks: [
        {
            id: '1',
            title: 'Title',
            description: 'some description',
            deadline: '',
            priority: 'NO',
            completed: false,
            img: []
        }
    ],
    main: '',
    description: '',
    searchAll: '',
    searchToday: '',
    date: '',
    priority: 'NO',
    images: []
}

const todo = (state = initialState, action: any): ITodo => {
    switch (action.type) {
        case 'CHANGE-INPUT-TEXT': return Object.assign({}, state, {
            ...state,
            [action.name]: action.text,
        })
        case 'SET-DATE-TIME': return Object.assign({}, state, {
            ...state,
            date: action.date
        })
        case 'SET-PRIORITY': return Object.assign({}, state, {
            ...state,
            priority: action.value
        })
        case 'ADD-TASK': if (state.main !== '') return Object.assign({}, state, {
            tasks: [
                ...state.tasks,
                {
                    // @ts-ignore
                    id: `${(state.tasks.length == 0) ? 1 : +(state.tasks.pop().id) + 1}`,
                    title: state.main,
                    description: state.description,
                    deadline: state.date,
                    priority: state.priority,
                    completed: false,
                    img: state.images
                }
            ],
            main: '',
            description: '',
            searchAll: '',
            searchToday: '',
            date: '',
            priority: 'NO',
            images: []
        })
        case 'CLEAR_TASK_CONFIG': return Object.assign({}, state, {
            ...state,
            main: '',
            description: '',
            date: '',
            priority: 'NO'
        })
        case 'TASK-COMPLETED': return Object.assign({}, state, {
            ...state,
            tasks: state.tasks.map(task => {
                if (task.id == action.id) return { ...task, completed: !task.completed }
                else return task
            })
        })
        case 'DELETE-TASK': return Object.assign({}, state, {
            ...state,
            tasks: state.tasks.filter(task => task.id !== action.id)
        })
        case 'ATTACH-IMAGE': return Object.assign({}, state, {
            ...state,
            images: [
                ...state.images,
                {
                    // @ts-ignore
                    id: `${(state.images.length == 0) ? 1 : +(state.images.pop().id) + 1}`,
                    uri: action.uri
                }]
        })
        case 'DELETE-IMAGE': return Object.assign({}, state, {
            ...state,
            images: state.images.filter(img => img.id !== action.id)
        })
        case 'LOAD-TASK': {
            const task = state.tasks.find(task => task.id == action.id)
            return Object.assign({}, state, {
                ...state,
                main: task?.title,
                description: task?.description,
                date: task?.deadline,
                priority: task?.priority,
                images: task?.img
            })
        }
        case 'CHANGE-TASK': {
            return Object.assign({}, state, {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id == action.id) {
                        return {
                            ...task,
                            title: state.main,
                            description: state.description,
                            deadline: state.date,
                            priority: state.priority,
                            img: state.images
                        }
                    } else return task
                }),
                main: '',
                description: '',
                date: '',
                priority: 'NO',
                images: []
            })
        }
        default: return state
    }
}

export default todo