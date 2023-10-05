import styled from "@emotion/styled"
import useSelectMonedas from "./hooks/useSelectMonedas"

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding:10px ;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3 ease;

    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;

    }
`

function Formulario() {

    const monedas = [
        { id: 'USD', nombre: 'Dolar de Estados Unidos' },
        
        { id: 'MXN', nombre: 'Peso Mexicano' },

        { id: 'EUR', nombre: 'Euro' },
        { id: 'GBP', nombre: 'Libra Esterlina' },
    ]

    const [SelectMoneditas] = useSelectMonedas('Selecciona tu moneda', monedas);

   
    return (

        <form>
            <SelectMoneditas />
            <InputSubmit
                type="submit"
                value="Cotizar"
            />


        </form>
    )
}

export default Formulario