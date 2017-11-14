import React from 'react';
import SvgMaterialIcons from './Icon'
import { withStyles } from 'material-ui/styles';
import ButtonAppBar from './AppBar'
import Main from "./Main";
import {Greeting} from './testState'
const styles = theme => ({
    icon: {
        margin: theme.spacing.unit,
    },
});

function HomePage(props) {
    const { classes } = props;
    return (
        <div>
            <ButtonAppBar/>
            <Main/>
            <Greeting/>
        </div>
    );
}



export default withStyles(styles)(HomePage);