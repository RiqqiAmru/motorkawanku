import React, { useState } from "react";

const Card = ({ children }) => {
  
  return (
    <section className="data-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
