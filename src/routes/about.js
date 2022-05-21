import React from "react";
import { Helmet } from "react-helmet-async";

import bgImage from "assets/images/home-banner.svg";
import PageBanner from "components/utils/PageBanner";
import OurHistory from "components/about/OurHistory";
import OurVision from "components/about/OurVision";
import OurStorySections from "components/about/OurStorySections";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Mountaineer Coffee - History</title>
      </Helmet>
      <PageBanner bgImage={bgImage} />
      <OurHistory />
      <OurVision />
      <OurStorySections />
    </>
  );
}
