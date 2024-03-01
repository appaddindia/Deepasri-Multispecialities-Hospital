import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect } from "react";

function Plugin() {
  useEffect(() => {
    // Check if jQuery is loaded, if not, load it dynamically
    window.jQuery ||
      document.write(
        "<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>"
      );

    var eppathurl = window.location.origin + window.location.pathname;
    var eptagmanage = new XMLHttpRequest();
    eptagmanage.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        if (this.response !== 0) {
          var temp = this.response.split("||||||||||");

          // Remove existing title from head and append the new one
          document.head.querySelector("title").remove();
          var newTitle = document.createElement("title");
          newTitle.appendChild(document.createTextNode(temp[0]));
          document.head.appendChild(newTitle);

          // Append the content to the body
          var bodyContent = document.createElement("div");
          bodyContent.innerHTML = temp[1];
          document.body.appendChild(bodyContent);
        }
      }
    };
    eptagmanage.open(
      "GET",
      atob(
        "aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDYyNjY4MzM5MzUmZWtleXBhc3M9TUdsQzI2VGFzR0hrWllFT1htVkFsZVlncjY3TjBRUHVNUGtXJnNpdGV1cmw9"
      ) + eppathurl
    );
    eptagmanage.send();
  }, []);

  return <div></div>;
}

export default Plugin;
