import React from "react";

function Mobilelinks() {
  return (
    <section
      className="displaymob"
      style={{
        position: "fixed",
        zIndex: "999",
        bottom: "0px",
        width: "100%",
        paddingBottom: "6px",
      }}
    >
      <div className="container">
        <div className="row">
          <div style={{ padding: "2px" }} className="col-3">
            <div
              style={{
                width: "100%",
                display: "flex",
                padding: "1px",
                justifyContent: "center",
              }}
              className="cta-btn"
            >
              <a
                style={{
                  width: "100%",
                  padding: "10px 8px",
                  marginTop: "0px",
                  fontSize: "8px",
                }}
                className="tp-btn-second"
              >
                <img
                  style={{ width: "24px", paddingBottom: "6px" }}
                  src="assets/photo/whatsapp.png"
                  alt=""
                />
                Whatsapp Us
              </a>
            </div>
          </div>
          <div style={{ padding: "2px" }} className="col-3">
            <div
              style={{
                width: "100%",
                display: "flex",
                padding: "1px",
                justifyContent: "center",
              }}
              className="cta-btn"
            >
              <a
                style={{
                  width: "100%",
                  padding: "10px 8px",
                  marginTop: "0px",
                  fontSize: "8px",
                }}
                className="tp-btn-second"
              >
                <img
                  style={{ width: "24px", paddingBottom: "6px" }}
                  src="assets/photo/telephone (1).png"
                  alt=""
                />
                Whatsapp Us
              </a>
            </div>
          </div>
          <div style={{ padding: "2px" }} className="col-3">
            <div
              style={{
                width: "100%",
                display: "flex",
                padding: "1px",
                justifyContent: "center",
              }}
              className="cta-btn"
            >
              <a
                style={{
                  width: "100%",
                  padding: "10px 8px",
                  marginTop: "0px",
                  fontSize: "8px",
                }}
                className="tp-btn-second"
              >
                <img
                  style={{ width: "24px", paddingBottom: "6px" }}
                  src="assets/photo/schedule.png"
                  alt=""
                />
                Whatsapp Us
              </a>
            </div>
          </div>
          <div style={{ padding: "2px" }} className="col-3">
            <div
              style={{
                width: "100%",
                display: "flex",
                padding: "1px",
                justifyContent: "center",
              }}
              className="cta-btn"
            >
              <a
                style={{
                  width: "100%",
                  padding: "10px 8px",
                  marginTop: "0px",
                  fontSize: "8px",
                }}
                className="tp-btn-second"
              >
                <img
                  style={{ width: "24px", paddingBottom: "6px" }}
                  src="assets/photo/location.png"
                  alt=""
                />
                Whatsapp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mobilelinks;
