import styled, { ThemeContext } from "styled-components";
import Icon from "../icon/Icon";
import { useContext } from "react";

const Container = styled.div`
  border: 1.5px solid ${(props) => props.theme.colors.primary100};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 2rem;
  gap: 0.25rem;
  height: 1.25rem;
  box-sizing: border-box;
  background: rgb(13, 110, 253);
  background: linear-gradient(
    90deg,
    rgba(13, 110, 253, 0.2) 20%,
    rgba(255, 255, 255, 1) 50%,
    rgba(13, 110, 253, 0.19663280229476487) 80%
  );
  cursor: pointer;
`;

const Text = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xxs};
  line-height: ${(props) => props.theme.fontSizes.xxs};
  max-width: 20rem;
  text-align: center;
  font-weight: 600;
  color: ${(props) => props.theme.colors.grey600};
  span {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

interface PillProps {
  text: string;
  icon: string;
  size: string;
}

const Pill = (props: PillProps) => {
  const theme = useContext(ThemeContext)!;

  return (
    <Container>
      <Icon icon={props.icon} color={theme.colors.grey700} size={props.size} />
      <Text>{props.text}</Text>
    </Container>
  );
};

export default Pill;
