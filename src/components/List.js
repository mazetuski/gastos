// Dependencies
import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {gastos: state.gastos};
};

const ConnectedList = ({gastos}) => (
    <ul className="list-group list-group-flush">
        {gastos.map(el => (
            <li className="list-group-item" key={el.id}>
                {el.title}
            </li>
        ))}
    </ul>
);

const list = connect(mapStateToProps)(ConnectedList);

export default list;