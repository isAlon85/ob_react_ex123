import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react/cjs/react.production.min';
import Componentb from './componentb';



class Componenta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name : 'Perico',
            surname : 'Delgado',
            email : 'pdelgado@ob.com',
            connected : true,
        }
    }

    render() {
        return (
            <div>
            <h1>
                Email: { this.state.email }
            </h1>
            <h2>
                Name: { this.state.name }
            </h2>
            <h3>
                Surname: { this.state.surname }
            </h3>
            <Componentb connected = { this.state.connected }></Componentb>
        </div>
        );
    }
}

    Componenta.propTypes = {
        name : PropTypes.string,
        surname : PropTypes.string,
        email : PropTypes.string,
        connected : PropTypes.bool,
    };

export default Componenta;
