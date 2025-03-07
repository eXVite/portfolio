import styled from "styled-components";
import { Description, Title } from "./CommonSC";
import { useTranslate } from "../../hooks/useTranslate";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 0 0 0;
`;

const TitleContainer = styled.div`
  max-width: 11rem;
  display: flex;
  @media (max-width: 1250px) {
    max-width: fit-content;
  }
`;

const DescContainer = styled.div`
  max-width: 29rem;
`;

const TitleDescContainer = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  padding: 0 7rem;
  @media (max-width: 1250px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    text-align: center;
    padding: 0 3.5rem;
  }
`;

const ProyectsContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(
      0deg,
      transparent 95%,
      ${(props) => props.theme.colors.secondary500}80 95%
    ),
    linear-gradient(
      90deg,
      transparent 95%,
      ${(props) => props.theme.colors.secondary500}80 95%
    );
  background-size: 25px 25px;
  background-position: -8.5px -8.5px; /* Ajusta la posición para eliminar bordes */
  padding: 4rem;
  box-sizing: border-box;

  @media (max-width: 660px) {
    padding: 2rem;
  }
`;

const ProyectsGrid = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 1500px) {
    flex-direction: column;
  }
`;

const BigProyectItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1500px) {
    > img {
      max-height: 15rem;
    }
  }

  @media (max-width: 820px) {
    > img {
      max-height: 8rem;
    }
  }
`;

const SmallProyectItem = styled.div`
  gap: 3rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 1500px) {
    > img {
      max-height: 15rem;
    }
  }
  @media (max-width: 820px) {
    > img {
      max-height: 8rem;
    }
  }
`;

const Image = styled.img<{ height: string }>`
  height: ${(props) => props.height};
  border-radius: 1rem;
  border: 2px solid ${(props) => props.theme.colors.baseText};
`;

const Proyects = () => {
  const { t } = useTranslate();

  return (
    <Container>
      <TitleDescContainer>
        <TitleContainer>
          <Title
            dangerouslySetInnerHTML={{
              __html: t("proyects_title", "Expositor de demos<span>.</span>"),
            }}
          />
        </TitleContainer>
        <DescContainer>
          <Description
            dangerouslySetInnerHTML={{
              __html: t(
                "proyects_desc",
                "He creado un pequeño sitio para exponer algunos <span>proyectos y demos</span> que he desarrollado a lo largo de mi trayectoria profesional,  mostrando así una parte de lo que soy capaz de hacer. Como dice el dicho, <b>¡una imagen vale más que mil palabras!</b>"
              ),
            }}
          />
        </DescContainer>
      </TitleDescContainer>
      <ProyectsContainer>
        <ProyectsGrid>
          <SmallProyectItem>
            <Image
              alt="Proyect image1"
              src="/images/proyects/dashboard.webp"
              height={"100%"}
            />
            <Image
              alt="Proyect image2"
              src="/images/proyects/landing.webp"
              height={"12rem"}
            />
          </SmallProyectItem>
          <BigProyectItem>
            <Image
              alt="Proyect image3"
              src="/images/proyects/pizarra.webp"
              height={"15rem"}
            />
          </BigProyectItem>
        </ProyectsGrid>
      </ProyectsContainer>
    </Container>
  );
};

export default Proyects;
