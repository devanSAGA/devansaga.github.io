import React from 'react';

function ExternalLinkIcon(props) {
  const { height = 16, width = 16 } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.31909 5H11.3191V10H10.3191V6.70704L5.70711 11.3191L5 10.612L9.61192 6H6.31909V5Z'
        fill='#A6A6A6'
      />
    </svg>
  );
};

export default ExternalLinkIcon;