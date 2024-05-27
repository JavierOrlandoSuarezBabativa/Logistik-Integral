import { useState } from "react"

export default function UseRefSelect () {

    const [refSelect, setRefSelect] = useState('')

    function handleChange (event) {
        const {value} = event.target
        setRefSelect(value)
    }

    return {refSelect, handleChange, setRefSelect}
}