import React from "react";

function Mobilelinks() {
  return (
    <section
      className="displaymob"
      style={{ position: "fixed", zIndex: "999", bottom: "0px", width: "100%" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              className="cta-btn"
            >
              <a
                style={{ width: "100%", padding: "20px 8px", marginTop: "0px" }}
                className="tp-btn-second"
              >
                Whatsapp Us
              </a>
            </div>
          </div>
          <div className="col-6">
            <div style={{ width: "100%" }} className="about-content__btn">
              <a
                style={{ width: "100%", padding: "20px 8px", marginTop: "0px" }}
                className="tp-btn"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mobilelinks;
