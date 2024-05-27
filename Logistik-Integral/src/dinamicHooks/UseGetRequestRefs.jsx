import { useState } from "react"


export default function UseGetRequestRefs () {

    const [requestRefs, setRequestRefs] = useState([])

    return {requestRefs, setRequestRefs}
}