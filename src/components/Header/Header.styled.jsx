import styled from "styled-components";
import { primaryFont } from "../fonts";
import { Link, NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

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

  @media (min-width: 1440px) {
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

export const HeaderMailIcon = styled(MdAlternateEmail)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.whiteColor};
  transition: all var(--primary-transition);
`;

export const HeaderPhoneIcon = styled(FaPhoneVolume)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.whiteColor};
  transition: all var(--primary-transition);
`;

export const HeaderDropDownMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem;
  transition: all var(--primary-transition);
`;

export const HeaderDropDownItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  border-radius: 1.2rem;
  width: 100%;
  min-width: 13rem;
  transition: all var(--primary-transition);
`;

export const HeaderDropDownBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1.2rem;
`;

export const HeaderDropDownBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 0.6rem 2.4rem;
  border: none;
  outline: none;
  background: none;
  font-size: 1.4rem;
  font-weight: 700;
  font-family: ${primaryFont};
  color: ${({ theme }) => theme.colors.whiteColor};
  background-color: ${({ theme }) => theme.colors.accentColor};
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentColorHover};
  }

  &:hover {
    ${HeaderPhoneIcon} {
      color: #ccff33;
    }
  }
  &:hover {
    ${HeaderMailIcon} {
      color: #f9c80e;
    }
  }
`;

export const HeaderDropDown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  transition: all var(--primary-transition);
  /* width: 110%; */
  background-color: ${(p) => p.theme.colors.dropDownBg};
  border-radius: 1.2rem;
  padding: 1.2rem 0;
  z-index: 1000;
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
`;

export const RightDropDownMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.2rem;
  transition: all var(--primary-transition);

  & li {
    border-bottom: 0.1px solid #354f52;
  }
`;

export const RightDropDownLink = styled(Link)`
  font-size: 1.4rem;
  white-space: nowrap;
  font-weight: 700;
  font-family: ${primaryFont};
  color: ${({ theme }) => theme.colors.greyColor};
  line-height: 1.28571;
  transition: all var(--primary-transition);
  width: 100%;
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.colors.blackTextColor};
  }
`;

export const HeaderDropDownRight = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  transition: all var(--primary-transition);
  /* width: 110%; */
  background-color: ${(p) => p.theme.colors.lightGreyColor};
  border-radius: 1.2rem;
  padding: 1.2rem 0;
  z-index: 1000;
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
`;

export const HeaderDropDownImg = styled.img`
  transition: all var(--primary-transition);
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.4rem;
`;

export const HeaderItems = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  transition: all var(--primary-transition);

  &:hover ${HeaderDropDown}, &:hover ${HeaderDropDownRight} {
    display: block;
  }
`;

export const HeaderDropDownLink = styled.div`
  font-size: 1.4rem;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-weight: 700;
  font-family: ${primaryFont};
  color: ${({ theme }) => theme.colors.whiteColorLow};
  line-height: 1.28571;
  transition: all var(--primary-transition);
  width: 100%;
  text-transform: uppercase;
  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.mainTextColor};
  }
`;

export const HeaderNavLink = styled(NavLink)`
  font-size: 1.4rem;
  white-space: nowrap;
  font-weight: 700;
  font-family: ${primaryFont};
  color: ${({ theme }) => theme.colors.whiteColorLow};
  line-height: 1.28571;
  transition: all var(--primary-transition);
  width: 100%;
  text-transform: uppercase;
  display: flex;
  align-items: center;

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

export const ArrowIcon = styled(IoMdArrowDropdown)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.accentColor};
`;

export const HeaderButton = styled.button`
  display: none;

  @media (min-width: 1440px) {
    display: block;
    padding: 1.2rem 2.4rem;
    border: none;
    outline: none;
    background: none;
    font-size: 1.4rem;
    font-weight: 700;
    font-family: ${primaryFont};
    color: ${({ theme }) => theme.colors.whiteColor};
    background-color: ${({ theme }) => theme.colors.accentColor};
    border-radius: 0.4rem;
    cursor: pointer;
    transition: all var(--primary-transition);

    &:hover {
      background-color: ${({ theme }) => theme.colors.accentColorHover};
    }
  }
`;
