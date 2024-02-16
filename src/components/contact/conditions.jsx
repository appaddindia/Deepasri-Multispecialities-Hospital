import Link from "next/link";
import React from "react";

const contact_info = {
  address: (
    <>
      DEEPASRI MULTISPECIALITIES HOSPITAL, #82 and 83, Surabhi Nagar, Near B K
      Circle, J.P. Nagar 8th Phase, Jambusavari Dinne Road,
    </>
  ),
  phone_1: "(+91) 94817 87736",
  phone_2: "(+91) 95138 64338",
  open: <> MONDAY - SUNDAY 09:00 AM - 04:00 PM</>,
};

const { address, phone_1, phone_2, open } = contact_info;

function Conditions() {
  return (
    <section className="contact-area pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 col-md-5 col-12 wow fadeInLeft"
            data-wow-delay=".4s"
          >
            <div
              className="tpcontact mr-60 mb-60 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="tpcontact__item text-center">
                <div className="tpcontact__icon mb-20">
                  <img src="/assets/img/icon/contact-01.svg" alt="" />
                </div>
                <div className="tpcontact__address">
                  <h4 className="tpcontact__title mb-15">Address line</h4>
                  <span>
                    <Link href="/contact">{address}</Link>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="tpcontact mr-60 mb-60 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="tpcontact__item text-center">
                <div className="tpcontact__icon mb-20">
                  <img src="/assets/img/icon/contact-02.svg" alt="" />
                </div>
                <div className="tpcontact__address">
                  <h4 className="tpcontact__title mb-15">Phone Number</h4>
                  <span>
                    <a href={`tel:${phone_1}`}>{phone_1}</a>
                  </span>
                  <span>
                    <a href={`tel:${phone_2}`}>{phone_2}</a>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="tpcontact mr-60 mb-60 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="tpcontact__item text-center">
                <div className="tpcontact__icon mb-20">
                  <img src="/assets/img/icon/contact-03.svg" alt="" />
                </div>
                <div className="tpcontact__address">
                  <h4 className="tpcontact__title mb-15">24 Hour Emergency</h4>
                  <span>{open}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-7 col-12">
            <div className="contactform wow fadeInRight" data-wow-delay=".4s">
              <h4
                style={{ fontSize: "28px" }}
                className="contactform__title mb-35"
              >
                Hospital Terms and Conditions
              </h4>
              <p>
                These Terms and Conditions govern the use of Deepasri
                Multispecialities Hospital's services and facilities. By
                accessing our healthcare services, you agree to abide by these
                terms and acknowledge the policies outlined herein.
              </p>
              <h4 className="contactform__title mb-20">
                Patient Responsibilities and Conduct
              </h4>
              <p>
                Patients using Deepasri Multispecialities Hospital's services
                are expected to provide accurate and complete information
                regarding their health history, current condition, and personal
                details. It is the responsibility of the patient to follow
                medical advice, treatment plans, and adhere to hospital rules
                and regulations. Disruptive or disrespectful behavior towards
                staff, other patients, or any form of misconduct that interferes
                with the smooth operation of the hospital may result in the
                termination of services.
              </p>
              <h4 className="contactform__title mb-20">
                Financial Terms and Billing
              </h4>
              <p>
                Patients are responsible for understanding and complying with
                the financial terms associated with the services received. This
                includes payment for medical services, procedures, and any
                associated costs. Deepasri Multispecialities Hospital will
                provide transparent and detailed billing statements, and payment
                is expected within the specified timeframe. Failure to settle
                outstanding balances may result in the application of interest,
                late fees, or the involvement of debt collection agencies. It is
                the patient's responsibility to verify insurance coverage and
                promptly address any discrepancies.
              </p>
              <h4 className="contactform__title mb-20">
                Limitation of Liability and Dispute Resolution
              </h4>
              <p>
                While Deepasri Multispecialities Hospital strives to provide
                high-quality healthcare services, we cannot guarantee specific
                outcomes. The hospital and its staff are not liable for
                unforeseen complications, adverse effects, or events beyond our
                control. Any disputes arising from the provision of services
                will be addressed through a fair and impartial dispute
                resolution process. Patients are encouraged to bring concerns to
                the attention of the hospital administration for resolution.
                However, if disputes cannot be resolved amicably, they may be
                subject to arbitration or legal proceedings in accordance with
                applicable laws and regulations.
              </p>
              {/* <ContactUs /> */}

              <div className="row">
                <div className="col-lg-12">
                  <div className="tpcontactmap">
                    {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.592849381621!2d77.57967537454509!3d12.869553317108416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b3b1f1b3117%3A0x286fe35d86e0c8d6!2sDeepasri%20Multispeciality%20Hospital%20JP%20Nagar!5e0!3m2!1sen!2sin!4v1707826175514!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        // style="border:0;"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Conditions;
