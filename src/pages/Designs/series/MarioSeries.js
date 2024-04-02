import React from 'react';
import { DESIGNS_ENUM } from '../designs-manifest';
import DesignSeries from '../DesignSeries';

const seriesDescription = (
  <span>
    This series takes me back to my early days with Adobe Illustrator, when I just started learning it.
    This project was instrumental in helping me grasp the fundamentals of Illustrator.
    Really liked how they turned out - after all who doesn&apos;t like Mario? 😬.
    The illustration style is inspired from <a href='https://www.instagram.com/madebyelvis' target='_blank' rel="noreferrer">madebyelvis</a>.
  </span>
);

function MarioSeries() {
  return (
    <DesignSeries
      heading='Mario'
      description={seriesDescription}
      seriesId={DESIGNS_ENUM.MARIO}
    />
  );
}

export default MarioSeries;
