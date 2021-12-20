import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Componentb = ({ connected }) => {

    const [newConnected, setConnected] = useState(connected);

    const changeState = () => {
        if (newConnected === true) {
            setConnected(false);
        } else {
            setConnected(true)
        }  
    }

    return (
        <div>
            <h4>
                Connected: { newConnected ? 'Contacto En Línea':'Contacto No Disponible' }
            </h4>
            <div>
                <button onClick={(changeState)}>
                    State change
                </button>
            </div>
        </div>
    );

};

Componentb.propTypes = {
    connected : PropTypes.bool,
};


export default Componentb;

