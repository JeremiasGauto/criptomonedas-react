import styled from "@emotion/styled"
import useSelectMonedas from "./hooks/useSelectMonedas"
import { monedas } from "./data/monedas";

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
    margin-top: 30px;

    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;

    }
`

function Formulario() {

 

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