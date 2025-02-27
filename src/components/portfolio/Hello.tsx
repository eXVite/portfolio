import styled from "styled-components";
import { useTranslate } from "../../hooks/useTranslate";
import Pill from "../pill/Pill";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 7rem);
  gap: 0.5rem;
`;

const Image = styled.img`
  height: 6rem;
  width: 6rem;
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

const Hello = () => {
  const { t } = useTranslate();

  return (
    <Container>
      <Image />
      <Title
        dangerouslySetInnerHTML={{
          __html: t("hello_title", "Hola, <b>soy Joel</b>"),
        }}
      />
      <Desc
        dangerouslySetInnerHTML={{
          __html: t(
            "hello_desc",
            "+4 años de experiencia en <span>desarrollo</span> web. Especializado en aplicaciones web potentes y escalables. 🚀>"
          ),
        }}
      />
      <PillsContainer>
        <Pill text="Linkedin" icon="linkedin" size="10px" />
        <Pill text="Github" icon="github" size="13px" />
        <Pill text="Joeliglesiasjimenez@gmail.com" icon="gmail" size="10px" />
      </PillsContainer>
    </Container>
  );
};

export default Hello;
