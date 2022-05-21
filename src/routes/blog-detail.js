import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

import bgImage from "assets/images/home-banner.svg";

import PageBanner from "components/utils/PageBanner";
import SectionInfo from "components/utils/SectionInfo";
import KanoteBackground from "components/utils/KanoteBackground";

import BlogsLayout from "components/blogs/BlogsLayout";
import BlogDetail from "components/blogs/blog-detail";
import BlogSidebar from "components/blogs/sidebar/BlogSidebar";
import Search from "components/blogs/sidebar/Search";
import Categories from "components/blogs/sidebar/Categories";
import Tags from "components/blogs/sidebar/Tags";
import PopularBlogs from "components/blogs/sidebar/PopularBlogs";

const categories = [
  {
    id: 1,
    title: "Competition",
    count: "03",
  },

  {
    id: 1,
    title: "Coffee land",
    count: "10",
  },

  {
    id: 1,
    title: "Tea",
    count: "03",
  },

  {
    id: 1,
    title: "Green tea",
    count: "03",
  },
];

const IntroSection = styled.div`
  padding: 8rem 0;
`;

export default function Blogs() {
  const [tag, setTag] = useState("black-coffee");

  return (
    <>
      <Helmet>
        <title>Mountaineer Coffee - Blog title</title>
      </Helmet>
      <PageBanner bgImage={bgImage} />
      <KanoteBackground bgColor="#fafafa49">
        <IntroSection>
          <SectionInfo title="blog detail" titleColor="#707070" />
        </IntroSection>

        <BlogsLayout
          content={<BlogDetail />}
          aside={
            <BlogSidebar
              search={<Search />}
              categories={<Categories list={categories} />}
              tags={<Tags active={tag} />}
              populars={<PopularBlogs list={[1, 2, 3, 4, 5]} />}
            />
          }
        />
      </KanoteBackground>
    </>
  );
}
