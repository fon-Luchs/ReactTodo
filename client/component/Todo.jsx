import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem.jsx';
import Checkbox from './Checkbox.jsx';
import Delete from './Delete.jsx';

const Todo = (props) => (
    <div className="todo">
        <TodoListItem title={"Построить React TODO"} />
        {/*
            <Checkbox  checked={props.completed}/>
            <span className="todo-title">   {props.title}  	</span>
            <Delete />
        */}
    </div>

);

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
};

export default Todo;