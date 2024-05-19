import '../styles/Login.css'
import {PropTypes} from 'prop-types'

export default function NewItemReception({data, addNewReferences}){


 
    let marcasFiltradas = [];
    let refFiltradas = [];
    let modelosFiltrados = [];
    
    data.forEach((ref) => {
        if(!marcasFiltradas.includes(ref.Marca)){
            marcasFiltradas.push(ref.Marca)
        }
        if(!refFiltradas.includes(ref.Referencia_Equipo)){
            refFiltradas.push(ref.Referencia_Equipo)
        }
        if(!modelosFiltrados.includes(ref.Modelo)){
            modelosFiltrados.push(ref.Modelo)
        }
    })

    return(
        <>
        <div className="login-container">  

            <div className="information-requirement">

            <div className="information-requirement-input">
                <select 
                name="marca" 
                className='select-container'
                onChange={addNewReferences}>
                <option value="">MARCA</option>
                {
                marcasFiltradas.map((marca, index) => <option value={marca} key={index}>{marca}</option>)
                }
                </select>
            </div>

            <div className="information-requirement-input">
                <select 
                name="referencia" 
                className='select-container'
                onChange={addNewReferences}>
                <option value="">REFERENCIA</option>
                {
                refFiltradas.map((ref, index) => <option value={ref} key={index}>{ref}</option>)
                }
                </select>
            </div>

            <div className="information-requirement-input">
                <select 
                name="modelo" 
                className='select-container'
                onChange={addNewReferences}>
                <option value="">MODELO</option>
                {
                modelosFiltrados.map((model, index) => <option value={model} key={index}>{model}</option>)
                }
                </select>
            </div>

            <div className="information-requirement-input">
                <input
                type="number"
                />
            </div>

            <div className="button">
                <button
                    id="register_button"
                >Cancelar</button>
            </div>

            </div>
</div>
        </>
    )
}

NewItemReception.propTypes = {
    data: PropTypes.array,
    fetchFunction: PropTypes.func,
    addNewReferences: PropTypes.func
}