import { useState } from "react";
import "./CustomeModal.css";
import Modal from "./Modal";

export default function CustomeModal() {
  const [isShow, setIsShow] = useState(false);
  const [isOffer, setOffer] = useState(false);

  const handleOpenModel = () => {
    setIsShow(true);
  };

  const handleClose = () => {
    setIsShow(false);
  };

  const handleOffer = () => {
    setOffer(true);
    setIsShow(false);
  };

  return (
    <>
      <div className="show-offer">
        {!isOffer && (
          <button onClick={handleOpenModel} className="offer-button">
            Show Offer
          </button>
        )}
        {isOffer && <div style={{ fontSize: "50px" }}>Offer Accepted</div>}
      </div>
      {isShow && <Modal handleClose={handleClose} handleOffer={handleOffer} />}
    </>
  );
}
