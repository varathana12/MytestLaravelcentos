import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Button from 'material-ui/Button';
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
});

class Login_Auth extends React.Component {



    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="name-simple">Email</InputLabel>
                    <Input id="email" type="email" name="email"  />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="name-helper">Password</InputLabel>
                    <Input id="password" type="password" name="password" required />

                </FormControl>
                <input type="submit"/>
            </div>

        );
    }
}

Login_Auth.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login_Auth);