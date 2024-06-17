import "../styles/Solicitudes.css";

import { useState, useEffect, useContext } from "react";

import fetchRequestData from "../fetch/fetchRequestData.js";

import RequestDetails from "../components/RequestDetails.jsx";

import { RequestId } from "../Routes/RenderRoutes.jsx";

export default function Solicitudes() {
  const [requestsData, setReferencesData] = useState();

  const { setRequestId } = useContext(RequestId);

  useEffect(() => {
    fetchRequestData().then((requestsResponse) =>
      setReferencesData(requestsResponse)
    );
  }, []);

  return (
    <>
      {/* Falta agregar la cantidad total de equipos por enviar */}
      {requestsData != undefined &&
        requestsData.map(({ status, observations, date, Id, request }) => {
          return (
            <RequestDetails
              key={Id}
              id={Id}
              status={status}
              observations={observations}
              date={date}
              request={request}
              setRequestId={setRequestId}
            />
          );
        })}
    </>
  );
}
