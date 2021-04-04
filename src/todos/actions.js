export const CREATE_TODO = 'CREATE_TODO'; // action type
export const createTodo = text =>({  // action creators 
    type: CREATE_TODO,
    playload: {text},
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text =>({
    type: REMOVE_TODO,
    playload: {text},
})