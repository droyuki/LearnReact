import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions/actions'

export default class App extends Component {

    render() {
        // 藉由 connect() 呼叫注入：
        const { dispatch, visibleTodos, visibilityFilter } = this.props
        return (
            <div>
                <AddTodo
                    onAddClick={text =>
                        dispatch(addTodo(text))
                        }/>
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index =>
                         dispatch(completeTodo(index))
                    }/>
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={filter =>
                            dispatch(setVisibilityFilter(filter))
                     }/>
            </div>
        )
    }
}
App.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}


function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
    }
}

// 我們想要從給定的全域 state 注入哪些 props？
// 附註：使用 https://github.com/faassen/reselect 可以獲得更好的效能。
function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

// 把 component 包起來以注入 dispatch 和 state 進去
export default connect(select)(App)