import { Helmet } from "react-helmet-async";
import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <>
      <Helmet>
        <title>Neighborhood Loans - Your Trusted Home Loan Partner</title>
        <meta
          name="description"
          content="Neighborhood Loans provides expert mortgage services, helping you find the perfect home loan solution. Explore our mortgage options and apply online today."
        />
        <meta
          name="keywords"
          content="home loans, mortgage, refinance, first-time buyer, real estate loans, Neighborhood Loans"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Neighborhood Loans - Your Trusted Home Loan Partner"
        />
        <meta
          property="og:description"
          content="Expert mortgage services at Neighborhood Loans. Whether you're buying a new home or refinancing, we have the right solution for you."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://neighborhoodloans.netlify.app"
        />
        <meta property="og:image" content="/neighborhood.png" />
        <meta property="og:site_name" content="Neighborhood Loans" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@alexsmagin29" />
        <meta name="twitter:site" content="@alexsmagin29" />
        <meta
          name="twitter:title"
          content="Neighborhood Loans - Your Trusted Home Loan Partner"
        />
        <meta
          name="twitter:description"
          content="Need a home loan? Neighborhood Loans offers a variety of mortgage solutions tailored to your needs. Apply now!"
        />
        <meta name="twitter:image" content="/neighborhood.png" />
        <link rel="icon" href="/favicon.svg" />
      </Helmet>
      <Hero />
    </>
  );
}

export default Home;
