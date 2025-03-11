import styled from "styled-components";
import { Title } from "./CommonSC";
import { useTranslate } from "../../hooks/useTranslate";

const Container = styled.div`
  padding: 2rem 7rem;
  gap: 3rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 666px) {
    padding: 2rem 0rem;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 666px) {
    justify-content: center;
    align-items: center;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 3rem;
`;

const Image = styled.img`
  height: 22rem;
  width: 15rem;
  padding: 0 1rem 1rem 0;
  background-color: ${(props) => props.theme.colors.grey200};
`;

const DescSpan = styled.span`
  width: 24rem;
  font-size: ${(props) => props.theme.fontSizes.m};
  line-height: ${(props) => props.theme.fontSizes.m};

  > span {
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary500};
  }
`;

const AboutMe = () => {
  const { t } = useTranslate();
  return (
    <Container>
      <TitleContainer>
        <Title
          dangerouslySetInnerHTML={{
            __html: t("about_me_title", "Sobre mi<span>.</span>"),
          }}
        />
      </TitleContainer>

      <ContentWrapper>
        <DescSpan
          dangerouslySetInnerHTML={{
            __html: t(
              "about_me_title",
              "Tego un prtfolio soy desarrollador de aplicaciones, en ese portfolio muestro proyectos mios mi foto mi stack tecnologico y el ultimo apartado es un apartado que habla sobre mi, quiero explicar que soy un desarrollador web full stack con mas de 4 años de experiencia profesional, con ganas de seguir aprendiendo, y abierto a cualquier proyecto de forma freelance, haz un texto que explique esto de forma legible y que no sea un toston<span>.</span>"
            ),
          }}
        />
        <Image src="/images/joel_about_me.webp" />
      </ContentWrapper>
    </Container>
  );
};

export default AboutMe;
