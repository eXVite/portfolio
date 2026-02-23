import styled from "styled-components";
import { Title } from "./CommonSC";
import { useTranslate } from "../../hooks/useTranslate";

const Container = styled.div`
  padding: 2rem 7rem;
  gap: 3rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    padding: 2rem 3rem;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const DescSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.m};
  line-height: calc(${(props) => props.theme.fontSizes.m} * 1.5);

  > span {
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary500};
  }

  @media (max-width: 1300px) {
    width: 100%;
  }
`;

const AboutMe = () => {
  const { t } = useTranslate();
  return (
    <Container id="Sobremi">
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
              "about_me_desc",
              "¡Hola! 👋 Soy un <span>desarrollador web Full Stack</span> con más de <span>4 años de experiencia profesional</span> en el sector. Me apasiona el mundo del desarrollo y el aprendizaje continuo. Me describiría como alguien enfocado en hacer las cosas bien, siempre buscando la mejor solución para cada proyecto.<br/><br/>📌 Actualmente, estoy dedicando tiempo a <span>mis proyectos personales</span> mientras trabajo, con el objetivo de seguir mejorando en todos los aspectos y ofrecer <span>servicios de mayor calidad</span>.<br/><br/>💻 Tengo experiencia en <span>todo tipo de aplicaciones</span>: desde plataformas online con <span>alto tráfico</span> e <span>interacciones en tiempo real</span>, hasta sistemas de <span>gestión interna</span> para <span>empresas</span>.<br/><br/>🚀 Siempre estoy abierto a <span>nuevos retos</span> y <span>proyectos freelance</span>. Si tienes una <span>idea</span> en mente, <span>¡hablemos!</span>"
            ),
          }}
        />
      </ContentWrapper>
    </Container>
  );
};

export default AboutMe;
