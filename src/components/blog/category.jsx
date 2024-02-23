import Link from "next/link";
import React from "react";
import serviceinfo from "../services/service-details/serviceinfo";

// category_data
const category_data = [
  {
    category: "Chemistry",
    blog_item: "03",
  },
  {
    category: "Forensic science",
    blog_item: "07",
  },
  {
    category: "Gemological",
    blog_item: "09",
  },
  {
    category: "COvid Analysis",
    blog_item: "01",
  },
  {
    category: "Becteriology",
    blog_item: "00",
  },
  {
    category: "Angiosperm",
    blog_item: "26",
  },
];

const Category = () => {
  return (
    <>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title mb-25">DEPARTMENT</h3>
        <div className="sidebar__widget-content">
          <ul>
            {serviceinfo.map(
              (item, i) =>
                item.service === "service" && (
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
};

export default Category;
