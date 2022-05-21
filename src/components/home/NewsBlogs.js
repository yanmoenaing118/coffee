import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import SectionInfo from "components/utils/SectionInfo";
import { MaxWidth } from "components/MaxWidth";
import BlogOneImage from "assets/images/blog1.jpg";
import BlogTwoImage from "assets/images/blog2.jpg";
import { ButtonReadMore, Button } from "components/utils/Button";
import { ReactComponent as IconPeople } from "assets/icons/profile-blog.svg";
import { ReactComponent as IconLike } from "assets/icons/like.svg";
import { ReactComponent as IconComment } from "assets/icons/comment.svg";

const blogs = [
  {
    id: 1,
    image: BlogOneImage,
    title: "Americano Pure Grades Blog",
    desc: "After working in coffee shops throughout the Unit Kingdom and the United Arab Emirates,working in coffee shops. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, earum! Quasi aspernatur reprehenderit sunt assumenda sint expedita iusto qui aperiam inventore! Minus temporibus accusamus placeat doloremque. Laborum magni itaque quaerat.",
    author: "Alex",
    likes: "24",
    comments: "3",
  },
  {
    id: 2,
    image: BlogTwoImage,
    title: "Americano Pure Grades Blog",
    desc: "After working in coffee shops throughout the Unit Kingdom and the United Arab Emirates,working in coffee shops. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, earum! Quasi aspernatur reprehenderit sunt assumenda sint expedita iusto qui aperiam inventore! Minus temporibus accusamus placeat doloremque. Laborum magni itaque quaerat.",
    author: "Alex",
    likes: "24",
    comments: "3",
  },
  {
    id: 3,
    image: BlogOneImage,
    title: "Americano Pure Grades Blog",
    desc: "After working in coffee shops throughout the Unit Kingdom and the United Arab Emirates,working in coffee shops",
    author: "Alex",
    likes: "24",
    comments: "3",
  },
];

const Section = styled.section`
  padding-top: 3rem;
  padding-bottom: 4rem;

  @media screen and (min-width: 1200px) {
    padding: 6rem 0;
    padding-bottom: 15rem;
  }
`;

const Wrapper = styled(MaxWidth)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Blogs = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
  @media screen and (min-width: 992px) {
    margin-top: 7rem;
    margin-bottom: 5rem;
    flex-direction: row;
    & > * {
      flex: 1;
    }
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

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  border-top: 1px solid #eeeeee;
  padding-top: 1.6rem;
  margin-top: 1.6rem;

  .socials {
    display: flex;
    gap: 3rem;
    align-items: center;
  }
`;

const Action = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  span {
    font-size: var(--text-2);
  }
`;

export default function NewsBlogs() {
  const navigate = useNavigate();
  return (
    <Section>
      <Wrapper>
        <SectionInfo title="News and blogs" />
        <Blogs>
          {blogs.map((item) => (
            <Blog key={item.id}>
              <div className="image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <ButtonReadMore>Read more &raquo;</ButtonReadMore>
              <Actions>
                <Action>
                  <IconPeople />
                  <span>Alex</span>
                </Action>

                <div className="socials">
                  <Action>
                    <span>
                      {new Date().toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </Action>
                </div>
              </Actions>
            </Blog>
          ))}
        </Blogs>
        <Button bgColor="#DFB368" onClick={() => navigate("/blogs")}>
          View all
        </Button>
      </Wrapper>
    </Section>
  );
}
