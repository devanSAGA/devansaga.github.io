import React from 'react';
import { DESIGNS_ENUM } from '../designs-manifest';
import DesignSeries from '../DesignSeries';

const seriesDescription = (
  <span>
    Topical-ish is a collection where each design is sparked by a specific news/event.
    Here I have tried to convey the essence of the news with a touch of creativity and humor.
  </span>
);

function TopicalishSeries() {
  return (
    <DesignSeries
      heading='Topical-ish Posters'
      description={seriesDescription}
      seriesId={DESIGNS_ENUM.TOPICALISH}
      carouselConfig={{
        roundedCorners: true
      }}
    />
  );
}

export default TopicalishSeries;
