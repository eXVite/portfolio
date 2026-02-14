import styled, { keyframes } from "styled-components";
import Icon from "../../icon/Icon";

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 1.25rem;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.grey100};
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1),
      0 8px 20px rgba(0, 0, 0, 0.06);
    border-color: ${(props) => props.theme.colors.primary200};
  }

  &:hover img {
    transform: scale(1.02);
  }

  &:hover .hover-overlay {
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 14rem;
  overflow: hidden;
  background: #f0f0f0;
  position: relative;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
`;

const HoverOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.25rem;
  box-sizing: border-box;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.55) 40%,
    rgba(0, 0, 0, 0.85) 100%
  );
  opacity: 0;
  transition: opacity 0.35s ease;
  gap: 0.4rem;
`;

const OverlayTitle = styled.span`
  font-size: ${(props) => props.theme.fontSizes.l};
  font-weight: 700;
  color: ${(props) => props.theme.colors.lightText};
`;

const OverlayDesc = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xs};
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.85);
`;

const TopBadges = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  z-index: 1;
`;

const StatusBadge = styled.span<{ status: "live" | "dev" }>`
  font-size: ${(props) => props.theme.fontSizes.xxs};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.25rem 0.6rem;
  border-radius: 2rem;
  color: ${(props) => props.theme.colors.lightText};
  background: ${(props) =>
    props.status === "live"
      ? `linear-gradient(135deg, ${props.theme.colors.primary500}, #3b82f6)`
      : "linear-gradient(135deg, #f59e0b, #f97316)"};
  background-size: 200% 100%;
  animation: ${shimmer} 3s ease infinite;
  white-space: nowrap;
`;

const IconsRow = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
`;

const IconChip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5rem;
  width: 1.5rem;
  background-color: rgba(255, 255, 255, 0.92);
  border-radius: 0.4rem;
  backdrop-filter: blur(4px);
`;

const InfoBar = styled.div`
  padding: 0.85rem 1.25rem;
`;

const CardTitle = styled.span`
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: 700;
  color: ${(props) => props.theme.colors.baseText};
`;

interface ProyectCardProps {
  backgroundImage: string;
  title: string;
  description: string;
  icons: string[];
  status: "live" | "dev";
  statusLabel: string;
}

const ProyectCard = (props: ProyectCardProps) => {
  return (
    <Container>
      <ImageContainer>
        <TopBadges>
          <IconsRow>
            {props.icons.map((icon, index) => (
              <IconChip key={index}>
                <Icon icon={icon} size="0.85rem" color={"black"} />
              </IconChip>
            ))}
          </IconsRow>
          <StatusBadge status={props.status}>{props.statusLabel}</StatusBadge>
        </TopBadges>
        <ProjectImage
          src={`/images/proyects/${props.backgroundImage}`}
          alt={props.title}
          loading="lazy"
        />
        <HoverOverlay className="hover-overlay">
          <OverlayTitle>{props.title}</OverlayTitle>
          <OverlayDesc>{props.description}</OverlayDesc>
        </HoverOverlay>
      </ImageContainer>
      <InfoBar>
        <CardTitle>{props.title}</CardTitle>
      </InfoBar>
    </Container>
  );
};

export default ProyectCard;
