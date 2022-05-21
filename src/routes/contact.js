import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import SectionInfo from "components/utils/SectionInfo";
import PageBanner from "components/utils/PageBanner";
import KanoteBackground from "components/utils/KanoteBackground";

import Map from "components/contact/ContactMap";
import Addresses from "components/contact/Addresses";
import JobsPosts from "components/contact/JobsPosts";
import JobModal from "components/contact/JobModal";

const bgImage =
  "https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const addresses = [
  {
    id: 1,
    title: "MOUNTAINEER COFFEE SHOP",
    desc: "Farmed with passion, processed with ambition, roasted with skillfulness and brewed with freshness, Mountaineer exists to serve",
    phone: "09894280007",
    location: "No. (42)C, Yawmingyi Street, Dagon Township",
    time: "Monday to Saturday ( 8:30 AM - 5:30 PM )",
    image:
      "https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",

    glink: "https://goo.gl/maps/umC9Sna8mvWcMFSw9",
  },
  {
    id: 2,
    title: "MOUNTAINEER SHOWROOM",
    desc: "Farmed with passion, processed with ambition, roasted with skillfulness and brewed with freshness, Mountaineer exists to serve",
    phone: "09882672086",
    location: "No. 4B, Say Yone Road, Yankin Township",
    time: "Monday to Saturday ( 8:30 AM - 5:30 PM )",
    image:
      "https://images.unsplash.com/photo-1501747315-124a0eaca060?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    glink: "https://goo.gl/maps/6RtZUo8qa3itAP1F6",
  },
  {
    id: 3,
    title: "BANGKOK COFFEE SHOP",
    desc: "Farmed with passion, processed with ambition, roasted with skillfulness and brewed with freshness, Mountaineer exists to serve",
    phone: "(+66) 2-227-0941",
    location: "110 Sukhaphiban 2 Road, Dok Mai, Prawet, Bangkok.",
    time: "Monday to Saturday ( 8:30 AM - 5:30 PM )",
    image:
      "https://images.unsplash.com/photo-1502156473420-13f1315e9be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",

    glink: "https://goo.gl/maps/6RtZUo8qa3itAP1F6",
  },
];

const IntroSection = styled.section`
  padding-top: 6rem;
  padding-bottom: 6.5rem;
  /* background-color: #fafafa; */
`;

export default function contact() {
  return (
    <>
      <Helmet>
        <title>Mountaineer Coffee - Contact</title>
      </Helmet>
      <PageBanner bgImage={bgImage} />

      <KanoteBackground bgColor="#FFFFFFaa">
        <IntroSection>
          <SectionInfo
            title="Contact us"
            titleColor="#7C7C7C"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, doloremque officia? Iste laboriosam neque non aut, sapiente quos blanditiis voluptatum, autem, soluta ex nihil dolore molestias sed sequi voluptatem eaque!"
          />
        </IntroSection>

        <Map />
        {addresses.map((item, i) => (
          <Addresses
            key={item.id}
            reverse={i % 2 !== 0}
            infoAlign={i % 2 !== 0 ? "flex-end" : ""}
            marginCollapsed={item.id > 1}
            item={item}
          />
        ))}

        <JobsPosts />
        {/* <JobModal /> */}
      </KanoteBackground>
    </>
  );
}
