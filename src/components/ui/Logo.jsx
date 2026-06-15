import React from "react";

export const Logo = ({ className }) => {
  return (
    <div className={className}>
      <img src="/logo.png" alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
    </div>
  );
};

export default Logo;
