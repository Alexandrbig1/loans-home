import styled from "styled-components";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const SocialLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-self: flex-end;
  }
`;

export const Link = styled.a`
  display: block;
  width: 3.6rem;
  height: 3.6rem;
`;

export const GitHubIcon = styled(FaGithub)`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-size: 3.6rem;
  transition: all var(--primary-transition);
  padding: 0.6rem;
  border-radius: 50%;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

export const LinkedInIcon = styled(FaLinkedin)`
  color: ${(p) => p.theme.colors.mainTextColor};
  color: #0a66c2;
  font-size: 3.6rem;
  transition: all var(--primary-transition);
  padding: 0.6rem;
  border-radius: 50%;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
