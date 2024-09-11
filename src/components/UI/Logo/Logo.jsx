import {
  LogoText,
  LogoTextHome,
  LogoTextSpan,
  LogoWrapper,
} from "./Logo.styled";

function Logo() {
  return (
    <LogoWrapper
      href="/"
      aria-label="Home Page"
      title="Go to Home Page"
      role="link"
    >
      <LogoText>
        neighborhood
        <LogoTextHome>
          <LogoTextSpan>loans</LogoTextSpan>
        </LogoTextHome>
      </LogoText>
    </LogoWrapper>
  );
}

export default Logo;
