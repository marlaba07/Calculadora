import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Resultado from './Resultado'

const NumberInput = () => {

    const [numeros, setNumeros] = useState({
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

    const sumar = () => numero1 + numero2
    const restar = () => numero1 - numero2
    const multiplicar = () => numero1 * numero2
    const dividir = () => numero1 / numero2


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

            <Resultado operacion="Suma" calculo={sumar()} />
            <Resultado operacion="Resta" calculo={restar()} />
            <Resultado operacion="Multiplicacion" calculo={multiplicar()} />
            <Resultado operacion="Division" calculo={dividir()} />
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