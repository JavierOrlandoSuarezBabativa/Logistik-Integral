import { useState } from "react";


export default function UseToRegister () {

    const [toRegister, setToRegister] = useState()

    return {toRegister, setToRegister}
}