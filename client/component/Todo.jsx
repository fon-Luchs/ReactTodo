import React from 'react';
import PropTpyes from 'prop-types';

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
    title: PropTpyes.string.isRequired,
    completed: PropTpyes.bool.isRequired
};

export default Todo;