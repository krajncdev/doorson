import { Flex } from './styles/Flex.styled';
import { Container as StyledContainer } from './styles';

interface IContainerProps {
  children: any;
}

const Container = (props: IContainerProps) => {
  return (
    <Flex>
      <StyledContainer>{props.children}</StyledContainer>
    </Flex>
  );
};

export default Container;
