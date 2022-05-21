import React from "react";
import { MaxWidth } from "components/MaxWidth";
import styled from "styled-components";
import StorySection from "./StorySection";

const stories = [
  {
    id: 1,
    desc: {
      title: "Mountaineer's story",
      paras: [
        `Since 2011, from the heights of the mountains in Northern Shan State,
        Arabica coffee beans are genuinely farmed with passion by mountain
        people. What started as a family business has been fully transformed
        into a coffee company through Mountaineer’s enthusiasm for coffee.`,
        `Our mission has always remained the same, which is to be committed and
        be the main driver of growth in Myanmar’s coffee industry. From our
        experience in farming, processing, roasting and brewing, we exist to
        serve with excellence through every cup of coffee.`,
      ],
      justifyContent: "",
    },
    visual: {
      image: "",
      flex: 1.5,
      height: "380px"
    },
  },

  {
    id: 2,
    desc: {
      title: "Sai Aung win",
      paras: [
        `Founder and Managing Director of Mountaineer Coffee. I am on a mission to bring a positive impact to the Myanmar’s coffee industry and potentially contributing our coffee to an international level`,
        `For Mountaineer, coffee is the sum of passion, ambition, skillfulness and freshness. We admire coffee in all its forms, from the green bean, to a fresh cup of coffee and we believe that everyone deserves to experience it. The fact that we able to serve our coffee, produced by passionate farmers is deeply heartening and inspiring experience for us.`,
      ],
      justifyContent: "center",
    },
    visual: {
      image: "",
      flex: 1,
      height: "500px"
    },
  },

  {
    id: 3,
    desc: {
      title: "HOW TO GET BEST COFFEE FROM COFFEE BEANS",
      paras: [
        `Since 2011, from the heights of the mountains in Northern Shan State,
        Arabica coffee beans are genuinely farmed with passion by mountain
        people. What started as a family business has been fully transformed
        into a coffee company through Mountaineer’s enthusiasm for coffee.`,
        `Our mission has always remained the same, which is to be committed and
        be the main driver of growth in Myanmar’s coffee industry. From our
        experience in farming, processing, roasting and brewing, we exist to
        serve with excellence through every cup of coffee.`,
      ],
      justifyContent: "",
    },
    visual: {
      image: "",
      flex: 1.5,
      height: "380px"
    },
  },
];

const Section = styled.section`
  background-color: #fafafa;
  padding-top: 12rem;
  padding-bottom: 12rem;
`;

const Wrapper = styled(MaxWidth)``;

export default function OurStorySections() {
  return (
    <Section>
      <Wrapper>
        <StorySection item={stories[0]} />
        <StorySection item={stories[1]} reverse />
        <StorySection item={stories[2]} />
      </Wrapper>
    </Section>
  );
}
