import React from 'react'
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';
import {removeTodo, markTodoAsCompleted} from './actions';
import {connect} from 'react-redux';

const TodoList = ({todos =[], onRemovePressed, onCompletedPressed}) =>(
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => 
        <TodoListItem 
        todo = {todo} 
        onRemovePressed={onRemovePressed} 
        onCompletePressed={onCompletedPressed}/>)}
    </div>
);
const mapStateToProps = state =>({
    todos: state.todos,
});

const mapDispatchToProps = dispatch=> ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text =>dispatch(markTodoAsCompleted(text))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);