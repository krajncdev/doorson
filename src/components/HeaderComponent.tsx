import styled from 'styled-components';

import { Header } from './styles';
import DoorsonIcon from './assets/DoorsonIcon';

const LogoContainer = styled.div`
  width: 180px;
`;

const HeaderComponent = () => {
  return (
    <Header>
      <LogoContainer>
        <DoorsonIcon />
      </LogoContainer>
    </Header>
  );
};

export default HeaderComponent;
