// Dependencies
import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuidv1 from 'uuid';
import {addGasto} from "../actions";

const mapDispatchToProps = dispatch => {
    return {
        addGasto: gasto => dispatch(addGasto(gasto))
    };
};

class ConnectedForm extends Component {
    constructor() {
        super();

        this.state = {
            title: "",
            precio: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const { precio } = this.state;
        const id = uuidv1();
        this.props.addGasto({ title, precio, id });
        this.setState({ title: "", precio: 0 });
    }

    render() {
        const { title } = this.state;
        const { precio } = this.state;
        return (
            <form className="col-md-4 offset-md-4" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="precio">Precio</label>
                    <input type="number" className="form-control" id="precio" value={precio} onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-success btn-lg">Guardar</button>
            </form>
        );
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;