import styled from "styled-components";
import { Description, Title } from "./CommonSC";
import { useTranslate } from "../../hooks/useTranslate";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 4rem;
`;

const TitleContainer = styled.div`
  max-width: 11rem;
  display: flex;
`;

const DescContainer = styled.div`
  max-width: 29rem;
`;

const TitleDescContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

const ProyectsContainer = styled.div`
  width: 100%;
  height: 300px;
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
      <ProyectsContainer></ProyectsContainer>
    </Container>
  );
};

export default Proyects;
