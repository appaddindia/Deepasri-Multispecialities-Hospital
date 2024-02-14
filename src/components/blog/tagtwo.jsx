import Link from "next/link";
import React from "react";
import serviceinfo from "../services/service-details/serviceinfo";

function tagtwo() {
  return (
    <>
      <div className="sidebar__widget mb-55">
        <h3 className="sidebar__widget-title mb-25">OTHER SERVICES</h3>
        <div className="sidebar__widget-content">
          <div className="tagcloud">
            {serviceinfo.map(
              (tag, i) =>
                tag.service === "service" && (
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
}

export default tagtwo;
