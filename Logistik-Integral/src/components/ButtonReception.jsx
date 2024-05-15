import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { UserType } from "../App"
import { useContext } from "react"

export default function Button({value}){
    const style = {
        textAlign: 'center',
        marginTop: '10px',
        button: {
            width: '60vw'
        }
    }

    const {userType} = useContext(UserType)


    return(
        <div style={style}>
            <Link to={userType === 'Administrador' ? '/createItem' : '/reception'}>
                <button style={style} >{value}</button>
            </Link>
        </div>
    )
}

Button.propTypes = {
    value: PropTypes.string
}