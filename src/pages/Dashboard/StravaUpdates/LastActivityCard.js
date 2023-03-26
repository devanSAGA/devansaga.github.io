import styled from 'styled-components';
import DashboardCard from "../../../components/DashboardCards/DashboardCard";

const LastActivityCard = styled(DashboardCard)`
  grid-row: 1 / 3;
  @media (min-width: 469px) and (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
`;

export default LastActivityCard;