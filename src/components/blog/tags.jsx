import Link from "next/link";
import React from "react";
import serviceinfo from "../services/service-details/serviceinfo";

//  tags data
const tags = [
  { name: "Covid-19" },
  { name: "Gene" },
  { name: "Test" },
  { name: "Lab" },
  { name: "data" },
  { name: "Virus" },
  { name: "Pandemic" },
  { name: "Symptoms" },
  { name: "Medicine" },
  { name: "Bacteria" },
];

const Tags = () => {
  let name = "facility";
  return (
    <>
      <div className="sidebar__widget mb-55">
        <h3 className="sidebar__widget-title mb-25">{name.toUpperCase()}</h3>
        <div className="sidebar__widget-content">
          <div className="tagcloud">
            {serviceinfo.map(
              (tag, i) =>
                tag.service === "other-service" && (
                  <Link key={i} href={tag.link}>
                    {tag.name}
                  </Link>
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tags;
