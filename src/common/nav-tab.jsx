import React from "react";

// progress_data
const progress_data = [
  {
    id: 1,
    icon: "flaticon-approval",
    img: "/assets/img/shape/navtabs-01.png",
    title: "Patient-Centric Admission",
    des: (
      <>
        Streamlined admission process ensuring a warm welcome and efficient
        paperwork.
      </>
    ),
  },
  {
    id: 2,
    icon: "flaticon-flask",
    img: "/assets/img/shape/navtabs-01.png",
    title: "Cutting-Edge Treatment",
    des: (
      <>
        Implementation of advanced medical technologies for accurate diagnosis
        and effective treatment.
      </>
    ),
  },
  {
    id: 3,
    icon: "flaticon-report",
    img: "",
    title: "Post-Treatment Support",
    des: (
      <>
        Regular follow-ups and communication to track patient progress and
        address any concerns.
      </>
    ),
  },
];

// tab_content
const tab_content = [
  {
    id: 1,
    tab_id: "profile-tab-pane",
    aria_labelledby: "profile-tab",
    header: (
      <>
        At the forefront of compassionate healthcare excellence, Deepasri
        Multispecialities Hospital leads <br></br>with innovation and a
        steadfast commitment to a patient-centric approach.
      </>
    ),
    title: "Elevating Healthcare, Enriching Lives",
    des_1: (
      <>
        At Deepasri Multispecialities Hospital, our mission is to deliver
        exceptional healthcare through compassionate, tailored services and
        innovative technology in an affordable, accessible environment.
      </>
    ),
    des_2: (
      <>
        With a customer-centric approach focusing on cleanliness, efficiency,
        and continual comfort, our 24/7 services aim to expedite recoveries.
        Success is measured in the radiant smiles of satisfied patients,
        confident in the exceptional care they received.
      </>
    ),
    images: [
      { order: "order-lg-1", img: "/assets/photo/aaa1.jpg" },
      { order: "order-lg-3", img: "/assets/photo/aaa2.jpg" },
    ],
  },
  {
    id: 2,
    tab_id: "contact-tab-pane",
    aria_labelledby: "contact-tab",
    header: (
      <>
        Pioneering compassionate healthcare at its best, Deepasri
        Multispecialities Hospital takes the lead by <br></br>incorporating
        innovation and unwavering dedication to a patient-centered philosophy.
      </>
    ),
    title: "We are Trusted by over 25000+ of patient",
    des_1: (
      <>
        At Deepasri Multispecialities Hospital, we prioritize your well-being
        beyond medical care, embodying values such as compassionate healthcare,
        specialized services, cleanliness, efficiency, customer-centricity,
        affordability, and accessibility.
      </>
    ),
    des_2: (
      <>
        Ensuring a personalized healthcare experience in a safe, hygienic
        environment, we leverage innovative design and technology. With 24/7
        support services, our commitment extends to your continual comfort and
        swift recovery. Success is epitomized by genuine smiles of satisfaction
        on our patients faces, reflecting the paramount value we place on their
        health.
      </>
    ),
    images: [
      { order: "order-lg-1", img: "/assets/photo/aaa3.jpg" },
      { order: "order-lg-3", img: "/assets/photo/aaa4.jpg" },
    ],
  },
];
const NavTab = () => {
  return (
    <>
      <section className="nav-area tp-common-area pt-100 pb-75">
        <div className="container">
          <ul className="nav tp-nav-tavs mb-70" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
                tabIndex="-1"
              >
                Our Process
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
                tabIndex="-1"
              >
                OUr Mission
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
                tabIndex="-1"
              >
                OUr Value
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <span className="nav-info d-flex justify-content-center text-center mb-60">
                Deepasri Multispecialities Hospital: Pioneering Compassionate
                Healthcare<br></br> Excellence with Innovation and
                Patient-Centric Focus
              </span>
              <div className="row">
                {progress_data.map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                    <div className="navtabs nav-primary p-relative text-center mb-20">
                      <div className="navtabs__icon mb-20">
                        <i className={item.icon}></i>
                      </div>
                      <div className="navtabs__content">
                        <h5 className="navtabs__title mb-20 mb-10">
                          {item.title}
                        </h5>
                        <p>{item.des}</p>
                      </div>
                      {item.img && (
                        <div className="navtabs__shape d-none d-lg-block">
                          <img src={item?.img} alt="shape" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {tab_content.map((item) => (
              <div
                key={item.id}
                className="tab-pane fade"
                id={`${item.tab_id}`}
                role="tabpanel"
                aria-labelledby={`${item.aria_labelledby}`}
              >
                <span className="nav-info d-flex justify-content-center text-center mb-75">
                  {item.header}
                </span>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-12 order-lg-2">
                    <div className="nabmission mb-30">
                      <div className="nabmission__content text-center ml-50 mr-50 pt-0">
                        <h4 className="nabmission__title mb-20">
                          {item.title}
                        </h4>
                        <p className="mb-15">{item.des_1}</p>
                        <p>{item.des_2}</p>
                      </div>
                    </div>
                  </div>

                  {item.images.map((img, i) => (
                    <div
                      key={i}
                      className={`col-xl-3 col-lg-3 col-md-6 ${img.order}`}
                    >
                      <div className="nabthumb mb-20">
                        <img src={img.img} alt="tab-thumb" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NavTab;
