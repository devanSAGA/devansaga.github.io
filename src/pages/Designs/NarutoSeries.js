import React from 'react';
import styled from 'styled-components';
import PageContainer from '../../components/PageContainer/PageContainer';
import GaaraImgSrc from '../../assets/designs/naruto/Gaara.jpg';
import JiraiyaImgSrc from '../../assets/designs/naruto/Jiraiya.jpg';
import NejiImgSrc from '../../assets/designs/naruto/Neji.jpg';
import OrochimaruImgSrc from '../../assets/designs/naruto/Orochimaru.jpg';
import RockLeeImgSrc from '../../assets/designs/naruto/RockLee.jpg';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/keyboard';
import Carousel from './Carousel';

const NARUTO_DESIGNS = [
  {
    title: 'Gaara',
    src: GaaraImgSrc
  }, 
  {
    title: 'Neji',
    src: NejiImgSrc
  }, 
  {
    title: 'Jiraiya',
    src: JiraiyaImgSrc
  }, 
  {
    title: 'Orochimaru',
    src: OrochimaruImgSrc
  }, 
  {
    title: 'Rock Lee',
    src: RockLeeImgSrc
  }];

const Description = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme['font-size-s']};
  color: ${(props) => props.theme['content-color-primary']};
  line-height: 1.44;
  margin-bottom: 16px;
`;

function NarutoSeries() {
  return (
    <PageContainer title="Naruto" showBackButton>
      <Description>
        One of the things that I really like from Naruto is the striking character designs.
        In this series, I tried to capture the same and took a minimalist approach to design some of the iconic characters.
        I&apos;m really eager to grow this series further though!
      </Description>
      <Carousel slides={NARUTO_DESIGNS} />
    </PageContainer>
  );
}

export default NarutoSeries;
