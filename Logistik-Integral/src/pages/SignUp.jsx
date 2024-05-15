import '../styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'


export default function SignUp() {

   const [userName, setUserName] = useState('')
   const [userLastName, setUserLastName] = useState('')
   const [userID, setUserID] = useState('')
   const [userPhone, setUserPhone] = useState('')
   const [userRol, setUserRol] = useState('')
   const [userPassword, setUserPassword] = useState('')
   const [userNumber, setUserNumber] = useState('')

   const navigateTo = useNavigate()


    function createUser(){
      Axios.post('http://localhost:3002/registro', {
        UserName:userName,
        UserLastName: userLastName,
        UserID: userID,
        UserPhone: userPhone,
        UserRol:userRol,
        UserPassword:userPassword,
        UserNumber:userNumber
      }).then(
        navigateTo('/'),
        setUserName(''),  
        setUserLastName(''),
        setUserID(''),
        setUserPhone(''),
        setUserRol(''),
        setUserPassword(''),
        setUserNumber('')
      )
    }

    return(
        <>
        <div className="login-container">  

          <div className="information-requirement">

            <h1>Registro</h1>

            <div className="information-requirement-input">
              <i className="material-icons">person</i>
              <input 
                type="text"
                name='userName' 
                placeholder="Nombre" 
                onChange={(e) => {setUserName(e.target.value)}}
                />
            </div>

            <div className="information-requirement-input">
              <i className="material-icons">person_add</i>
              <input 
                type="text"
                name='userLastName' 
                placeholder="Apellido" 
                onChange={(e) => {setUserLastName(e.target.value)}}
                />
            </div>

            <div className="information-requirement-input">
              <i className="material-icons">fingerprint</i>
              <input 
                type="text"
                name='userID' 
                placeholder="Cedula" 
                onChange={(e) => {setUserID(e.target.value)}}
                />
            </div>

            <div className="information-requirement-input">
              <i className="material-icons">call</i>
              <input 
                type="text"
                name='userPhone' 
                placeholder="Celular" 
                onChange={(e) => {setUserPhone(e.target.value)}}
                />
            </div>
    
            <div className="information-requirement-input">
              <select 
                name="userRol" 
                className='select-container'
                onChange={(e) => {setUserRol(e.target.value)}}
                >
                <option value="">Rol de usuario</option>
                <option value="Administrador">Administrador</option>
                <option value="Auxiliar">Auxiliar</option>
                <option value="Cliente">Cliente</option>
              </select>
            </div>
    
            <div className="information-requirement-input">
              <i className="material-icons">password</i>
              <input 
                type="password"
                name='userPassword' 
                placeholder="Contraseña"
                onChange={(e) => {setUserPassword(e.target.value)}} 
                />
            </div>

            <div className="information-requirement-input">
              <label htmlFor="bodegaId">Bodega ID</label>
              <input
              id='bodegaId'
                className='werehouse'
                type="number" 
                name='userNumber' 
                onChange={(e) => {setUserNumber(e.target.value)}} />
            </div>
    
            <div className="button">
              <button 
                id="register_button" 
                type='submit'
                onClick={createUser}
                >Confirmar</button>
              <hr />
              <Link to={'/'}>
              <button>Cancelar</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    )

}