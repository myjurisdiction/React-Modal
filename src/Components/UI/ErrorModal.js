import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onClick}></div>
      <div className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <button type="submit" onClick={props.onClick}>
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
