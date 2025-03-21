import styled from "styled-components";
import { useTranslate } from "../../hooks/useTranslate";
import LanguageToggleButton from "../buttons/LanguageToggleButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
`;

const HeaderWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0 0 7px 0 rgb(255 255 255 / 85%);

  @media (max-width: 500px) {
    gap: 1rem;
  }

  @media (max-width: 375px) {
    padding: 0.5rem 1rem;
    gap: 0.5rem;
  }
`;

const HeaderItem = styled.a`
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.s};
  text-decoration: none;
  color: ${(props) => props.theme.colors.baseText};
`;

const Header = () => {
  const { t } = useTranslate();
  const ITEMS = [
    { name: t("header_demos", "Demoos"), href: "Demos" },
    { name: t("header_experiencia", "Experiencia"), href: "Experiencia" },
    { name: t("header_sobre_mi", "Sobre mi"), href: "Sobremi" },
  ];

  return (
    <Container>
      <HeaderWrapper>
        {ITEMS.map((item) => (
          <HeaderItem key={item.name} href={`#${item.href}`}>
            {item.name}
          </HeaderItem>
        ))}
        <HeaderItem>
          test
          <LanguageToggleButton />
        </HeaderItem>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
