import React from "react";

const ModalHapusData = () => {
  return (
    <div className="modal fade" tabIndex="-1" id="hapusData">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Hapus Data</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Apakah Anda yakin untuk hapus Data investasi?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Batal
            </button>
            <button type="button" className="btn btn-danger">
              Hapus Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalHapusData;
