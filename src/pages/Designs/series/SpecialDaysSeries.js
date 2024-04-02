import React from 'react';
import { DESIGNS_ENUM } from '../designs-manifest';
import DesignSeries from '../DesignSeries';

const seriesDescription = (
  <span>
    Special posters for special days!
  </span>
);

function SpecialDaysSeries() {
  return (
    <DesignSeries
      heading='Special Days'
      description={seriesDescription}
      seriesId={DESIGNS_ENUM.SPECIAL_DAYS}
      carouselConfig={{
        roundedCorners: true
      }}
    />
  );
}

export default SpecialDaysSeries;
