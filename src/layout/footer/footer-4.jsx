import Link from "next/link";
import React from "react";

const FooterFour = ({ style_2 = false }) => {
  return (
    <>
      <footer>
        <div
          className={`footer-area ${
            style_2 ? "pt-105" : "tp-footer-white-content theme-bg pt-95"
          } `}
        >
          <div className="tp-footer-top pb-25">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-1 mb-40 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="tp-footer-widget__content mb-75">
                      <i>FEEL FREE TO CONTACT US</i>
                      <h4 className="tp-footer-widget__contact mb-20">
                        <a href="tel:9481787736">94817 87736</a>
                      </h4>
                      <h4 className="tp-footer-widget__contact mb-20">
                        <a href="tel:9886704910">98867 04910</a>
                      </h4>
                      <a href="mailto:noreply@envato.com">
                        DEEPASRIMH@GMAIL.COM
                      </a>
                    </div>
                    <div className="tp-footer-widget__sub-sec">
                      <span className="tp-footer-widget__sub-title mb-5">
                        Deepasri Multispecialities Hospital
                      </span>
                      <p>
                        Deepasri Multispecialities Hospital is dedicated to
                        providing compassionate and specialized healthcare
                        tailored to meet your needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-2 mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Useful links
                    </span>
                    <div className="tp-footer-widget__links mb-35">
                      <ul>
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/about">Help & About us</Link>
                        </li>
                        <li>
                          <Link href="/service-3">Our Specialities</Link>
                        </li>
                        <li>
                          <Link href="/service">Other Services</Link>
                        </li>
                        <li>
                          <Link href="/gallery">Gallery</Link>
                        </li>
                        <li>
                          <Link href="/blog">Blog</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="tp-footer-widget footer-2-col-2 mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Facility
                    </span>
                    <div className="tp-footer-widget__links mb-35">
                      <ul>
                        <li>
                          <Link href="/inpatient-services">
                            Inpatient Services
                          </Link>
                        </li>
                        <li>
                          <Link href="/surgical-center">Surgical Center</Link>
                        </li>
                        <li>
                          <Link href="/service">Know More</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-3 mb-40 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Department
                    </span>
                    <div className="tp-footer-widget__links">
                      <ul>
                        <li>
                          <Link href="/obg">Obstetrics & Gynaecology</Link>
                        </li>
                        <li>
                          <Link href="/skincosmetology">
                            Skin & Cosmetology
                          </Link>
                        </li>
                        <li>
                          <Link href="/generalmedicine">General Medicine</Link>
                        </li>
                        <li>
                          <Link href="/generalsurgery">General Surgery</Link>
                        </li>
                        <li>
                          <Link href="/diabetology">Diabetology</Link>
                        </li>
                        <li>
                          <Link href="/ophthalmology">Ophthalmology</Link>
                        </li>
                        <li>
                          <Link href="/orthopaedics">Orthopaedics</Link>
                        </li>
                        <li>
                          <Link href="/paediatrics">Paediatrics</Link>
                        </li>
                        <li>
                          <Link href="/cardiology">Cardiology</Link>
                        </li>
                        <li>
                          <Link href="/neurology">Neurology</Link>
                        </li>
                        <li>
                          <Link href="/psychiatry">Psychiatry</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-4 mb-40 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Contact Info
                    </span>
                    <div className="tp-footer-widget__links mb-120">
                      <ul>
                        <li>DEEPASRI MULTISPECIALITIES HOSPITAL,</li>
                        <li>
                          #82 and 83, Surabhi Nagar, Near B K Circle, J.P. Nagar
                          8th Phase, Jambusavari Dinne Road,
                        </li>
                        <li>Bengaluru - 560 076.</li>
                        <li>24-Hour Emergency Services</li>
                      </ul>
                    </div>
                    <div className="tp-footer-widget__social fw-social">
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fa-light fa-basketball"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-area-bottom fw-border">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="footer-widget__copyright copyright-white">
                    <span>
                      © Copyright ©{new Date().getFullYear()}
                      <Link href="/"> Appaddindia</Link>.
                      <i> All Rights Reserved Copyright</i>
                    </span>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="footer-widget__copyright-info info-direction">
                    <ul className="d-flex align-items-center">
                      <li>
                        <Link href="/termsandconditions">
                          Terms and conditions
                        </Link>
                      </li>
                      <li>
                        <Link href="/privancy">Privacy policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterFour;
