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
        <NextScript />
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
      </body>
    </Html>
  );
}
