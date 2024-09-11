import SocialIcons from "../UI/SocialIcons/SocialIcons";
import { motion } from "framer-motion";
import FooterRightsText from "../UI/FooterRightsText/FooterRightsText";
import { FooterContainer, FooterWrapper } from "./Footer.styled";

function Footer() {
  return (
    <FooterContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <FooterWrapper>
          <FooterRightsText />
          <SocialIcons />
        </FooterWrapper>
      </motion.div>
    </FooterContainer>
  );
}

export default Footer;
