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

function Terms() {
  return (
    <>
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
                    <h4 className="tpcontact__title mb-15">
                      24 Hour Emergency
                    </h4>
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
                  Privacy Policy for Deepasri Multispecialities Hospital
                </h4>
                <p>
                  At Deepasri Multispecialities Hospital, we prioritize the
                  confidentiality and security of your personal information to
                  ensure your trust in our healthcare services. This Privacy
                  Policy outlines our commitment to safeguarding your data and
                  maintaining the highest standards of privacy protection.
                </p>
                <h4 className="contactform__title mb-20">
                  Collection and Use of Personal Information
                </h4>
                <p>
                  We collect and process personal information solely for the
                  purpose of providing you with quality healthcare services.
                  This may include but is not limited to, your name, contact
                  details, medical history, and insurance information. Your data
                  is securely stored in compliance with applicable laws and
                  regulations. We may share your information with authorized
                  healthcare professionals within our organization to facilitate
                  your treatment, but rest assured that we do not disclose your
                  data to external parties without your explicit consent, unless
                  required by law.
                </p>
                <h4 className="contactform__title mb-20">
                  Data Security and Confidentiality
                </h4>
                <p>
                  We employ stringent measures to ensure the security and
                  confidentiality of your personal information. Our hospital
                  implements advanced technology and follows industry best
                  practices to protect your data from unauthorized access,
                  disclosure, alteration, and destruction. Access to your
                  information is restricted to authorized personnel who require
                  it for legitimate healthcare purposes. We continually assess
                  and enhance our security protocols to adapt to evolving
                  threats and maintain the highest standards of data protection.
                </p>
                <h4 className="contactform__title mb-20">
                  Patient Rights and Consent
                </h4>
                <p>
                  At Deepasri Multispecialities Hospital, we respect your rights
                  regarding your personal information. You have the right to
                  access, update, and request the deletion of your data. We seek
                  your informed consent before collecting any sensitive
                  information and provide you with clear information on how your
                  data will be used. Additionally, our hospital ensures
                  transparency in communicating any changes to our Privacy
                  Policy. If you have any concerns or inquiries regarding your
                  privacy, our dedicated privacy team is available to address
                  them promptly. Your trust is paramount to us, and we are
                  committed to upholding the privacy and confidentiality of your
                  healthcare information.
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
    </>
  );
}

export default Terms;
