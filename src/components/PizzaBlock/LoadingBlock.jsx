import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="140" cy="126" r="110" />
      <rect x="0" y="265" rx="0" ry="0" width="280" height="23" />
      <rect x="0" y="299" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="401" rx="0" ry="0" width="76" height="30" />
      <rect x="164" y="397" rx="20" ry="20" width="111" height="42" />
    </ContentLoader>
  );
}

export default LoadingBlock;
