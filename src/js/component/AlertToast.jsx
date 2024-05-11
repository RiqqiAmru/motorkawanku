import React from "react";

const AlertToast = () => {
  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        id="alertToast"
        className="toast bg-primary text-white align-item-center"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body"></div>
          <button
            type="button"
            className="btn-close me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default AlertToast;
