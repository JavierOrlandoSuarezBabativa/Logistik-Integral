import { Link, Outlet } from "react-router-dom"
import PropTypes from 'prop-types'
import { UserType } from "../App"
import { useContext } from "react"


export default function Header(props){

    const {userType} = useContext(UserType)

    let userMenu;

    switch (userType) {
        case "Administrador":
          userMenu = '/administrador'
          break;
        case "Auxiliar":
          userMenu = '/auxiliar'
          break;
        default:
          userMenu = '/cliente'
          break;
      }

    return(
    <>
    <div id="header"> 
        <div id="icons-container">
            <div>
                {
                props.firstUI ?
                <Link to={'/'}>
                    <i className="material-icons left">logout</i>
                </Link> :
                <Link to={userMenu}>
                    <i className="material-icons left">arrow_back</i>
                </Link>
                }
             </div>
             <div>
                <h2>{props.user || props.page}</h2>
             </div>
            <div>
                {
                props.firstUI ?
                null :
                <Link to={'/'}>
                    <i className="material-icons right">logout</i>
                </Link>
                }   
            </div>
         </div>
         </div>
         <Outlet></Outlet>
     </>
    )
}

Header.propTypes = {
    firstUI: PropTypes.bool,
    user: PropTypes.string,
    page: PropTypes.string
}