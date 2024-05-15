import PropTypes from 'prop-types'
import '../styles/Inventarios.css'

export default function NewItemTitle({buttonSpecification}){

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
    buttonSpecification: PropTypes.string
}