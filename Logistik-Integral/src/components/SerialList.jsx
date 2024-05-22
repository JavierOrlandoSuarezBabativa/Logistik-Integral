
export default function Serial({id, serial}){

    const divStyle = {
        width: '90vw',
        height: 'fit-content',
        padding: '5px',
        borderRadius: '15px',
        margin: '10px auto',
        background: '#fbfafa',
    }

    const listDiv = {
        display: 'grid',
        gridTemplateColumns: '60% 40%',
        border: '1px solid #000',
        borderRadius: '5px',
        background: '#5354a47c',
        marginBottom: '5px',
        textAlign: 'center',
        padding: '5px',
        fontSize: '20px',
        childStyle: {
            display: 'grid',
            gridTemplateColumns: '60% 40%',
            border: '1px solid #000',
            borderRadius: '5px',
            fontSize: '18px',
            textAlign: 'center',
            background: '#5154a449',
            marginBottom: '3px'
        }
    }

    return(
        <>
            <div style={divStyle}>
                <div style={listDiv}>
                    <h3>Serial</h3>
                    <h3>{serial}</h3>
                </div>
                <div style={listDiv.childStyle}>
                    <b>ID</b>
                    <p>{id}</p>
                </div>
                
            </div>
        </>
    )

}