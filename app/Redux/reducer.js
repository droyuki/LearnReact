/**
 * Created by WeiChen on 2016/1/20.
 */
import { combineReducers } from 'redux'
import {ADD, RM} from './actions'

function items(state = [], action) {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                {
                    text: action.text
                    //rm:false
                }
            ]
        //case RM:
        //    return [
        //        ...state.slice(0, action.index),
        //        Object.assign({}, state[action.index], {rm: true}),
        //        ...state.slice(action.index + 1)
        //    ]
        default:
            return state
    }

}
const ListApp = combineReducers({
    items
})
export default ListApp