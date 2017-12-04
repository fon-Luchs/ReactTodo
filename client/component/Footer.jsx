import React from 'react'
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
const Footer = (props) => (
    <div>
        <TextField
            hintText="Делал чтото"
            floatingLabelText={"" + props.textSize}
            multiLine={true}
            maxLength = {props.textSize}
        />
    </div>
);

Footer.propTypes = {
    textSize: PropTypes.number.isRequired
};

export default Footer;