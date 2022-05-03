import React from 'react';
import styled from 'styled-components';
import Link from '../components/Link/Link';
import PageContainer from '../components/PageContainer/PageContainer';

const INSTAGRAM_LINK = "https://www.instagram.com/_devansaga_/";

const PageText = styled.p`
  width: 100%;
  text-align: left;
  color: #686868;
  font-size: 2rem;
  line-height: 1.5;
  margin: 32px auto;
`;

function Designs() {
  return (
    <PageContainer title="Designs">
      <PageText>
        I am adding my designs here very soon! Meanwhile you can check them on my <Link to={INSTAGRAM_LINK}>Instagram</Link>.
      </PageText>
    </PageContainer>
  );
}

export default Designs;