import styled, { ThemeContext } from "styled-components";
import Icon from "../icon/Icon";
import { useContext } from "react";

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  grid-template-columns: repeat(2, 20rem);

  @media (max-width: 819px) {
    grid-template-columns: repeat(1, 20rem);
  }
`;

const Box = styled.div`
  display: flex;
  width: 5rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  ${(props) => `border-right: 1px solid ${props.theme.colors.grey500}`}
`;

const BoxGroup = styled.div<{ left: boolean }>`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.left && `border-left: 1px solid ${props.theme.colors.grey500}`};

  @media (max-width: 819px) {
    ${(props) => `border-left: 1px solid ${props.theme.colors.grey500}`};
    ${(props) =>
      !props.left && `border-top: 1px solid ${props.theme.colors.grey500}`};
  }
`;

const Technologies = () => {
  const theme = useContext(ThemeContext)!;

  return (
    <Container>
      <BoxGroup id="Demos" left={true}>
        <Box>
          <Icon icon="sc" size="47px" />
        </Box>
        <Box>
          <Icon icon="mui" color={theme.colors.grey700} size="47px" />
        </Box>
        <Box>
          <Icon icon="react" color={theme.colors.grey700} size="47px" />
        </Box>
        <Box>
          <Icon icon="net" color={theme.colors.grey700} size="47px" />
        </Box>
      </BoxGroup>
      <BoxGroup left={false}>
        <Box>
          <Icon icon="express" color={theme.colors.grey700} size="47px" />
        </Box>
        <Box>
          <Icon icon="aws" color={theme.colors.grey700} size="47px" />
        </Box>
        <Box>
          <Icon icon="springboot" color={theme.colors.grey700} size="47px" />
        </Box>
        <Box>
          <Icon icon="docker" color={theme.colors.grey700} size="47px" />
        </Box>
      </BoxGroup>
    </Container>
  );
};

export default Technologies;
