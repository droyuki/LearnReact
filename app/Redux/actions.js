/**
 * Created by WeiChen on 2016/1/20.
 */
//action type
export const ADD = 'ADD'
//export const RM = 'RM'


//action creator
let nextId = 0;
export function add(text) {
    console.log("dispatch(add\""+text+"\")")
    return {
        id: nextId++,
        type: 'ADD',
        text
    }

}

//export function rm(index) {
//    return {
//        type: 'RM',
//        index
//    }
//}