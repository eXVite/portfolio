import styled from "styled-components";

export const Title = styled.h1<{ light?: boolean }>`
  font-size: ${(props) => props.theme.fontSizes.xxl};
  color: ${(props) =>
    props.light ? props.theme.colors.lightText : props.theme.colors.baseText};
  font-weight: 700;
  line-height: 1;
  margin: 0;

  > span {
    font-size: 40px;
    color: ${(props) =>
      props.light
        ? props.theme.colors.primary400
        : props.theme.colors.primary500};
    line-height: 1;
  }
`;

export const Description = styled.span<{ light?: boolean }>`
  font-size: ${(props) => props.theme.fontSizes.s};
  color: ${(props) =>
    props.light ? props.theme.colors.lightText : props.theme.colors.baseText};

  > span {
    font-size: ${(props) => props.theme.fontSizes.m};
    color: ${(props) => props.theme.colors.secondary500};
  }

  > b {
    color: ${(props) => props.theme.colors.primary500};
  }
`;
