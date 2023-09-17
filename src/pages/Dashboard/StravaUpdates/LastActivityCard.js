import styled from 'styled-components';
import DashboardCard from "../../../components/DashboardCards/DashboardCard";

const LastActivityCard = styled(DashboardCard)`
  position: relative;
  grid-row: 1 / 3;

  @media (min-width: 469px) and (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }

  @media (max-width: 468px) {
    height: 400px;
  }
`;

export default LastActivityCard;