import React from 'react';
import { DESIGNS_ENUM } from '../designs-manifest';
import DesignSeries from '../DesignSeries';

const seriesDescription = (
  <span>
    One of the things that I really like from Naruto is the striking character designs.
    In this series, I tried to capture the same and took a minimalist approach to design some of the iconic characters.
    I&apos;m really eager to grow this series further though!
  </span>
);

function NarutoSeries() {
  return (
    <DesignSeries
      heading='Naruto'
      description={seriesDescription}
      seriesId={DESIGNS_ENUM.NARUTO}
    />
  );
}

export default NarutoSeries;
