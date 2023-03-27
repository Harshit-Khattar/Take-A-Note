import React from "react";

function Footer() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return (
    <footer>
      <p>{day}-{month}-{year}</p>
    </footer>
  );
}

export default Footer;
