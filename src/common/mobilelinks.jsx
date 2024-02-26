import Link from "next/link";
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
                href="https://api.whatsapp.com/send/?phone=9886704910&text=Hello"
                className="tp-btn-second"
              >
                <div>
                  <img
                    style={{ width: "24px", paddingBottom: "6px" }}
                    src="assets/photo/whatsapp.png"
                    alt=""
                  />
                </div>
                Whatsapp<br></br> Us
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
                  backgroundColor: "#0e63ff",
                }}
                href="tel:9481787736"
                className="tp-btn-second"
              >
                <div>
                  <img
                    style={{ width: "24px", paddingBottom: "6px" }}
                    src="assets/photo/telephone (1).png"
                    alt=""
                  />
                </div>
                Call<br></br> Us
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
              <Link
                style={{
                  width: "100%",
                  padding: "10px 8px",
                  marginTop: "0px",
                  fontSize: "8px",
                  backgroundColor: "#0080ff",
                }}
                href="/contact"
                className="tp-btn-second"
              >
                <div>
                  <img
                    style={{ width: "24px", paddingBottom: "6px" }}
                    src="assets/photo/schedule.png"
                    alt=""
                  />
                </div>
                Appt<br></br> Booking
              </Link>
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
                  backgroundColor: "#ff0080",
                }}
                href="https://www.google.com/maps?ll=12.869548,77.58225&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=2913797474766342358"
                className="tp-btn-second"
              >
                <div>
                  <img
                    style={{ width: "24px", paddingBottom: "6px" }}
                    src="assets/photo/location.png"
                    alt=""
                  />
                </div>
                Locate<br></br>Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mobilelinks;
