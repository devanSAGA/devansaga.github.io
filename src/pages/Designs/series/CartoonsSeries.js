import React from 'react';
import { DESIGNS_ENUM } from '../designs-manifest';
import DesignSeries from '../DesignSeries';

const seriesDescription = (
  <span>
    In this series I have captured some of my all-time favourite cartoons. With each show I have tried experimenting a different design style.
  </span>
);

function CartoonsSeries() {
  return (
    <DesignSeries
      heading='Nostalgic Cartoons'
      description={seriesDescription}
      seriesId={DESIGNS_ENUM.CARTOONS}
      carouselConfig={{
        roundedCorners: true
      }}
    />
  );
}

export default CartoonsSeries;
