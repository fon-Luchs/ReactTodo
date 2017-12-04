import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox.jsx';
import Delete from './Delete.jsx';
import Open from './Open.jsx';

const Todo = (props) => (
    <div className="todo">
        <Checkbox  checked={props.completed}/>
        <span className="todo-title">   {props.title}  	</span>
        <Open />
        <Delete />
    </div>

);

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
};

export default Todo;