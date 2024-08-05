import FirstLine from "../../components/FirstLine.jsx";
import CrearItem from "../../pages/CrearItem.jsx";
import UseCreateReference from "../../dinamicHooks/UseCreateReference.jsx";

export default function AdminCreateRef() {
  const {
    newReferenceInfo,
    addReferencesInfo,
    setNewReferenceInfo,
    setEmptyObject,
  } = UseCreateReference();

  return (
    <>
      <FirstLine
        buttonSpecification="Confirmar"
        newReferenceInfo={newReferenceInfo}
        setNewReferenceInfo={setNewReferenceInfo}
        setEmptyObject={setEmptyObject}
        addReferencesInfo={() => addReferencesInfo(event)}
      />
      <CrearItem
        newReferenceInfo={newReferenceInfo}
        addReferencesInfo={() => addReferencesInfo(event)}
      />
    </>
  );
}
