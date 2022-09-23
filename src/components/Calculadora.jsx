import { useState } from 'react'
import NumberInput from './NumberInput'
import Resultado from './Resultado'

const Calculadora = () => {

    const [suma, setSuma] = useState(0);

    return (
        <div>
            <NumberInput />

            <Resultado operacion="Suma" calculo={suma} />
            <Resultado operacion="Resta" calculo={suma} />
            <Resultado operacion="Multiplicacion" calculo={suma} />
            <Resultado operacion="Division" calculo={suma} />
            <br />
            <span> Suma: {suma} </span>
        </div>
    )
}

export default Calculadora

