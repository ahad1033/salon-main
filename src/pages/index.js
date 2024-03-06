import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import ReviewOne from "@components/review/ReviewOne";
// import LatestBlog from "@components/blogs/LatestBlog";
import SupportOne from "@components/support/SupportOne";
import ServiceOne from "@components/services/ServiceOne";
// import IntegrationOne from "@components/integration/IntegrationOne";
// import TestimonialOne from "@components/testimonial/TestimonialOne";
// import WorkProcessTwo from "@components/workprocess/WorkProcessTwo";
import HeroSectionThree from "@components/hero-section/HeroSectionThree";
import Navbar from "@layout/Header/Navbar";
import ProductShowCase from "@components/promo/ProductShowCase";

const SassCompanyTwoHome = () => {
  return (
    <Layout>
      <Navbar />
      <HeroSectionThree />
      <ReviewOne />
      <ProductShowCase />
      <ServiceOne />
      {/* <WorkProcessTwo /> */}
      {/* <TestimonialOne /> */}
      {/* <IntegrationOne /> */}
      {/* <LatestBlog /> */}
      <SupportOne className />
      <Footer footerLight />
    </Layout>
  );
};

export default SassCompanyTwoHome;
