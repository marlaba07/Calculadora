import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';

const NumberInput = () => {
    const [numeros, setNumeros] = useState(0)({
        numero1: 0,
        numero2: 0,
    })

    const { numero1, numero2 } = numeros;

    const handleChange = (e) => {
        setNumeros({
            ...numeros,
            [e.target.name]: parseFloat(e.target.value),
        })
    }

    return (
        <>
            <label>
                Numero 1: {" "}
                <input name="numero1" value={numero1} onChange={handleChange} type="number" />
            </label>
            <label>
                Numero 2: {" "}
                <input name="numero2" value={numero2} onChange={handleChange} type="number" />
            </label>
        </>
    )
}

NumberInput.propTypes = {
    name: PropTypes.string
}

export default NumberInput

// rafcp
// rafc

// Crean la estructura inicial. Con 'p' al final lo crea con PropTypes