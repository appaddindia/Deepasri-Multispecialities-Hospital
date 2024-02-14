import research_data from "../../data/research-data";
import Link from "next/link";
import React from "react";

const ResearchArea = () => {
  const menu = [
    "../assets/photo/g1.jpeg",
    "../assets/photo/g2.jpeg",
    "../assets/photo/g3.jpeg",
    "../assets/photo/g4.jpeg",
    "../assets/photo/g5.jpeg",
    "../assets/photo/g6.jpeg",
    "../assets/photo/g7.jpeg",
    "../assets/photo/g8.jpeg",
    "../assets/photo/g9.jpeg",
    "../assets/photo/g10.jpeg",
    "../assets/photo/g11.jpeg",
  ];
  return (
    <>
      <section className="research-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            {menu.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div
                  className={`research-item ${item.color} mb-0 wow fadeInUp`}
                  data-wow-delay=".6s"
                >
                  <div className="research-item__thum fix mb-20">
                    <img src={item} alt="research-thumb" />
                  </div>
                  {/* <div className="research-item__content">
                    <span>{item.category}</span>
                    <h4 className="research-item__title mb-20">
                      <Link href="/services-details">{item.title}</Link>
                    </h4>
                    <p>{item.des}</p>
                    <Link href="/services-3" className="research-item__btn">
                      Read More
                    </Link>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
          {/* <div className="row">
            <div className="col-12">
              <div className="basic-pagination text-center mt-20">
                <nav>
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="fa-light fa-arrow-left-long"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">1</Link>
                    </li>
                    <li>
                      <span className="current">2</span>
                    </li>
                    <li>
                      <Link href="#">3</Link>
                    </li>
                    <li>
                      <Link href="#">...</Link>
                    </li>
                    <li>
                      <Link href="/research">
                        <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ResearchArea;
