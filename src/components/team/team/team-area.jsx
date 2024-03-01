import team_one_data from "../../../data/team-one-data";
import Link from "next/link";
import React from "react";
import team_home_two from "../../../data/team-home-2";

const TeamArea = () => {
  return (
    <>
      <section className="team-area pt-125 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span className="tp-section__sub-title left-line right-line mb-25">
                  OUr Team
                </span>
                <h3 className="tp-section__title mb-70">Our Specialist</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {team_home_two.map((item) => (
              <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                <div className="team-item mb-45">
                  <div className="team-item__thumb mb-30">
                    <img
                      style={{
                        width: "60%",
                        borderRadius: "50%",
                        border: "3px solid #0e63ff",
                      }}
                      src={item.img}
                      alt="team-thumb"
                    />
                  </div>
                  <div className="team-item__content">
                    <h5 className="team-item__title mb-15">
                      <>{item.name}</>
                    </h5>
                    <span>{item.title}</span>
                    {/* <div className="team-item__social-info">
                      {item.social_links.map((l, i) => (
                        <a key={i} href={l.link} target={l.target}>
                          <i className={l.icon}></i>
                        </a>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamArea;
