/*  a reducer that will keep track of the state of the todos in our application as well as 
behave appropriately when our components trigger one of these actions that we just defined */

import {CREATE_TODO , REMOVE_TODO, MARK_TODO_AS_COMPLETED} from './actions';

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

        case MARK_TODO_AS_COMPLETED:{
            const {text} = playload;
            return state.map(todo => {
                if(todo.text === text){
                    return {...todo, isCompleted:true};
                }

                return todo;
            })
        }

        default:
            return state;
    }
}