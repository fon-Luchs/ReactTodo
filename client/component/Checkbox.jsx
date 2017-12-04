import React from 'react'
import PropTypes from 'prop-types'
import Done from 'react-material-icons/icons/action/done';
import FlatButton from 'material-ui/FlatButton';

const Checkbox = (props) => (
    <FlatButton label={<Done />}/>
);

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired
};

export default Checkbox;