import React from 'react'
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
    main:{
      margin: '0 auto'
    },
    fst: {
        float: 'left'
    },
    scd: {
        float: 'right',
        marginTop: 20,
        marginRight: 20,
    }
};

const Footer = (props) => (
    <div style={style.main}>
    <div style={style.fst}>
        <TextField
            hintText="Название задачи"
            floatingLabelText={"" + props.textSize}
            multiLine={true}
            maxLength = {props.textSize}
            />
    </div>
    <div style={style.scd}>
        <FloatingActionButton mini={true}>
            <ContentAdd />
        </FloatingActionButton>
    </div>
    </div>
);

Footer.propTypes = {
    textSize: PropTypes.number.isRequired
};

export default Footer;