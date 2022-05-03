import React from 'react';
import styled from 'styled-components';
import Emoji from '../components/Emoji/Emoji';
import PageContainer from '../components/PageContainer/PageContainer';

const CARD_PALLETES = {
  strava: {
    backgroundColor: '#FFD1BE',
    primaryContentColor: '#E05320',
    secondaryContentColor: '#212121',
    tertiaryContentColor: '#A6A6A6',
    borderColor: '#E05320'
  },
  default: {
    backgroundColor: '#EDEDED',
    primaryContentColor: '#212121',
    secondaryContentColor: '#6B6B6B',
    borderColor: '#212121'
  }
};

const DashboardCardsList = styled.div`
  margin-top: 32px;
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 32px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  height: 200px;
`;

const DashboardCard = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 16px;
  background-color: ${(props) => props.pallete.backgroundColor};
  grid-column-start: span 1;
  grid-column-end: span 1;
  grid-row-start: span 1;
  grid-row-end: span 1;

  & .dashboard-card__emoji {
    font-size: 4.8rem;
    align-self: flex-end;
  }
`;

const DadshboardCardContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  h2 {
    font-size: 1.6rem;
    font-weight: 600;
    color: ${(props) => props.pallete.secondaryContentColor};
    margin-bottom: 16px;
  }

  span {
    font-size: 3.2rem;
    font-weight: 600;
    color: ${(props) => props.pallete.primaryContentColor};;
  }

  .dashboard-card__container--empty-state-message {
    font-size: 2.4rem;
    font-weight: 600;
  }
`;

export default function Dashboard() {
  return (
    <PageContainer title="Dashboard">
      <DashboardCardsList>
        <DashboardCard className='dashboard-card' pallete={CARD_PALLETES.strava}>
          <DadshboardCardContainer className='dashboard-card__container' pallete={CARD_PALLETES.strava}>
            <h2>Walking/Running in 2022</h2>
            <span>272km</span> 
          </DadshboardCardContainer>
          <Emoji ariaLabel="running-man" emoji="🏃" className="dashboard-card__emoji"/>
        </DashboardCard>
        <DashboardCard className='dashboard-card' pallete={CARD_PALLETES.strava}>
          <DadshboardCardContainer className='dashboard-card__container' pallete={CARD_PALLETES.strava}>
            <h2>Cycling in 2022</h2>
            <span>250km</span> 
          </DadshboardCardContainer>
          <Emoji ariaLabel="walking-man" emoji="🚴‍♂️" className="dashboard-card__emoji"/>
        </DashboardCard>
        <DashboardCard className='dashboard-card' pallete={CARD_PALLETES.default}>
          <DadshboardCardContainer className='dashboard-card__container' pallete={CARD_PALLETES.default}>
            <h2 className='dashboard-card__container--empty-state-message'>More coming soon...</h2>
          </DadshboardCardContainer>
        </DashboardCard>
      </DashboardCardsList>
    </PageContainer>
  );
}