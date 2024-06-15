import React from "react";
import "./index.css";
const PRIMARY = "alert-primary";
const SUCCESS = "alert-success";
const DANGER = "alert-danger";

const getBackgroundColor = (type) => {
  switch (type) {
    case PRIMARY:
      return "#007bff";
    case SUCCESS:
      return "#28a745";
    case DANGER:
      return "#73051b";
    default:
      return "#007bff";
  }
};

const CustomAlert = (props) => {
  const alertStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    width: "fit-content",
    minHeight: "50px",
    top: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: "9999",
    backgroundColor: getBackgroundColor(props.type),
    color: "#fff",
    borderRadius: "4px",
    padding: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    textWrap:"nowrap"
  };

  return (
    <div className="custom-alert" style={alertStyles}>
      <div style={{ marginRight: "10px" }}>{props.message}</div>
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={props.handelClear}
        style={{
          outline: "none",
          color: "#fff",
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
          fontSize: "24px",
        }}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
export default CustomAlert;
export { PRIMARY, SUCCESS, DANGER };
