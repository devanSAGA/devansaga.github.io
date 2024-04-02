import React from 'react';
import { DESIGNS_ENUM } from '../designs-manifest';
import DesignSeries from '../DesignSeries';

const seriesDescription = (
  <span>
    One of my absolute favourite account on internet is <a href='https://www.instagram.com/aksharpathak/' target='_blank' rel="noreferrer">Akshar Pathak</a>.
    His designs and Instagram posts have been a huge inspiration for me, which has influenced many of my own creations as well.
    In particular, his famous <a href='https://www.coroflot.com/aksharpathak/Minimal-Bollywood-Posters' target='_blank' rel="noreferrer">Minimalist Bollywood Posters</a> project.
    Inspired by his series, I have also attempted crafting minimalist posters for some of the iconic Bollywood films.
  </span>
);

function MBPSeries() {
  return (
    <DesignSeries
      heading='Minimalist Bollywood Posters'
      description={seriesDescription}
      seriesId={DESIGNS_ENUM.MINIMALIST_BOLLYWOOD_POSTERS}
    />
  );
}

export default MBPSeries;
