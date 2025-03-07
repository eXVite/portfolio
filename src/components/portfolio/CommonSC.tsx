import styled from "styled-components";

export const Title = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xxl};
  color: ${(props) => props.theme.colors.grey900};
  font-weight: 700;
  line-height: 1;

  > span {
    font-size: 40px;
    color: ${(props) => props.theme.colors.primary500};
    line-height: 1;
  }
`;

export const Description = styled.span`
  font-size: ${(props) => props.theme.fontSizes.s};
  color: ${(props) => props.theme.colors.baseText};

  > span {
    font-size: ${(props) => props.theme.fontSizes.m};
    color: ${(props) => props.theme.colors.secondary500};
  }

  > b {
    color: ${(props) => props.theme.colors.primary500};
  }
`;
