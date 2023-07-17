import React from 'react';

export interface IImage extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

const Image: React.FC<IImage> = (props) => {
  const inputProps = { ...props };
  delete inputProps.className;

  return <img {...props} className={props.className} />;
};

export default Image;
