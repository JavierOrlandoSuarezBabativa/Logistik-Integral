import '../styles/FrontPage.css'
import Logo from '../assets/logo_1.png'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import Axios from 'axios'
import {UserType} from '../App'


function FrontPage() {

  const [loginUserName, setLoginUserName] = useState('')
  const [loginUserRol, setLoginUserRol] = useState('')
  const [loginUserPassword, setLoginUserPassword] = useState('')
  const navigateTo = useNavigate()
  const [loginStatus, setLoginStatus] = useState('')
  const [statusHolder, setStatusHolder] = useState('message')

 const {setUserType} = useContext(UserType)






  useEffect(()=>{
    if(loginStatus !== ''){
      setStatusHolder('confirmation-message')
      setTimeout(()=>{
        setStatusHolder('message')
        setLoginStatus('')
        setLoginUserName('')
        setLoginUserRol('')
        setLoginUserPassword('')
      }, 3000)
    }
  }, [loginStatus])

  function loginUser(e){
    e.preventDefault()
    Axios.post('http://localhost:3002/login', {
      LoginUserName:loginUserName,
      LoginUserRol:loginUserRol,
      LoginUserPassword:loginUserPassword,
    }).then((response) => {
      if(response.data.message){
        navigateTo('/')
        setLoginStatus(response.data.message)
      }
      else{
       switch(response.data[0].Cargo){
        case 'Administrador':
          setUserType('Administrador')
          navigateTo('/administrador')
          break
        case 'Auxiliar':
          setUserType('Auxiliar')
          navigateTo('/auxiliar')
          break
        case 'Cliente':
          setUserType('Cliente')
          navigateTo('/cliente')
        break
        default:
          break
       }
       
      }
    }
    )
  }

  return (
  <>
    <form  className="front_page-container">

      <div id="logo">
        <img src={Logo} alt="Logo Logistik Integral" />
      </div>

      <div className="information-requirement">
      <span id={statusHolder}>{loginStatus}</span>
        <div className="information-requirement-input">
          <i className="material-icons">person</i>
          <input 
            type="text" 
            placeholder="Nombre de usuario"
            value={loginUserName}
            onChange={(e) => setLoginUserName(e.target.value)} 
            />
        </div>

        <div className="information-requirement-input">
          <select 
            name="" 
            id="" 
            className='select-container'
            onChange={(e) => setLoginUserRol(e.target.value)}
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
          value={loginUserPassword}
          placeholder="Contraseña"
          onChange={(e) => setLoginUserPassword(e.target.value)}
          />
        </div>

        <div className="button">
          <button id="log-in_button" type='submit' onClick={loginUser}>INGRESAR</button>
          <hr />
          <Link to={'/signUp'}>
            <button id="register_button" type='submit'>SIGN UP</button>
            </Link>
        </div>
      </div>
    </form>
  </>
  )
}

export default FrontPage
