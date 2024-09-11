import Year from "../../UI/Year/Year";
import {
  FooterRightsWrapper,
  FooterText,
  MarkWrapper,
  TradeMark,
  YearWrapper,
} from "../../Footer/Footer.styled";

// eslint-disable-next-line react/prop-types
function FooterRightsText({ burger }) {
  return (
    <FooterRightsWrapper>
      <MarkWrapper>
        <FooterText $burger={burger}>All Rights Reserved</FooterText>
        <TradeMark $burger={burger} />
      </MarkWrapper>
      <YearWrapper $burger={burger}>
        <Year />
        <FooterText $burger={burger}>Alex Smagin</FooterText>
      </YearWrapper>
    </FooterRightsWrapper>
  );
}

export default FooterRightsText;
