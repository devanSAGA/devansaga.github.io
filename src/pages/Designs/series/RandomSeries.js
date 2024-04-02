import React from 'react';
import { DESIGNS_ENUM } from '../designs-manifest';
import DesignSeries from '../DesignSeries';

const seriesDescription = (
  <span>
    Bunch of designs with no specific theme
  </span>
);

function RandomSeries() {
  return (
    <DesignSeries
      heading='Miscellaneous Posters'
      description={seriesDescription}
      seriesId={DESIGNS_ENUM.RANDOM}
    />
  );
}

export default RandomSeries;
