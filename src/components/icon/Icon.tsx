import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div<{ size?: string; color?: string }>`
  height: ${(props) => props.size};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: none;

  svg {
    height: ${(props) => props.size};
    width: ${(props) => props.size};
    g {
      fill: ${(props) => props.color}!important;
    }
    path {
      fill: ${(props) => props.color}!important;
    }
  }
`;

interface IconProps {
  icon: string;
  size?: string;
  color?: string;
}
const Icon = (props: IconProps) => {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    fetch(`/icons/${props.icon}.svg`)
      .then((res) => res.text())
      .then((data) => setSvgContent(data));
  }, [props.icon]);

  return (
    <Container
      size={props.size}
      color={props.color}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default Icon;
