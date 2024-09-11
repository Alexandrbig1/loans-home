import styled from "styled-components";
import { primaryFont } from "../fonts";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2.4rem;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 6.4rem;
  z-index: 50;
  max-width: 1440px;
  background-color: ${(p) => p.theme.colors.mainBgColor};
`;

export const HeaderNavMenu = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
`;

export const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const MobileHeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(
    ${(p) => p.theme.colors.heroSecondOverlayColor}
      ${(p) => p.theme.colors.heroOverlayColor}
  );
  border-radius: 50rem;
  z-index: 1500;
  position: absolute;
  top: 50%;
  right: 1.2rem;
  transform: translateY(-50%);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-color: #00000070;
  z-index: 1000;
  transform: translateY(${(props) => (props?.$isOpen ? "0%" : "-150%")});
  transition: transform 5s ease-in-out;
`;

export const HeaderItems = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const HeaderNavLink = styled(NavLink)`
  font-size: 1.4rem;
  white-space: nowrap;
  font-weight: 700;
  font-family: ${primaryFont};
  color: ${({ theme }) => theme.colors.greyColor};
  line-height: 1.28571;
  transition: all var(--primary-transition);
  width: 100%;
  text-transform: uppercase;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.mainTextColor};
  }

  &.active {
    color: ${({ theme }) => theme.colors.mainTextColor};
  }
`;

export const BurgerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;
