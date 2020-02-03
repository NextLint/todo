import { IVisibilityFilter } from "../store/state-types";

const initialState: IVisibilityFilter = {
    filter: 'ALL'
}

const visibilityFilter = (state = initialState, action: any): IVisibilityFilter => {
    switch(action.type) {
        case 'CHANGE-FILTER': return Object.assign({}, state, {
           ...state,
            filter: action.value 
        })
        default: return state
    }
}

export default visibilityFilter