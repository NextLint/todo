import { darkTheme, lightTheme } from './../../theme/theme';

const initialState = {
    theme: {...darkTheme},
    palette: [darkTheme, lightTheme]
}

const theme = (state = initialState, action: any) => {
    switch(action.type) {
        case 'CHANGE-THEME': {
            console.log('was in reducer', action.id)
            return Object.assign({}, state, {
                ...state,
                theme: state.palette.find(theme => theme.id == action.id)
            })
        }
        default: return state
    }
}

export default theme