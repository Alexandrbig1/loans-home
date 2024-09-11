import { Helmet } from "react-helmet-async";

function Terms() {
  return (
    <>
      <Helmet>
        <title>Neighborhood Loans - Terms of Service</title>
        <meta
          name="description"
          content="Read the Neighborhood Loans Terms of Service to understand the rules and guidelines for using our website, participating in our community, and engaging with our content."
        />
        <meta
          name="keywords"
          content="Neighborhood Loans terms of service, terms and conditions, website usage rules, community guidelines"
        />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Neighborhood Loans - Terms of Service"
        />
        <meta
          property="og:description"
          content="Review the Neighborhood Loans Terms of Service to know your rights and responsibilities when using our website and participating in our tech community."
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://opencodechicago.netlify.app" /> */}
        {/* <meta property="og:image" content="/logo.png" /> */}
        <meta property="og:site_name" content="Neighborhood Loans" />

        <meta name="twitter:creator" content="@alexsmagin29" />
        <meta name="twitter:site" content="@alexsmagin29" />
        <meta
          name="twitter:title"
          content="Neighborhood Loans - Terms of Service"
        />
        <meta
          name="twitter:description"
          content="Understand the rules and guidelines for using the Neighborhood Loans website and participating in our tech community by reviewing our Terms of Service."
        />
        {/* <meta name="twitter:image" content="/logo.png" /> */}
      </Helmet>

      <div>Terms</div>
    </>
  );
}

export default Terms;
