import { Helmet } from "react-helmet-async";

function Privacy() {
  return (
    <>
      <Helmet>
        <title>Neighborhood Loans - Privacy Policy</title>
        <meta
          name="description"
          content="Review the Neighborhood Loans Privacy Policy to learn about how we handle your personal information and protect your privacy when you interact with our site and services."
        />
        <meta
          name="keywords"
          content="Neighborhood Loans privacy policy, data protection, personal information, privacy practices"
        />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Neighborhood Loans - Privacy Policy"
        />
        <meta
          property="og:description"
          content="Learn how Neighborhood Loans protects your privacy and handles your personal information when you use our website and participate in our community."
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://opencodechicago.netlify.app" /> */}
        {/* <meta property="og:image" content="/logo.png" /> */}
        <meta property="og:site_name" content="Neighborhood Loans" />

        <meta name="twitter:creator" content="@alexsmagin29" />
        <meta name="twitter:site" content="@alexsmagin29" />
        <meta
          name="twitter:title"
          content="Neighborhood Loans - Privacy Policy"
        />
        <meta
          name="twitter:description"
          content="Read the Neighborhood Loans Privacy Policy to understand our commitment to protecting your privacy and personal data when you engage with us."
        />
        {/* <meta name="twitter:image" content="/logo.png" /> */}
      </Helmet>

      <div>Privacy</div>
    </>
  );
}

export default Privacy;
