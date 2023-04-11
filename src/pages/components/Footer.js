import React from "react";
import dayjs from "dayjs";

const Footer = () => {
  const currentYear = dayjs().year();
  return (
    <footer className="container w-3/4 mx-auto p-6 mt-4">
      <div className="text-center">© {currentYear} George Thomas</div>
    </footer>
  );
};

export default Footer;
