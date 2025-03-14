import styled from "styled-components";
import Header from "../../components/portfolio/Header";
import Hello from "../../components/portfolio/Hello";
import Technologies from "../../components/portfolio/Technologies";
import Proyects from "../../components/portfolio/Proyects/Proyects";
import Experience from "../../components/portfolio/Experience";
import AboutMe from "../../components/portfolio/AboutMe";

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColors.baseBackGround};
  display: flex;
  flex-direction: column;
`;

const HorizontalLineWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey500};
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 80rem;
    box-sizing: border-box;
    border: 1px solid ${(props) => props.theme.colors.grey500};
    border-top: none;
    border-bottom: none;
  }

  @media (max-width: 1600px) {
    > div {
      width: 100%;
      margin: 0 10rem;
    }
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
      <HorizontalLineWrapper>
        <Header />
      </HorizontalLineWrapper>
      <HorizontalLineWrapper>
        <Hello />
      </HorizontalLineWrapper>
      <HorizontalLineWrapper>
        <Technologies />
      </HorizontalLineWrapper>
      <HorizontalLineWrapper>
        <Proyects />
      </HorizontalLineWrapper>
      <HorizontalLineWrapper>
        <Experience />
      </HorizontalLineWrapper>
      <HorizontalLineWrapper>
        <AboutMe />
      </HorizontalLineWrapper>
      <HorizontalLineWrapper>
        <Header />
      </HorizontalLineWrapper>
    </Container>
  );
};

export default Portfolio;
