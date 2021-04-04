/*  a reducer that will keep track of the state of the todos in our application as well as 
behave appropriately when our components trigger one of these actions that we just defined */

import {CREATE_TODO , REMOVE_TODO} from './actions';

export const todos = (state=[],action) =>{
    const {type, playload} = action;

    switch(type){
        case CREATE_TODO: {
            const {text} = playload;
            const newTodo = {
                text,
                isCompleted: false
            };
            return state.concat(newTodo);
        }

        case REMOVE_TODO:{
            const {text} = playload;
            return state.filter(todo => todo.text !== text);
        }

        default:
            return state;
    }
}