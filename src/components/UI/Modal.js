import React from "react";
import reactDom from "react-dom";
import classes from "./Modal.module.css";
import Card from "./Card";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </Card>
  );
};

const Modal = (props) => {
  const portalItem = document.getElementById("overlays");

  return (
    <React.Fragment>
      {reactDom.createPortal(<BackDrop onClose={props.onClose} />, portalItem)}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalItem
      )}
    </React.Fragment>
  );
};

export default Modal;
