// parent component
import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToogleModalpopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }
  return (
    <div className="button">
      <button  onClick={handleToogleModalpopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div> Customized Body</div>}
        />
      )}
    </div>
  );
}
