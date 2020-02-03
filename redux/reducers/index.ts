import { combineReducers } from 'redux';
import todo from './tasks-reducer'
import visibilityFilter from './filter-reducer'
import theme from './theme-reducer'

export default combineReducers({
    todo,
    visibilityFilter,
    theme
})