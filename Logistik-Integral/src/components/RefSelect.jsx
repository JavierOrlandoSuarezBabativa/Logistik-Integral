import PropTypes from 'prop-types'

export default function RefSelect ({refs, handleChange}) {
    
return(
    <div id="reference-item">
        <select 
            className="dropdown-module"
            onChange={handleChange}>
                <option value="">Selecciona Referencia</option>
                {refs.map((singleRef, index) => <option
                                                    name={singleRef.Ref}
                                                    value={singleRef.Ref} 
                                                    key={index}>{singleRef.Ref}
                                                    </option>)}
        </select>
    </div>
    )
}

RefSelect.propTypes = {
    refs: PropTypes.array,
    handleChange: PropTypes.func
}