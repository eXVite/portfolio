import styled from "styled-components";
import Icon from "../../icon/Icon";

const Container = styled.div<{ backgroundImage: string }>`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex: none;
  background-color: #f1f1f1;
  border-radius: 1rem;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors.baseText};
  cursor: pointer;
  background-image: ${(props) =>
    `url("/public/images/proyects/${props.backgroundImage}")`};
  background-position: center;
  background-size: cover;
  @media (max-width: 1045px) {
    width: 20rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding: 1.5rem;
  box-sizing: border-box;
`;

const ProyectsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0.3rem 2rem;
  border-radius: 3rem;
  background-color: ${(props) => props.theme.backgroundColors.darkBackGround};
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 3rem;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  gap: 1rem;
  background-color: rgba(0, 0, 0, 0.371);
  position: absolute;
  opacity: 0;
  padding: 1.25rem;
  border-radius: 1rem;
  transition: transform 0.25s ease-out, opacity 0.25s ease-out;
  height: 100%;
  width: 100%;

  &:hover {
    opacity: 1;
  }
`;

const Title = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xxl};
  font-weight: 700;
  line-height: 1;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.lightText};
  background-color: ${(props) => props.theme.colors.grey700};
  border-radius: 0.5rem;
`;

const Desc = styled.span`
  font-size: ${(props) => props.theme.fontSizes.s};
  line-height: calc(1.5 * ${(props) => props.theme.fontSizes.s});
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.lightText};
  background-color: ${(props) => props.theme.colors.grey700};
  border-radius: 0.5rem;
`;

interface ProyectCardProps {
  backgroundImage: string;
  title: string;
  description: string;
  icons: string[];
}

const FitPlannerCard = (props: ProyectCardProps) => {
  return (
    <Container backgroundImage={props.backgroundImage}>
      <DataContainer className="animationContainer">
        <Title>{props.title}</Title>
        <Desc>{props.description}</Desc>
      </DataContainer>
      <ContentWrapper>
        <ProyectsWrapper>
          {props.icons.map((icon) => (
            <IconWrapper>
              <Icon icon={icon} size="1.5rem" color={"black"} />
            </IconWrapper>
          ))}
        </ProyectsWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default FitPlannerCard;
