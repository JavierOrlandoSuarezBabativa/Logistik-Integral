import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../styles/Inventarios.css'
import Axios from 'axios'

export default function FirstLine({buttonSpecification, newReferenceInfo, addReferencesInfo, setNewReferenceInfo}){


    let FAMILIA;
    const REFERENCIA = newReferenceInfo.referencia
    const MODELO = newReferenceInfo.modelo
    const MARCA = newReferenceInfo.marca
    const VALOR = newReferenceInfo.valor
    const CPU = newReferenceInfo.CPU
    const STORAGE = newReferenceInfo.storage
    const DISPLAY = newReferenceInfo.display
    const BATERIA = newReferenceInfo.bateria

    switch (newReferenceInfo.familia) {
        case 'Laptop':
            FAMILIA = '1'
            break
        case 'Tablet':
            FAMILIA = '2'
            break
        case 'Smartphone':
            FAMILIA = '3'
            break
        default:
            break
    }

    const navigateTo = useNavigate()

    function createNewReference(){
        Axios.post('http://localhost:3002/newReference', {
            newFamilia: FAMILIA,
            newReferencia: REFERENCIA,
            newModelo: MODELO,
            newMarca: MARCA,
            newValor: VALOR,
            newCPU: CPU,
            newStorage: STORAGE,
            newDisplay: DISPLAY,
            newBateria: BATERIA,
        }).then(
            navigateTo('/createItem'),
            setNewReferenceInfo({
                referencia: '',
                marca: '',
                valor: '',
                CPU: '',
                storage: '',
                modelo: '',
                display: '',
                bateria: '',
                familia: ''
        })
        )
    }

    return(
        <>
        <div className="inventory-firstLine">
            <div className="item-button">
                <button 
                    type='submit' 
                    onClick={createNewReference}
                    ><b>{buttonSpecification}</b></button>
            </div>
            <div className="dropdown-moduleOptions">
                <select 
                    name="familia" 
                    value={newReferenceInfo.familia}
                    onChange={addReferencesInfo}>
                    <option value="Categoria">Categoria</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Smartphone">Smartphone</option>
                    <option value="Tablet">Tablet</option>
                </select>
            </div>
        </div>
                    
        

        </>
    )

}

FirstLine.propTypes = {
    buttonSpecification: PropTypes.string,
    newReferenceInfo: PropTypes.object,
    addReferencesInfo: PropTypes.func,
    createNewReference: PropTypes.func,
    // setNewReferenceInfo: PropTypes.func
}