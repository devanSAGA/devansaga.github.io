import React from 'react';
import { DESIGNS_ENUM } from '../designs-manifest';
import DesignSeries from '../DesignSeries';

const seriesDescription = (
  <span>
    This series is my take on the iconic characters from the Guardians of the Galaxy movie. Here, I&apos;ve tried experimenting with the line-art design.
  </span>
);

function GotgSeries() {
  return (
    <DesignSeries
      heading='Guardians of the Galaxy Series'
      description={seriesDescription}
      seriesId={DESIGNS_ENUM.GOTG}
      carouselConfig={{
        roundedCorners: true
      }}
    />
  );
}

export default GotgSeries;
