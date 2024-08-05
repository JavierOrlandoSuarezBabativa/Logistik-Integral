import "../styles/Solicitudes.css";

import { useState, useEffect, useContext } from "react";

import fetch from "../Services/fetch.js";
import RequestDetails from "../components/RequestDetails.jsx";

import { RequestId } from "../Routes/RenderRoutes.jsx";

export default function Solicitudes() {
  const [requestsData, setReferencesData] = useState();

  const { setRequestId } = useContext(RequestId);

  useEffect(() => {
    fetch("RequestsData").then((requestsResponse) =>
      setReferencesData(requestsResponse)
    );
  }, []);

  return (
    <>
      {requestsData != undefined &&
        requestsData.map(({ status, observations, date, Id, quantity }) => {
          return (
            <RequestDetails
              key={Id}
              id={Id}
              status={status}
              observations={observations}
              date={date}
              quantity={quantity}
              setRequestId={setRequestId}
            />
          );
        })}
    </>
  );
}
