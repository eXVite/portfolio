import styled, { ThemeContext } from "styled-components";
import { Title } from "./CommonSC";
import { useTranslate } from "../../hooks/useTranslate";
import useExperienceData from "../../hooks/useExperienceData";
import { useContext } from "react";

const Container = styled.div`
  padding: 2rem 7rem;
  gap: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 666px) {
    padding: 2rem 2rem;
    box-sizing: border-box;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 666px) {
    justify-content: center;
    align-items: center;
  }
`;

const TimeLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
`;

const TimeLineItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 8rem;
  height: 100%;
  gap: 2rem;

  @media (max-width: 1100px) {
    gap: 1rem;
  }

  @media (max-width: 870px) {
    min-height: 12rem;
  }
  @media (max-width: 800px) {
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  width: 47rem;
  border-radius: 1rem;
  box-shadow: 0 0 7px 0 rgb(0 0 0 / 24%);

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const InfoTitle = styled.span<{ color: string }>`
  font-size: ${(props) => props.theme.fontSizes.l};
  line-height: ${(props) => props.theme.fontSizes.l};
  color: ${(props) => props.color};
  font-weight: 700;
`;

const DateSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.s};
  line-height: ${(props) => props.theme.fontSizes.s};
  font-weight: 500;
`;

enum TimeLineComponentType {
  Top,
  Center,
  Bottom,
}

const TimeLineComponent = styled.div<{ type: TimeLineComponentType }>`
  background-color: ${(props) => props.theme.colors.primary200};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.625rem;
  flex: none;
  height: 100%;
  min-height: 10rem;

  border-radius: ${(props) =>
    props.type === TimeLineComponentType.Top
      ? "1rem 1rem 0 0"
      : props.type === TimeLineComponentType.Bottom
      ? "0 0 1rem 1rem"
      : 0};

  @media (max-width: 870px) {
    min-height: 13rem;
  }
`;

const TimeLineDot = styled.div`
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.colors.primary400};
`;

const DescSpan = styled.span`
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.s};
  line-height: ${(props) => props.theme.fontSizes.s};

  > span {
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary500};
  }
`;

const Experience = () => {
  const { t } = useTranslate();
  const theme = useContext(ThemeContext)!;
  const { experienceData } = useExperienceData();

  return (
    <Container id="Experiencia">
      <TitleContainer>
        <Title
          dangerouslySetInnerHTML={{
            __html: t("experience_title", "Experiencia laboral<span>.</span>"),
          }}
        />
      </TitleContainer>
      <TimeLineContainer>
        {experienceData.map((dataItem, index) => (
          <TimeLineItem key={dataItem.Description}>
            <TimeLineComponent
              type={
                index == 0
                  ? TimeLineComponentType.Top
                  : index == experienceData.length - 1
                  ? TimeLineComponentType.Bottom
                  : TimeLineComponentType.Center
              }
            >
              <TimeLineDot />
            </TimeLineComponent>
            <InfoWrapper>
              <InfoTitle color={theme.colors.primary500}>
                {dataItem.Title}
              </InfoTitle>
              <InfoTitle color={theme.colors.baseText}>
                {dataItem.SubTitle}
              </InfoTitle>
              <DateSpan>{dataItem.Date}</DateSpan>
              <DescSpan
                dangerouslySetInnerHTML={{
                  __html: dataItem.Description,
                }}
              />
            </InfoWrapper>
          </TimeLineItem>
        ))}
      </TimeLineContainer>
    </Container>
  );
};

export default Experience;
1;
