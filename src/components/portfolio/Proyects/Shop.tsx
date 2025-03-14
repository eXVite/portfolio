import styled from "styled-components";
import Icon from "../../icon/Icon";
import { useTranslate } from "../../../hooks/useTranslate";

const Container = styled.div`
  height: 9.5rem;
  display: flex;
  flex: none;
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors.baseText};

  > span {
    font-size: ${(props) => props.theme.fontSizes.xxl};
    font-weight: 700;
    line-height: 1;
  }
  @media (max-width: 1045px) {
    width: 20rem;
  }
`;

const ProyectsWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const IconWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 3rem;
`;

const ShopCard = () => {
  const { t } = useTranslate();

  return (
    <Container>
      <span>{t("proyects_fit_title", "Shop schema")}</span>
      <ProyectsWrapper>
        <IconWrapper2>
          <Icon icon="react" size="1.5rem" />
        </IconWrapper2>
        <IconWrapper2>
          <Icon icon="net" size="1.5rem" />
        </IconWrapper2>
      </ProyectsWrapper>
    </Container>
  );
};

export default ShopCard;
