import '../styles/Login.css'
import Axios from 'axios'
import { useEffect, useState } from 'react'

export default function NewItemReception(){

    const [referencesData, setReferencesData] = useState([])
 
    let marcasFiltradas = []
    
    referencesData.forEach((ref) => {
        if(!marcasFiltradas.includes(ref.Marca)){
            marcasFiltradas.push(ref.Marca)
        }
    })

    console.log(marcasFiltradas)

      



    async function fetchReferencias() {
        try{
            const res = await Axios('http://localhost:3002/sqlReferencias')
            setReferencesData(res.data)
        }catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchReferencias()
    },[])


    return(
        <>
        <div className="login-container">  

            <div className="information-requirement">

            <div className="information-requirement-input">
                <select 
                name="marca" 
                className='select-container'>
                <option value="">MARCA</option>
                <option value="Administrador">Administrador</option>
                <option value="Auxiliar">Auxiliar</option>
                <option value="Cliente">Cliente</option>
                </select>
            </div>

            <div className="information-requirement-input">
                <select 
                name="referencia" 
                className='select-container'>
                <option value="">REFERENCIA</option>
                <option value="Administrador">Administrador</option>
                <option value="Auxiliar">Auxiliar</option>
                <option value="Cliente">Cliente</option>
                </select>
            </div>

            <div className="information-requirement-input">
                <select 
                name="modelo" 
                className='select-container'>
                <option value="">MODELO</option>
                <option value="Administrador">Administrador</option>
                <option value="Auxiliar">Auxiliar</option>
                <option value="Cliente">Cliente</option>
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