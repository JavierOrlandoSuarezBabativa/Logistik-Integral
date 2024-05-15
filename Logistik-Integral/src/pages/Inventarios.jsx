import { Link } from "react-router-dom"

export default function Inventarios(){

    return(
        <>
        <div id="inventory-container">
            <div className="inventories">
                <div className="inventory-item image-item">
                <i className="material-icons icon-inventories">computer</i>
                </div>
                <div className="inventory-item reference-item">
                <h5>Referencia</h5>
                <p>xxxxxxxxxxxxxxxx</p>
                </div>
                <div className="inventory-item cuantities-item">
                <h5>Total</h5>
                <p>xxx</p>
                </div>
                <div className="inventory-item detail-item">
                    <Link to={'/inventoryDetails'}>
                        <button className="detail-button">Detalles</button>
                    </Link>        
                </div>
                
            </div>
      </div>

        </>
    )

}