import React, {useEffect} from 'react'
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';
import {removeTodo, markTodoAsCompleted} from './actions';
import {connect} from 'react-redux';
// import {displayAlert} from './thunks';
import {loadTodos} from './thunks'

const TodoList = ({todos =[], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
    
    useEffect( () => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading Todos....</div> ;   
    const content =(
                <div className="list-wrapper">
                    <NewTodoForm />
                    {todos.map(todo => 
                    <TodoListItem 
                    todo = {todo} 
                    onRemovePressed={onRemovePressed} 
                    onCompletePressed={onCompletedPressed}/>)}
                </div>
            );

            return isLoading ? loadingMessage : content;
};

const mapStateToProps = state =>({
    isLoading: state.isLoading,
    todos: state.todos,
});

const mapDispatchToProps = dispatch=> ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text =>dispatch(markTodoAsCompleted(text)),
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);