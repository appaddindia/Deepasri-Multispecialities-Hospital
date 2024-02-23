import React from "react";
import serviceinfo from "../services/service-details/serviceinfo";
import Link from "next/link";

function categorytwo() {
  return (
    <>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title mb-25">DEPARTMENT</h3>
        <div className="sidebar__widget-content">
          <ul>
            {serviceinfo.map(
              (item, i) =>
                item.service === "other-service" && (
                  <li key={i}>
                    <Link href={item.link}>
                      {item.name}
                      <span>
                        <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                      </span>
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default categorytwo;
