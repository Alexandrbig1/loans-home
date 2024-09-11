import React, { useRef } from "react";
import { useMenu } from "@/context/ToggleMenuContext";
import emailRegex from "../../../regex/emailRegex";
import { commonToastOptions } from "../../../helpers/toastOptions";
import { toast } from "react-toastify";
import {
  AttendBtn,
  AttendBtnIcon,
  AttendForm,
  AttendInput,
  CloseIcon,
  CloseModal,
  ModalDiv,
} from "./ApprovedModal.styled";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: 100,
  },
};

const ApprovedModal = React.memo(() => {
  const { modalIsOpen, approvedModal } = useMenu();
  const form = useRef();

  const handleAttendSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
    };

    const validEmail = emailRegex.test(data.email);
    const validName = data.name.length > 0;

    if (!(validEmail && validName)) {
      if (!validName) {
        toast.error("Please enter your name!", commonToastOptions);
      } else if (!validEmail) {
        toast.error("Please enter a valid email address!", commonToastOptions);
      } else {
        toast.error("Please fill in all required fields!", commonToastOptions);
      }
      return;
    }

    try {
      toast.success("You're successfully approved!", commonToastOptions);
    } catch (error) {
      toast.error(
        "There was an issue with your registration. Please try again later.",
        commonToastOptions
      );
    } finally {
      e.target.name.value = "";
      e.target.email.value = "";
    }
  };

  return (
    <ModalDiv
      isOpen={modalIsOpen}
      onRequestClose={approvedModal}
      style={customStyles}
      contentLabel="Contact Modal Window"
      aria-modal="true"
    >
      <CloseModal
        type="button"
        onClick={approvedModal}
        aria-label="Close modal"
      >
        <CloseIcon />
      </CloseModal>
      <AttendForm ref={form} onSubmit={handleAttendSubmit}>
        <AttendInput
          type="text"
          name="name"
          placeholder="Your Name"
          aria-label="Your Name"
          aria-required="true"
        />
        <AttendInput
          type="text"
          name="email"
          placeholder="Your Email"
          aria-label="Your Email"
          aria-required="true"
        />
        <AttendBtn type="submit" aria-label="Submit the form">
          Attend
          <AttendBtnIcon />
        </AttendBtn>
      </AttendForm>
    </ModalDiv>
  );
});

ApprovedModal.displayName = "ApprovedModal";

export default ApprovedModal;
