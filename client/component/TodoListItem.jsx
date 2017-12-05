import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Subheader from 'material-ui/Subheader';
import TodoVerticalStepper from './TodoVerticalStepper.jsx';
import Checkbox from './Checkbox.jsx';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Delete from './Delete.jsx'
import Info from 'react-material-icons/icons/action/info';
import PropTypes from 'prop-types';

{/*const TodoIconMenu = () => (
    <div>
        <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
            <MenuItem primaryText={<span>Create TODO <Checkbox /></span>} />
            <MenuItem primaryText={<span>Delete TODO <Delete /></span>} />
        </IconMenu>
    </div>
);*/}


class TodoListItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                    <List>
                        <Subheader> <Checkbox checked={false}/>{this.props.title}<Delete /></Subheader>
                        <ListItem
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            primaryText={<span>Информация</span>}
                            leftIcon={<Info/>}
                            nestedItems={[
                                <TodoVerticalStepper key={1} />
                            ]}
                        />
                    </List>
            </div>
        );
    }
}

TodoListItem.propType = {
    title: PropTypes.string.isRequired
};

export default TodoListItem;


