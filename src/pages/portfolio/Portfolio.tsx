import styled from "styled-components";
import { useTranslate } from "../../hooks/useTranslate";

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColors.baseBackGround};

  @media (max-width: 1380px) {
    flex-direction: column;
  }
`;

const Portfolio = () => {
  const { t } = useTranslate();

  return <Container>{t("hello_world", "Holaaa")}</Container>;
};

export default Portfolio;
