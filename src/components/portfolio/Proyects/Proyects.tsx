import styled, { ThemeContext } from "styled-components";
import { Description, Title } from "../CommonSC";
import { useTranslate } from "../../../hooks/useTranslate";
import Icon from "../../icon/Icon";
import { useContext } from "react";
import WhiteboardCard from "./WhiteboardCard";
import FitPlannerCard from "./ProyectCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 0 0 0;
`;

const TitleContainer = styled.div`
  max-width: 11rem;
  display: flex;

  @media (max-width: 1200px) {
    max-width: fit-content;
  }
`;

const DescContainer = styled.div`
  max-width: 29rem;
`;

const TitleDescContainer = styled.div`
  display: flex;
  gap: 3rem;
  padding: 0 7rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 800px) {
    padding: 0 3.5rem;
  }
`;

const ProyectsContainer = styled.div`
  width: 100%;
  padding: 4rem;
  padding-top: 0rem;
  justify-content: center;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  @media (max-width: 660px) {
    padding: 2rem 1rem;
  }
`;

const ProyectsGrid = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 46rem;
  height: 20rem;
  box-sizing: border-box;

  @media (max-width: 1045px) {
    flex-direction: column-reverse;
    height: min-content;
    width: 20rem;
  }
`;

const LeftColumnGrid = styled.div`
  width: 35rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 1045px) {
    width: 20rem;
  }
`;

const RightColumnGrid = styled.div`
  width: 25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 1045px) {
    width: 20rem;
  }
`;

const OpenButton = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary500};
  border-radius: 0.5rem;
  border: none;
  height: 3rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  padding: 0 0.5rem;
  box-sizing: border-box;
  cursor: pointer;

  > span {
    font-size: ${(props) => props.theme.fontSizes.l};
    color: ${(props) => props.theme.colors.white};
    font-weight: 600;
    line-height: 1;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.primary600};
  }
`;

const CardWrapper = styled.div`
  height: 9.5rem;
`;

const Proyects = () => {
  const theme = useContext(ThemeContext)!;
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
          <LeftColumnGrid>
            <WhiteboardCard />
            <OpenButton>
              <span>{t("proyects_open", "Explora mis proyectos!")}</span>
              <Icon
                icon="new-window"
                size="1.5rem"
                color={theme.colors.white}
              />
            </OpenButton>
          </LeftColumnGrid>
          <RightColumnGrid>
            <CardWrapper>
              <FitPlannerCard
                backgroundImage="landing.webp"
                description={t(
                  "proyects_shop_desc",
                  "Tienda online totalmente funcional."
                )}
                title={t("proyects_shop_title", "Shop")}
                icons={["react", "net"]}
              />
            </CardWrapper>
            <CardWrapper>
              <FitPlannerCard
                backgroundImage="dashboard.webp"
                description={t(
                  "proyects_fit_desc",
                  "Planifica tus rutinas y dietas con inteligencia artificial."
                )}
                title={t("proyects_fit_title", "Fit planner")}
                icons={["react", "springboot", "express"]}
              />
            </CardWrapper>
          </RightColumnGrid>
        </ProyectsGrid>
      </ProyectsContainer>
    </Container>
  );
};

export default Proyects;
