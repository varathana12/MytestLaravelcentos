import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Button from 'material-ui/Button';
var axios = require('axios');
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
});

class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            title: null,
            description:null
        };
    }

    titleChange (event) {
        this.setState({ title: event.target.value });
    };
    descriptionChange (event) {
        this.setState({ description: event.target.value });
    };
    _submit(event){
        if(this.state.title==null||this.state.description==null){
            console.log("invalid");
        }
        else{
            axios.post('/created_api', {
                title: this.state.title,
                description: this.state.description
            })
                .then(function (response) {
                    if(response.data.status=='success'){
                        window.location.replace('test');
                    }
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }


    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="title">Title</InputLabel>
                    <Input id="title" placeholder="Title" onChange={this.titleChange.bind(this)} />
                    <FormHelperText>{this.state.title}</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="description">Description</InputLabel>
                    <Input id="description" placeholder="Description" onChange={this.descriptionChange.bind(this)} />
                    <FormHelperText>{this.state.description}</FormHelperText>
                </FormControl>
                <Button raised color="primary" className={classes.button} onClick={this._submit.bind(this)}>
                    Submit
                </Button>
            </div>
        );
    }
}

Form.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);