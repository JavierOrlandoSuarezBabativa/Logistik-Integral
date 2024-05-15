import Header from '../../components/Header.jsx'
import FirstLine from '../../components/FirstLine.jsx'
import CrearItem from '../../pages/CrearItem.jsx'
import UseCreateReference from '../../dinamicHooks/UseCreateReference.jsx'

export default function AdminCreateRef(){

    

    const {newReferenceInfo, addReferencesInfo, setNewReferenceInfo} = UseCreateReference()



    return(
        <>
        <Header page='Crear Referencia'></Header>
        <FirstLine
                buttonSpecification='Confirmar'
                newReferenceInfo={newReferenceInfo}
                setNewReferenceInfo={setNewReferenceInfo}
                addReferencesInfo={() => addReferencesInfo(event)}
        />
        <CrearItem 
                newReferenceInfo={newReferenceInfo}
                addReferencesInfo={() => addReferencesInfo(event)}
        />
                                        
        </>     
    )
}