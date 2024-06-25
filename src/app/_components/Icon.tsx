interface IconProps {
  width: number;
  height: number;
  viewBox: string;
  path: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  width,
  height,
  viewBox,
  path,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} fill="none" />
    </svg>
  );
};

export default Icon;


//jsx version
// import React from 'react';

// const Icon = ({ width, height, viewBox, path, className }) => {
//   return (
//     <svg width={width} height={height} viewBox={viewBox} className={className} xmlns="http://www.w3.org/2000/svg">
//       <path d={path} fill="none" />
//     </svg>
//   );
// };

// export default Icon;