import  React from 'react'
import AppBar from 'material-ui/AppBar';
import PropeTypes from 'prop-types'

const Header = (props) => (
    <header>
        <AppBar
            iconElementLeft={<h1> {props.title} </h1>}
        />
    </header>
);

Header.propType = {
    title: PropeTypes.string.isRequired
};

export default Header;
