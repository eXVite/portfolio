import styled from "styled-components";
import { Description, Title } from "../CommonSC";
import { useTranslate } from "../../../hooks/useTranslate";
import ProyectCard from "./ProyectCard";

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

const ProyectsRow = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 0 7rem 3rem;

  @media (max-width: 800px) {
    padding: 0 3.5rem 2rem;
  }

  @media (max-width: 660px) {
    flex-direction: column;
    padding: 0 1.5rem 2rem;
  }
`;

const Proyects = () => {
  const { t } = useTranslate();

  return (
    <Container>
      <TitleDescContainer>
        <TitleContainer>
          <Title
            dangerouslySetInnerHTML={{
              __html: t("proyects_title", "Mis proyectos<span>.</span>"),
            }}
          />
        </TitleContainer>
        <DescContainer>
          <Description
            dangerouslySetInnerHTML={{
              __html: t(
                "proyects_desc",
                "Aquí tienes un vistazo a algunos <span>proyectos reales</span> en los que he trabajado. Desde inteligencia artificial aplicada hasta apps móviles, <b>cada uno refleja mi forma de resolver problemas.</b>"
              ),
            }}
          />
        </DescContainer>
      </TitleDescContainer>
      <ProyectsRow>
        <ProyectCard
          backgroundImage="nutriai_card.webp"
          description={t(
            "proyects_nutri_desc",
            "Portal web que genera dietas alimenticias personalizadas con inteligencia artificial y te permite guardarlas para seguir tu plan nutricional."
          )}
          title={t("proyects_nutri_title", "NutriAI")}
          icons={["react", "express", "aws", "net"]}
          status="live"
          statusLabel={t("proyects_status_live", "Online")}
          url="https://nutriai.joelware.com"
        />
        <ProyectCard
          backgroundImage="balance_card.webp"
          description={t(
            "proyects_balance_desc",
            "Aplicación web para llevar tus cuentas anuales, controlar ingresos y gastos y realizar simulaciones financieras."
          )}
          title={t("proyects_balance_title", "Yearly Balance")}
          icons={["react", "express", "aws"]}
          status="live"
          statusLabel={t("proyects_status_live", "Online")}
          url="https://balance.joelware.com"
        />
        <ProyectCard
          backgroundImage="calendar_card.webp"
          description={t(
            "proyects_calendar_desc",
            "App móvil minimalista tipo calendario para apuntar y gestionar tareas de forma simple e intuitiva."
          )}
          title={t("proyects_calendar_title", "Calendario")}
          icons={["react"]}
          status="dev"
          statusLabel={t("proyects_status_dev", "En desarrollo")}
        />
      </ProyectsRow>
    </Container>
  );
};

export default Proyects;
