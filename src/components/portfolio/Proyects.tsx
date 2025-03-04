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
`;

const DescContainer = styled.div`
  max-width: 29rem;
`;

const TitleDescContainer = styled.div`
  display: flex;
  gap: 3rem;
  padding: 0 7rem;
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
`;

const ProyectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  box-sizing: border-box;
`;

const BigProyectItem = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 7rem;
`;

const SmallProyectItem = styled.div`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 4rem 0 7rem;
  padding-left: 7rem;
`;

const SmallProyectItem2 = styled.div`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 2;
  grid-row-end: 2;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 4rem 0 4rem 7rem;
  align-items: center;
`;

const Image = styled.img<{ height: string }>`
  height: ${(props) => props.height};
  border-radius: 1rem;
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
            <Image src="/images/proyects/dashboard.webp" height={"15rem"} />
          </SmallProyectItem>
          <SmallProyectItem2>
            {" "}
            <Image src="/images/proyects/landing.webp" height={"12rem"} />
          </SmallProyectItem2>
          <BigProyectItem>
            {" "}
            <Image src="/images/proyects/pizarra.webp" height={"15rem"} />
          </BigProyectItem>
        </ProyectsGrid>
      </ProyectsContainer>
    </Container>
  );
};

export default Proyects;
