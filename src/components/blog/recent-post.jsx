import Link from "next/link";
import React from "react";
import article_data from "../../data/article-data";

// recent_post data
const recent_post = [
  {
    id: 1,
    img: "/assets/img/blog/sidebar/blog-sm-1.jpg",
    date: "4 March. 2022",
    title: " {` Dont`} Underestimate Tree for Medicine",
  },
  {
    id: 2,
    img: "/assets/img/blog/sidebar/blog-sm-2.jpg",
    date: "12 February. 2022",
    title: "Equipping Researchers in the Developing World",
  },
  {
    id: 3,
    img: "/assets/img/blog/sidebar/blog-sm-3.jpg",
    date: "14 January. 2022",
    title: "Role of Genetics in treating Heigh-grade glioma",
  },
  {
    id: 4,
    img: "/assets/img/blog/sidebar/blog-sm-4.jpg",
    date: "18 March. 2021",
    title: "Research And Verify of a Covid-19 Virus",
  },
];
const RecentPost = () => {
  return (
    <>
      <div className="sidebar__widget mb-55">
        <h3 className="sidebar__widget-title mb-25">Recent Post</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {article_data.map((item) => (
              <div
                key={item.id}
                className="rc__post mb-20 d-flex align-items-center"
              >
                <div className="rc__post-thumb">
                  <Link
                    style={{
                      width: "100px",
                    }}
                    href={`#${item.id}blog`}
                  >
                    <img
                      style={{ width: "100px", aspectRatio: "5/4" }}
                      src={item.imgs}
                      alt="blog-sidebar"
                    />
                  </Link>
                </div>
                <div className="rc__post-content">
                  <div className="rc__meta">
                    <span>{item.date}</span>
                  </div>
                  <h3 className="rc__post-title">
                    <Link href={`#${item.id}blog`}>{item.title}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentPost;
