import React from 'react';
import SvgMaterialIcons from './Icon'
import { withStyles } from 'material-ui/styles';
import Form from './Form'
const styles = theme => ({
    icon: {
        margin: theme.spacing.unit,
    },
});

function Created(props) {
    const { classes } = props;
    return (
        <div>
            <Form/>
        </div>
    );
}



export default withStyles(styles)(Created);