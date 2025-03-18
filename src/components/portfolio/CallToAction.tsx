import styled from "styled-components";
import { Description, Title } from "./CommonSC";
import { useTranslate } from "../../hooks/useTranslate";

const Container = styled.div`
  padding: 2rem 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  @media (max-width: 950px) {
    padding: 2rem 2rem;
    box-sizing: border-box;
  }
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactButton = styled.div`
  background-color: ${(props) => props.theme.colors.primary500};
  border-radius: 0.5rem;
  border: none;
  height: 4rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  padding: 0 2rem;
  box-sizing: border-box;
  cursor: pointer;

  > span {
    font-size: ${(props) => props.theme.fontSizes.xl};
    color: ${(props) => props.theme.colors.white};
    font-weight: 600;
    line-height: 1;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.primary600};
  }

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;

const CallToAction = () => {
  const { t } = useTranslate();

  const handleContact = () => {
    window.open("mailto:joeliglesiasjimenez@gmail.com", "_blank");
  };

  return (
    <Container>
      <DataContainer>
        <Title
          light={true}
          dangerouslySetInnerHTML={{
            __html: t("cta_title", "¿Tienes una idea? <span>Hablemos.</span>"),
          }}
        />
        <Description
          light={true}
          dangerouslySetInnerHTML={{
            __html: t(
              "cta_desc",
              "¿Tienes en mente crear algún proyecto? 🚀 ¿Te ha gustado lo que has visto? 💡<br/> ¡Contáctame sin compromiso y hagámoslo realidad! ✨"
            ),
          }}
        />
      </DataContainer>
      <ContactButton onClick={handleContact}>
        <span>{t("cta_button", "¡Contáctame! 📩🚀")}</span>
      </ContactButton>
    </Container>
  );
};

export default CallToAction;
