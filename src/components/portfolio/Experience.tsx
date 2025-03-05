import styled, { ThemeContext } from "styled-components";
import { Title } from "./CommonSC";
import { useTranslate } from "../../hooks/useTranslate";
import useExperienceData from "../../hooks/useExperienceData";
import { useContext, useRef } from "react";

const Container = styled.div`
  padding: 2rem 7rem;
  gap: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  padding-left: 21rem;
  width: 100%;
`;

const TimeLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TimeLineItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 7rem;
  gap: 5rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: start;
  width: 13rem;
  flex: none;
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
  min-height: 7rem;

  border-radius: ${(props) =>
    props.type === TimeLineComponentType.Top
      ? "1rem 1rem 0 0"
      : props.type === TimeLineComponentType.Bottom
      ? "0 0 1rem 1rem"
      : 0};
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
  max-width: 20rem;

  > span {
    color: ${(props) => props.theme.colors.secondary500};
  }
`;

const Experience = () => {
  const { t } = useTranslate();
  const theme = useContext(ThemeContext)!;
  const { getExperienceData } = useExperienceData();
  const data = useRef(getExperienceData());

  return (
    <Container>
      <TitleContainer>
        <Title
          dangerouslySetInnerHTML={{
            __html: t("experience_title", "Experiencia<span>.</span>"),
          }}
        />
      </TitleContainer>
      <TimeLineContainer>
        {data.current.map((dataItem, index) => (
          <TimeLineItem key={dataItem.Title}>
            <InfoWrapper>
              <InfoTitle color={theme.colors.primary500}>
                {dataItem.Title}
              </InfoTitle>
              <InfoTitle color={theme.colors.baseText}>
                {dataItem.SubTitle}
              </InfoTitle>
              <DateSpan>{dataItem.Date}</DateSpan>
            </InfoWrapper>
            <TimeLineComponent
              type={
                index == 0
                  ? TimeLineComponentType.Top
                  : index == data.current.length - 1
                  ? TimeLineComponentType.Bottom
                  : TimeLineComponentType.Center
              }
            >
              <TimeLineDot />
            </TimeLineComponent>
            <DescSpan
              dangerouslySetInnerHTML={{
                __html: dataItem.Description,
              }}
            />
          </TimeLineItem>
        ))}
      </TimeLineContainer>
    </Container>
  );
};

export default Experience;
1;
