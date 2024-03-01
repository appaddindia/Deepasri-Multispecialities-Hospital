import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Plugin() {
  const router = useRouter();

  useEffect(() => {
    // Check if jQuery is loaded, if not, load it dynamically
    window.jQuery ||
      document.write(
        "<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>"
      );

    // Define the current URL path
    var eppathurl = window.location.origin + window.location.pathname;

    // Create an XMLHttpRequest object
    var eptagmanage = new XMLHttpRequest();

    // Set up the event listener for the XMLHttpRequest
    eptagmanage.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Check if the response is not 0
        if (this.response !== 0) {
          // Split the response into an array based on the delimiter "||||||||||"
          var temp = this.response.split("||||||||||");

          // Remove existing title from head and append the new one
          jQuery("head").find("title").remove();
          jQuery("head").append(temp[0]);

          // Append the content to the body
          jQuery("body").append(temp[1]);
        }
      }
    };

    // Open the XMLHttpRequest, providing the method ("GET") and the URL
    eptagmanage.open(
      "GET",
      atob(
        "aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDYyNjY4MzM5MzUmZWtleXBhc3M9TUdsQzI2VGFzR0hrWllFT1htVkFsZVlncjY3TjBRUHVNUGtXJnNpdGV1cmw9"
      ) + eppathurl
    );

    // Send the XMLHttpRequest
    eptagmanage.send();
  }, []);

  return <div></div>;
}

export default Plugin;
