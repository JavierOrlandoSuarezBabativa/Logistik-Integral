import PropTypes from 'prop-types'
import '../styles/Inventarios.css'
import {MachineFamily} from '../fullComponents/Auxiliary/AuxInventoryReception.jsx'
import { useContext, useEffect } from 'react'
import { familyAuth } from '../dinamicHooks/familyAuth.js'

export default function NewItemTitle({addNewReferences, newReference}){

    const {setMachineFamily} = useContext(MachineFamily)

    useEffect(() => {
        setMachineFamily(familyAuth(newReference.familia))
    }, [setMachineFamily, newReference])

    return(
        <>
        <div className="inventory-firstLine2">

            <div className="dropdown-module">
                <select 
                    name="familia"
                    onChange={addNewReferences} 
                >
                    <option value="Categoria">Categorias</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Smartphone">Smartphone</option>
                    <option value="Tablet">Tablet</option>
                </select>
            </div>

        </div>
        </>
    )
    
}

NewItemTitle.propTypes = {
    buttonSpecification: PropTypes.string,
    addNewReferences: PropTypes.func,
    newReference: PropTypes.object
}