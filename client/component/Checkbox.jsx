import React from 'react'
import PropTypes from 'prop-types'
import Done from 'react-material-icons/icons/action/done';
import FlatButton from 'material-ui/FlatButton';

const style = {
    position: 'relative',
    zIndex: 3
};

const Checkbox = (props) => (
    <FlatButton label={<Done />} style={style}/>
);

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired
};

export default Checkbox;