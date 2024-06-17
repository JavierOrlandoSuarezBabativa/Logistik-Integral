import Solicitud from "../../components/CrearSolicitud.jsx";
import RequestButtons from "../../components/RequestButtons.jsx";
import Destinatario from "../../pages/Destinatario.jsx";

import { useEffect, useState } from "react";

import fetchDetailsId from "../../fetch/fetchDetailsId.js";

export default function ClientCreateRequest() {
  const [requestRefs, setRequestRefs] = useState([]);
  const [addRef, setAddRef] = useState([]);
  const [detailsId, setDetailsId] = useState();
  const [showAddReference, setAddReference] = useState(true);
  const [showReceiverDetails, setShowReceiverDetails] = useState(false);

  useEffect(() => {
    fetchDetailsId().then((details) => setDetailsId(details));
  }, []);

  return (
    <>
      {addRef.map((singleAddRef, index) => {
        return (
          <Solicitud
            key={index}
            requestRefs={requestRefs}
            setRequestRefs={setRequestRefs}
            detailsId={detailsId}
          />
        );
      })}
      {showAddReference && (
        <RequestButtons
          setAddRef={setAddRef}
          addRef={addRef}
          setShowReceiverDetails={setShowReceiverDetails}
          setAddReference={setAddReference}
        />
      )}

      {showReceiverDetails && <Destinatario requestRefs={requestRefs} />}
    </>
  );
}
