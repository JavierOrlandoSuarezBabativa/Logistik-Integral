import PropTypes from 'prop-types'

import Axios from 'axios'

import UseAddDetails from '../dinamicHooks/UseAddDetails.jsx'

export default function Button({value}){

    const {newDetailsInfo} = UseAddDetails()

    console.log(newDetailsInfo)

    function createRequest(){
        Axios.post('http://localhost:3002/detalles', newDetailsInfo).then(
          console.log('okkkkk')
        )
      }

    const style = {
        textAlign: 'center',
        marginTop: '10px',
        button: {
            width: '60vw'
        }
    }


    return(
        <div style={style}>
                <button 
                    style={style}
                    onClick={createRequest}>{value}</button>
        </div>
    )
}

Button.propTypes = {
    value: PropTypes.string
}