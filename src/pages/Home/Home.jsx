import { Helmet } from "react-helmet-async";
import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <>
      <Helmet>
        <title>Open Code Chicago - Empowering Tech Enthusiasts</title>
        <meta
          name="description"
          content="Join Open Code Chicago to collaborate, learn, and grow in the tech community. We host events, workshops, and projects that bring developers together."
        />
        <meta
          name="keywords"
          content="Open Code Chicago, tech community, coding workshops, developer collaboration, open source projects, web development"
        />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Open Code Chicago - Empowering Tech Enthusiasts"
        />
        <meta
          property="og:description"
          content="Open Code Chicago is a vibrant tech community focused on collaboration, learning, and growth. Explore our events and projects to elevate your skills."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://opencodechicago.netlify.app" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:site_name" content="Open Code Chicago" />

        <meta name="twitter:creator" content="@alexsmagin29" />
        <meta name="twitter:site" content="@alexsmagin29" />
        <meta
          name="twitter:title"
          content="Open Code Chicago - Empowering Tech Enthusiasts"
        />
        <meta
          name="twitter:description"
          content="Join Open Code Chicago to connect with developers, participate in coding workshops, and contribute to open source projects."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Helmet>
      <Hero />
    </>
  );
}

export default Home;
