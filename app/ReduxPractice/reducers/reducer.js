import { combineReducers } from 'redux'
import { VisibilityFilters, ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER } from '../actions/actions'
const { SHOW_ALL } = VisibilityFilters

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}
//reducer
//function todoApp(state = initialState, action) {
//    return {
//        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//        todos: todos(state.todos, action)
//    }
//}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]

        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ]

        default:
            return state
    }
}

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

//combine reducers
const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp