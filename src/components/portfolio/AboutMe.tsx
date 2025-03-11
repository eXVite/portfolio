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
              "¡Hola! 👋 Soy un <span>desarrollador web Full Stack</span> con más de <span>4 años de experiencia profesional</span> en el sector. Me apasiona el mundo del desarrollo y el <span>aprendizaje continuo</span>. Me describiría como alguien enfocado en <span>hacer las cosas bien</span>, siempre buscando la mejor solución para cada proyecto.<br/><br/>📌 Actualmente, estoy dedicando tiempo a <span>mis proyectos personales</span> mientras trabajo, con el objetivo de <span>seguir mejorando</span> en todos los aspectos y ofrecer <span>servicios de mayor calidad</span>.<br/><br/>💻 Tengo experiencia en <span>todo tipo de aplicaciones</span>: desde <span>plataformas online con alto tráfico</span> e <span>interacciones en tiempo real</span>, incluyendo <span>integraciones con IA</span>, hasta <span>sistemas de gestión interna</span> para empresas.<br/><br/>🚀 Siempre estoy abierto a <span>nuevos retos y proyectos freelance</span>. Si tienes una idea en mente, <span>¡hablemos!</span>"
            ),
          }}
        />
        <Image src="/images/joel_about_me.webp" />
      </ContentWrapper>
    </Container>
  );
};

export default AboutMe;
