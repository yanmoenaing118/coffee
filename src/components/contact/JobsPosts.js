import React from "react";
import styled from "styled-components";

import SectionInfo from "components/utils/SectionInfo";
import { MaxWidth } from "components/MaxWidth";
import BlogOneImage from "assets/images/blog1.jpg";
import BlogTwoImage from "assets/images/blog2.jpg";
import { ButtonReadMore } from "components/utils/Button";

const blogs = [
  {
    id: 1,
    image: BlogOneImage,
    title: "Waiters ( M / F)",
    desc: "After working in coffee shops throughout the Unit Kingdom and the United Arab Emirates,working in coffee shops. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, earum! Quasi aspernatur reprehenderit sunt assumenda sint expedita iusto qui aperiam inventore! Minus temporibus accusamus placeat doloremque. Laborum magni itaque quaerat.",
    author: "Alex",
    likes: "24",
    comments: "3",
  },
  {
    id: 2,
    image: BlogTwoImage,
    title: "Chief assistants (M / F)",
    desc: "After working in coffee shops throughout the Unit Kingdom and the United Arab Emirates,working in coffee shops. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, earum! Quasi aspernatur reprehenderit sunt assumenda sint expedita iusto qui aperiam inventore! Minus temporibus accusamus placeat doloremque. Laborum magni itaque quaerat.",
    author: "Alex",
    likes: "24",
    comments: "3",
  },
  {
    id: 3,
    image: BlogOneImage,
    title: "Manager (M / F)",
    desc: "After working in coffee shops throughout the Unit Kingdom and the United Arab Emirates,working in coffee shops",
    author: "Alex",
    likes: "24",
    comments: "3",
  },
];

const Section = styled.section`
  padding: 6rem 0;
  padding-bottom: 4rem;
`;

const Wrapper = styled(MaxWidth)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Blogs = styled.div`
  margin-top: 1rem;
  margin-bottom: 5rem;
  display: flex;
  gap: 3.5rem;
  & > * {
    flex: 1;
  }
`;

const Blog = styled.div`
  border-radius: 6px;
  padding: 1.5rem;
  box-shadow: 0 0 3px #00000029;
  .image {
    height: 240px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 6px;
    }
  }

  h3 {
    color: #222222;
    margin-top: 2.1rem;
    margin-bottom: 1.1rem;
    font-size: var(--text-5);
  }

  p {
    color: #7c7c7c;
    font-size: var(--text-4);
    line-height: 1.6;
    margin-bottom: 1rem;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;



export default function JobsPosts() {
  return (
    <Section>
      <Wrapper>
        <SectionInfo title="Jobs Posts" />
        <Blogs>
          {blogs.map((item) => (
            <Blog key={item.id}>
              <div className="image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <ButtonReadMore>Details Here &raquo;</ButtonReadMore>
              
            </Blog>
          ))}
        </Blogs>
      </Wrapper>
    </Section>
  );
}
