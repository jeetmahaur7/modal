export default function Modal({ handleClose, handleOffer }) {
  const handleOutsideClick = (e) => {
    if (e.target.className === "modal") handleClose();
  };

  return (
    <>
      <div className="modal" onClick={handleOutsideClick}>
        <div className="modal-content">
          <button className="close-btn" onClick={handleClose}>
            X
          </button>
          <div className="content">
            Click the button below to accept our amazing offer!!!
          </div>
          <button className="accept-btn" onClick={handleOffer}>
            Accept Offer
          </button>
        </div>
      </div>
    </>
  );
}
