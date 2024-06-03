import '../styles/GestionSolicitud.css'

import { RequestId } from '../App'

import { useContext, useEffect, useState } from 'react'

import fetchRequests from '../fetch/fetchRequests.js'
import fetchSeriales from '../fetch/fetchSeriales.js'

import getSingleRequest from '../Services/getSingleRequest.js'

import Request from '../components/Request.jsx'
import ReceiverDetails from '../components/ReceiverDetails.jsx'


export default function GestionSolicitud(){

  const {requestId} = useContext(RequestId)

  const [requests, setRequests] = useState()
  const [serials, setSerials] = useState()
  const [showDetails, setShowDetails] = useState(false)


  useEffect(() => {
    fetchRequests()
    .then(res => setRequests(res))
    fetchSeriales()
    .then(res => setSerials(res))
  }, [])


  let currentRequest;
  let receiverId; 

  useEffect(() => {
    fetchSeriales()
    .then(res => setSerials(res))
  }, [])

  if (requests != undefined) {
      currentRequest  = getSingleRequest(requests, requestId)
      receiverId = currentRequest[0].IdDestinatario
  }
  
  return(
      <>
      {currentRequest != undefined && currentRequest.map(({
                                                            Id,
                                                            Referencia,
                                                            Cantidad,
                                                            IdRef
                                                          }) => {
                                                                  return <Request
                                                                            key={Id}
                                                                            referencia={Referencia}
                                                                            cantidad={Cantidad}
                                                                            idRef={IdRef}
                                                                            serials={serials}
                                                                          />
                                                                })}
      <button onClick={() => setShowDetails(true)}>Destinatario</button>
      {showDetails && <ReceiverDetails
                        receiverId={receiverId}/>}
      </>
  )

}