import {useState, useEffect, useCallback} from "react"
import PropTypes from 'prop-types'

import UseRefSelect from "../dinamicHooks/UseRefSelect"
import fetchRefQuantity from "../fetch/fetchRefQuantity.js"
import getDate from "../Services/getDate.js"

import RefSelect from "./RefSelect.jsx"

export default function Solicitud({requestRefs, setRequestRefs, detailsId}){

    const [quantitiesRef, setQuantitiesRef] = useState([])
    const [amount, setAmount] = useState(0)
    const [refId, setId] = useState()
    const [ShowButton, setShowButton] = useState(true)

    const {refSelect, handleChange} = UseRefSelect()
 
    const singleRef = quantitiesRef.find((ref) => ref.Ref == refSelect)

    function authReceiverID () {
        let receiverId;
        if(Array.isArray(detailsId) && detailsId.length === 0){
            receiverId = 1
        } else {
            receiverId = detailsId[0].Id_Destinatario + 1
        }
        return receiverId
    }
 

    const checkSingleRefArray = useCallback(() => {
        let refArray;
        if(singleRef != undefined){
             refArray = Object.values(singleRef)
        }
        return refArray
    }, [singleRef])

    const singleRefData = checkSingleRefArray()

    const checkRefId = useCallback(() => {
        if(singleRefData != undefined){
            setId(singleRefData[1])
        }
    }, [singleRefData])

    useEffect(() => {
        checkRefId()
        checkSingleRefArray()
    }, [checkRefId, checkSingleRefArray])

    useEffect(() => {
        fetchRefQuantity()
        .then(quantities => setQuantitiesRef(quantities))
    }, [])

    function addClick () {
        setAmount(prevAmount => prevAmount + 1)
    }

    function substractClick () {
        setAmount(prevAmount => prevAmount - 1)
    }

    function setRefData () {
        let newRefs = [...requestRefs, {
                                        id_Ref: refId,
                                        idReceiver: authReceiverID(),
                                        quantity: amount,
                                        worth: 0,
                                        fecha: getDate(),
                                        }]
        setRequestRefs(newRefs)
        setShowButton(false)
    }


    return(
        <>
        <div id="order-register-container">

            <div id="orders-grid">

                <div className="amount-div">
                    <p id="amount-order">{amount}</p>

                    <div id="counter">
                        <button
                            onClick={substractClick}
                        >-</button>
                        <button
                            onClick={addClick}
                        >+</button>
                    </div>
                </div>

                <div className="amount-div">
                    <b>{singleRefData != null ? singleRefData[4] - amount: 0}</b> 

                    <div>
                        <p>{singleRefData != null ? singleRefData[3] : ''}</p>
                    </div>
                </div>
                    
                <div className="amount-div">
                    <RefSelect
                        refs={quantitiesRef}
                        handleChange={handleChange}
                    />
                </div>

            </div>
        </div>

        {ShowButton && <button
                            style={{display: 'flex',
                                        margin: '0px auto'}}
                            onClick={setRefData}
                        >Guardar</button>}
        </>
    )

}

Solicitud.propTypes = {
    requestRefs: PropTypes.array,
    setRequestRefs: PropTypes.func,
    detailsId: PropTypes.array
}

