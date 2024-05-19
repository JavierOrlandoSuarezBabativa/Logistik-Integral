import Axios from "axios";

async function getRefs() {
  let refs = [];

  try {
    const res = await Axios("http://localhost:3002/sqlReferencias");
    refs = res.data;
  } catch (err) {
    console.log(err);
  }

  return refs;
}

const refssss = getRefs();

export default refssss;
