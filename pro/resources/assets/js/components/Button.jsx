import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

function doSomething(event) {

    console.log(event.currentTarget.getAttribute('data-something'));
}

function FlatButtons(props) {
    const { classes } = props;
    return (
            <Button color="primary" className={classes.button}>
                Primary
            </Button>
    );
}

FlatButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FlatButtons);