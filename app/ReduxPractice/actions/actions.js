/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * 其他常數
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */
let nextTodoId = 0;
export function addTodo(text) {
    return {
        type: ADD_TODO, id: nextTodoId++, text
    }
}

export function completeTodo(index) {
    return {type: COMPLETE_TODO, index}
}

export function setVisibilityFilter(filter) {
    return {type: SET_VISIBILITY_FILTER, filter}
}