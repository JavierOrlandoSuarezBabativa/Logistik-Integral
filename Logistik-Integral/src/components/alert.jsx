import "../styles/alert.css";
export default function Alert({ errorMessage }) {
  return (
    <div className="alert">
      <i className="material-icons">error</i>
      <p>{errorMessage}</p>
    </div>
  );
}
