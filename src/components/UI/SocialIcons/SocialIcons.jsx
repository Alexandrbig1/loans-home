import { motion } from "framer-motion";
import {
  GitHubIcon,
  Link,
  LinkedInIcon,
  SocialLinksWrapper,
} from "./SocialIcons.styled";

// eslint-disable-next-line react/prop-types
function SocialIcons({ color }) {
  return (
    <SocialLinksWrapper>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <Link
          href="https://github.com/Alexandrbig1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Alex Smagin GitHub account"
          title="Visit Alex Smagin GitHub account"
        >
          <GitHubIcon />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", delay: 1.25 }}
      >
        <Link
          href="https://www.linkedin.com/in/alex-smagin29"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Alex Smagin LinkedIn account"
          title="Alex Smagin LinkedIn account"
        >
          <LinkedInIcon $color={color} />
        </Link>
      </motion.div>
    </SocialLinksWrapper>
  );
}

export default SocialIcons;
