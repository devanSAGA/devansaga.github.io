import React from 'react';
import styled from 'styled-components';

import Carousel from './Carousel';
import PageContainer from '../../components/PageContainer/PageContainer';
import { DESIGNS_MANIFEST } from './designs-manifest';

const Description = styled.p`
  margin: 0;
  color: ${(props) => props.theme['content-color-primary']};
  font-size: ${(props) => props.theme['font-size-s']};
  line-height: 1.44;
  margin-top: 32px;
  margin-bottom: 16px;

  a {
    color: ${(props) => props.theme['content-color-link']};
  }
`;

export default function DesignSeries(props) {
  const {
    heading,
    subHeading,
    description,
    seriesId,
    carouselConfig
  } = props;

  return (
    <PageContainer title={heading} subHeading={subHeading} showBackButton>
      <Description>{description}</Description>
      <Carousel
        slides={DESIGNS_MANIFEST[seriesId].designs}
        slideDimensions={DESIGNS_MANIFEST[seriesId].dimensions}
        carouselConfig={carouselConfig}
      />
    </PageContainer>
  );
}