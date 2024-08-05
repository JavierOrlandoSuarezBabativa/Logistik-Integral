import "../styles/GestionSolicitud.css";

import { RequestId } from "../Routes/RenderRoutes.jsx";
import { useContext, useEffect, useState } from "react";

import fetchRequestData from "../Services/fetch.js";
import getSingleRequest from "../Services/getSingleRequest.js";

import Request from "../components/Request.jsx";
import ReceiverDetails from "../components/ReceiverDetails.jsx";

export default function GestionSolicitud() {
  const { requestId } = useContext(RequestId);

  const [requests, setRequests] = useState();
  const [serials, setSerials] = useState();
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    fetchRequestData("RequestInfo").then((res) => setRequests(res));
    fetchRequestData("seriales").then((res) => setSerials(res));
  }, []);

  let currentRequest;
  let receiverId;

  if (requests != undefined) {
    currentRequest = getSingleRequest(requests, requestId);
    receiverId = currentRequest[0].IdDestinatario;
  }

  return (
    <>
      {!showDetails &&
        currentRequest != undefined &&
        currentRequest.map(({ Id, Referencia, Cantidad, IdRef, Marca }) => {
          return (
            <Request
              key={Id}
              referencia={Referencia}
              cantidad={Cantidad}
              idRef={IdRef}
              serials={serials}
              marca={Marca}
            />
          );
        })}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1.5rem",
          marginBottom: "1.5rem",
          padding: "5px",
        }}
      >
        <button
          onClick={() => {
            setShowDetails(true);
          }}
        >
          Destinatario
        </button>
      </div>

      {showDetails && (
        <ReceiverDetails
          idReceiver={currentRequest.IdDestinatario}
          receiverId={receiverId}
        />
      )}
    </>
  );
}
