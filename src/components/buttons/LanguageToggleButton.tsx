import styled from "styled-components";
import { useTranslate } from "../../hooks/useTranslate";

const Button = styled.button<{ leftSide: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 4rem;
  flex: none;
  height: 1.75rem;
  padding: 0.5rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  background: ${(props) => props.theme.colors.grey100};
  position: relative;
  flex-wrap: nowrap;
  justify-content: ${(props) => (props.leftSide ? "left" : "right")};
`;

const ToggleCircle = styled.div<{ isEnglish: boolean }>`
  width: 1.25rem;
  height: 1.25rem;
  background: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  background: ${(props) =>
    `url(/images/flags/${props.isEnglish ? "en" : "es"}.svg)`};
  background-position: center;
  background-size: cover;
  left: ${({ isEnglish }) => (isEnglish ? "calc(100% - 30px)" : "9px")};
  transform: translateY(-50%);
  transition: left 0.3s ease;
`;

const LabelLanguage = styled.span`
  font-size: ${(props) => props.theme.fontSizes.s};
  color: ${(props) => props.theme.colors.baseText};
  font-weight: 600;
`;

const LanguageToggleButton = () => {
  const { toggleLanguage, getLanguage } = useTranslate();

  return (
    <Button leftSide={getLanguage() === "en"} onClick={() => toggleLanguage()}>
      <LabelLanguage>{getLanguage()?.toUpperCase()}</LabelLanguage>
      <ToggleCircle isEnglish={getLanguage() === "en"} />
    </Button>
  );
};

export default LanguageToggleButton;
