import PropTypes from 'prop-types'
import '../styles/Inventarios.css'
import {MachineFamily} from '../fullComponents/Auxiliary/AuxInventoryReception.jsx'
import { useContext, useEffect } from 'react'
import { familyAuth } from '../dinamicHooks/familyAuth.js'

export default function NewItemTitle({buttonSpecification, addNewReferences, newReference}){

    const {setMachineFamily, referencesFiltered} = useContext(MachineFamily)

    useEffect(() => {
        setMachineFamily(familyAuth(newReference.familia))
    }, [setMachineFamily, newReference])



    return(
        <>
        <div className="inventory-firstLine">

            <div className="item-button">
                <button 
                    type='submit'
                ><b>{buttonSpecification}</b></button>
            </div>

            <div className="dropdown-moduleOptions">
                <select 
                    name="familia"
                    onChange={addNewReferences} 
                >
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

NewItemTitle.propTypes = {
    buttonSpecification: PropTypes.string,
    addNewReferences: PropTypes.func
}