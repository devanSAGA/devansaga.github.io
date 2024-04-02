import React from 'react';
import { DESIGNS_ENUM } from '../designs-manifest';
import DesignSeries from '../DesignSeries';

function MothersDaySeries() {
  return (
    <DesignSeries
      heading="Mother's Day Special"
      description={null}
      seriesId={DESIGNS_ENUM.MOTHERS_DAY}
      carouselConfig={{
        roundedCorners: true,
        startFromBeginning: true
      }}
    />
  );
}

export default MothersDaySeries;
