import {useState, useEffect, useCallback} from "react"
import PropTypes from 'prop-types'

import UseRefSelect from "../dinamicHooks/UseRefSelect"
import RefSelect from "./RefSelect.jsx"
import fetchRefQuantity from "../fetch/fetchRefQuantity.js"

import { Outlet } from "react-router-dom"



export default function Solicitud({requestRefs, setRequestRefs}){

    const [quantitiesRef, setQuantitiesRef] = useState([])

    const [amount, setAmount] = useState(0)

    const {refSelect, handleChange} = UseRefSelect()

    const [refId, setId] = useState()
 
    const singleRef = quantitiesRef.find((ref) => ref.Ref == refSelect)
 

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
    }, [singleRefData])


    useEffect(() => {
        fetchRefQuantity()
        .then(quantities => setQuantitiesRef(quantities))
        checkSingleRefArray()
    }, [])


    function addClick () {
        setAmount(prevAmount => prevAmount + 1)
    }

    function substractClick () {
        setAmount(prevAmount => prevAmount - 1)
    }

    function getDate () {
        const todayTime = Date.now();
        const date = new Date(todayTime);

        return date.toLocaleDateString()
    }

    function setRefData () {
        let newRefs = [...requestRefs, {
                                        Id_Ref: refId,
                                        quantity: amount,
                                        worth: 0,
                                        fecha: getDate(),
                                        }]
        setRequestRefs(newRefs)
    }


    return(
        <>
            <div id="order-register-container">
                <div id="orders-grid">
                    <div id="amount-div">
                        <p id="amount-order">{amount}</p>
                        <div id="counter">
                        <button
                            onClick={substractClick}>-</button>
                        <button
                            onClick={addClick}>+</button>
                        </div>
                        <div>
                            <b>{singleRefData != null ? singleRefData[4] : 0}</b> 
                        </div>
                        <div>
                            <p>{refSelect}</p>
                        </div>
                    </div>
                    <RefSelect refs={quantitiesRef} handleChange={handleChange}/>
                </div>
            </div>
            <button onClick={setRefData}>Confirmar</button>
        </>
    )

}

Solicitud.proptypes = {
    requestRefs: PropTypes.array,
    setRequestRefs: PropTypes.func
}

