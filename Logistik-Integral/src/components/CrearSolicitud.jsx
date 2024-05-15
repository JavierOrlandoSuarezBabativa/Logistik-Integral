

export default function Solicitud(props){


    return(
        <>
            <div id="order-register-container">
                <div id="orders-grid">
                    <div id="reference-item">
                        <select className="dropdown-module">
                            <option value="">REF</option>
                        </select>
                    </div>
                    <div id="amount-div">
                        <p id="amount-order">xx</p>
                        <div id="counter">
                        <button>-</button>
                        <button>+</button>
                        </div>
                    </div>
                </div>
                <div className="div-confirmation-button">
                    <button id="add-reference">Agregar Referencia</button>
                </div>
                <div className="div-confirmation-button">
                    <button  id="confirmation-button">Confirmar Solicitud</button>
                </div>
            </div>
        </>
    )

}