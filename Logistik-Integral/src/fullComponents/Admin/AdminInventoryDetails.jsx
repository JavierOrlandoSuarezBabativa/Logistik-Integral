import { useEffect, useState } from "react";
import Serial from "../../components/SerialList.jsx";
import fetchSeriales from "../../fetch/fetchSeriales.js";

export default function AdminInventoryDetails() {
  const [seriales, setSeriales] = useState([]);

  useEffect(() => {
    fetchSeriales().then((serial) => setSeriales(serial));
  }, []);

  return (
    <>
      {seriales.map((singleSerial, index) => {
        return (
          <Serial
            key={index}
            id={singleSerial.id}
            serial={singleSerial.Serial}
          ></Serial>
        );
      })}
    </>
  );
}
