

export default function SerialInput ({inputNum, setSeriales}) {




    function handleSerial (event) {
        const {value, name} = event.target
        setSeriales(prevSeriales => ({
            ...prevSeriales,
            [name]: value
        }
        ))
    }


     
    return(
        <>
        <input name={`input${inputNum}`} type="text" placeholder="Ingresar serial" onChange={handleSerial}/>
        </>
    )

}