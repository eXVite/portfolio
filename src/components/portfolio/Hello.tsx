import styled, { keyframes } from "styled-components";
import { useTranslate } from "../../hooks/useTranslate";
import Pill from "../pill/Pill";
import Icon from "../icon/Icon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 12.1rem);
  min-height: 30rem;
  padding-top: 20vh;
  gap: 0.5rem;
  box-sizing: border-box;
  position: relative;
`;

const Image = styled.img`
  height: 10rem;
  width: 10rem;
  background-color: grey;
  border-radius: 6rem;
`;

const Title = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 1000;

  b {
    font-weight: 1000;
    color: ${(props) => props.theme.colors.primary500};
  }
`;

const Desc = styled.span`
  font-size: ${(props) => props.theme.fontSizes.m};
  max-width: 20rem;
  text-align: center;
  span {
    color: ${(props) => props.theme.colors.secondary500};
  }
`;

const PillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const bubbleFloat = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

const BottomArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 3vh;
  animation: ${bubbleFloat} 4s ease-in-out infinite;
`;

const Hello = () => {
  const { t } = useTranslate();

  return (
    <Container>
      <Image alt="Imagen personal" src="/images/joel_hello.webp" />
      <Title
        dangerouslySetInnerHTML={{
          __html: t("hello_title", "Hola, <b>soy Joel</b>"),
        }}
      />
      <Desc
        dangerouslySetInnerHTML={{
          __html: t(
            "hello_desc",
            "+4 años de experiencia en <span>desarrollo</span> web. Especializado en aplicaciones web potentes y escalables. 🚀"
          ),
        }}
      />
      <PillsContainer>
        <Pill text="Linkedin" icon="linkedin" size="10px" />
        <Pill text="Github" icon="github" size="13px" />
        <Pill text="Joeliglesiasjimenez@gmail.com" icon="gmail" size="10px" />
      </PillsContainer>
      <BottomArrowContainer>
        <Icon icon="demos" />
        <Icon icon="arrow" />
      </BottomArrowContainer>
    </Container>
  );
};

export default Hello;
