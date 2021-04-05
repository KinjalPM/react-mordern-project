export const CREATE_TODO = 'CREATE_TODO'; // action type
export const createTodo = todo =>({  // action creators 
    type: CREATE_TODO,
    payload: {todo},
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text =>({
    type: REMOVE_TODO,
    payload: {text},
})

export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';
export const markTodoAsCompleted = text =>({
    type: MARK_TODO_AS_COMPLETED,
    payload:{text},
})

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const loadTodosInProgress= () =>({
    type: LOAD_TODOS_IN_PROGRESS,
})

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const loadTodosSuccess = todo =>({
    type: LOAD_TODOS_SUCCESS,
    payload: {todo},
})

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const loadTodosFailure = ()=> ({
    type: LOAD_TODOS_FAILURE
});