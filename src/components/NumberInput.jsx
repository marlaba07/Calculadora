import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Resultado from './Resultado'
import { operaciones } from '../helpers/operaciones'

const NumberInput = () => {

    const [numeros, setNumeros] = useState({
        numero1: 0,
        numero2: 0,
    })

    const { handleChange, sumar, restar, multiplicar, dividir, numero1, numero2 } = operaciones(numeros, setNumeros);

    return (
        <>
            <label className="mx-5">
                Primer número {" "}
                <input name="numero1" value={numero1} onChange={handleChange} type="number" className="form-control" />
            </label>
            <label className="mx-5">
                Segundo número {" "}
                <input name="numero2" value={numero2} onChange={handleChange} type="number" className="form-control" />
            </label>

            <div id='suma'>
                <Resultado operacion="Suma" calculo={sumar()} />
            </div>
            <div id='resta'>
                <Resultado operacion="Resta" calculo={restar()} />
            </div>
            <div id='multiplicacion'>
                <Resultado operacion="Multiplicacion" calculo={multiplicar()} />
            </div>
            <div id='division'>
                <Resultado operacion="Division" calculo={dividir()} />
            </div>

            <p>
                Nota: Cálculadora dinámica hecha con React.
                <br />
                El primer número hará su cálculo sobre el segundo.
            </p>
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