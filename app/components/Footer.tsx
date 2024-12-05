import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black/50 text-white py-4 text-center mt-8">
      <p className="text-sm">
        © {new Date().getFullYear()} Multiversers. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
