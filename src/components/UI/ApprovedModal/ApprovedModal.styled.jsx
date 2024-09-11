import styled from "styled-components";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { primaryFont } from "../../fonts";
import { FaUserCheck } from "react-icons/fa6";

export const ModalDiv = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  padding: 4.8rem;
  height: auto;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  overflow-y: scroll;
  scroll-behavior: smooth;
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.1) 0px 4px 6px -2px;
`;

export const CloseModal = styled.button`
  border: none;
  outline: none;
  background: none;
  width: 2.4rem;
  height: 2.4rem;
  color: ${(p) => p.theme.colors.accentColor};
  top: 1.6rem;
  right: 1.6rem;
  position: absolute;
  cursor: pointer;
  z-index: 300;
  transition: transform var(--primary-transition),
    scale var(--primary-transition);

  &:hover,
  &:focus {
    transform: rotate(90deg) scale(1.2);
    color: ${(p) => p.theme.colors.accentColorHover};
  }
`;

export const CloseIcon = styled(IoMdClose)`
  font-size: 2.4rem;
`;

export const AttendForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  background-color: ${(p) => p.theme.colors.headerBgColor};
  border-radius: 1.2rem;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 36rem;
    /* width: 24rem; */
    width: 100%;
  }
`;

export const AttendInput = styled.input`
  border: none;
  outline: none;
  background: none;
  padding: 1.2rem;
  border-radius: 0.8rem;
  background-color: ${(p) => p.theme.colors.lightGreyColor};

  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.11111;
  color: ${(p) => p.theme.colors.blackTextColor};

  transition: all var(--primary-transition);
  min-width: 24rem;
  width: 100%;

  &::placeholder {
    font-family: ${primaryFont};
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.11111;
    color: ${(p) => p.theme.colors.greyColor};
  }

  &:hover,
  &:focus {
    outline: none;
    box-shadow: ${(p) => p.theme.colors.accentColor} 0px 1px 8px,
      ${(p) => p.theme.colors.accentColor} 0px -1px 8px;
  }
`;

export const AttendBtnIcon = styled(FaUserCheck)`
  color: ${(p) => p.theme.colors.whiteColor};
  font-size: 2.4rem;
  transition: all var(--primary-transition);
  animation: none;
  position: absolute;
  top: 50%;
  right: 1.2rem;
  transform: translateY(-50%);
`;

export const AttendBtn = styled.button`
  position: relative;
  height: 4.2rem;
  border: none;
  background: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  padding: 1.2rem 2.4rem;
  border-radius: 0.8rem;
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  background-color: ${(p) => p.theme.colors.accentColor};
  color: ${(p) => p.theme.colors.whiteColor};
  transition: all var(--primary-transition);
  cursor: pointer;
  position: relative;

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.accentColorHover};
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  &:hover,
  &:focus {
    ${AttendBtnIcon} {
      transform: translateY(-50%) scale(1.2);
    }
  }
`;
