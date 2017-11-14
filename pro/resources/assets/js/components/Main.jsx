import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import FlatButtons from './Button'
//import setState from 'react-state-promise';
var axios = require('axios');
class Main extends Component {

    constructor() {

        super();

        this.state = {
            products: [],para:"hello",
        }

    }
    doSomething (event) {
        axios.get('/posts')
            .then((data) => {                // <== Change is here
                console.log(data.data);

                this.setState({
                    products:data.data
                })
            })


    }
    componentDidMount() {
        this.doSomething()
    }

    renderProducts() {

        const { classes } = this.props;
        return this.state.products.map(product => {
            return (

                <Paper key={product.id} className={classes.root} elevation={4}>

                        <Typography type="headline" component="h3">
                            <a href={"posts/"+product.id}>{product.title}</a>
                        </Typography>
                        <Typography type="body1" component="p">
                            {product.description}
                        </Typography>


                </Paper>
            );
        })
    }

    render() {

        return (
            <div>

                { this.renderProducts() }
                <button onClick={this.doSomething.bind(this)}>hello</button>
                <p>{this.state.para}</p>
            </div>

        );
    }
}
const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
});
Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);