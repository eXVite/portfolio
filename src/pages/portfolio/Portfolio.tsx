import styled from "styled-components";
import Header from "../../components/portfolio/Header";
import Hello from "../../components/portfolio/Hello";
import Technologies from "../../components/portfolio/Technologies";
import Proyects from "../../components/portfolio/Proyects/Proyects";
import Experience from "../../components/portfolio/Experience";
import AboutMe from "../../components/portfolio/AboutMe";
import CallToAction from "../../components/portfolio/CallToAction";

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColors.baseBackGround};
  display: flex;
  flex-direction: column;
`;

const HorizontalLineWrapper = styled.div<{ dark?: boolean }>`
  width: 100%;
  border-bottom: 1px solid
    ${(props) =>
      props.dark ? props.theme.colors.black : props.theme.colors.grey500};
  background-color: ${(props) =>
    props.dark
      ? props.theme.backgroundColors.darkBackGround
      : props.theme.backgroundColors.baseBackGround};
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 70rem;
    box-sizing: border-box;
    border: 1px solid
      ${(props) =>
        props.dark ? props.theme.colors.black : props.theme.colors.grey500};
    border-top: none;
    border-bottom: none;
  }

  @media (max-width: 1200px) {
    > div {
      margin: 0 7.5rem;
    }
  }

  @media (max-width: 1200px) {
    > div {
      margin: 0 5rem;
    }
  }

  @media (max-width: 603px) {
    > div {
      margin: 0 1rem;
    }
  }

  @media (max-width: 400px) {
    > div {
      margin: 0;
    }
  }
`;

const Portfolio = () => {
  return (
    <Container>
      <header>
        <HorizontalLineWrapper dark={true}>
          <Header />
        </HorizontalLineWrapper>
      </header>
      <HorizontalLineWrapper dark={true}>
        <Hello />
      </HorizontalLineWrapper>
      <HorizontalLineWrapper>
        <Technologies />
      </HorizontalLineWrapper>
      <HorizontalLineWrapper>
        <Proyects />
      </HorizontalLineWrapper>
      <HorizontalLineWrapper dark={true}>
        <CallToAction />
      </HorizontalLineWrapper>
      <HorizontalLineWrapper>
        <Experience />
      </HorizontalLineWrapper>
      <HorizontalLineWrapper>
        <AboutMe />
      </HorizontalLineWrapper>
      <HorizontalLineWrapper dark={true}>
        <Header />
      </HorizontalLineWrapper>
    </Container>
  );
};

export default Portfolio;
