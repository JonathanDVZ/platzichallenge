import React from "react";

const Image: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img {...props} className="ptz-img" />
);

export default Image;
