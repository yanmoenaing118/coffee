import React, { useState } from "react";
import styled from "styled-components";

import PageBanner from "components/utils/PageBanner";
import SectionInfo from "components/utils/SectionInfo";
import Pagination from "components/utils/Pagination";
import KanoteBackground from "components/utils/KanoteBackground";

import BlogsLayout from "components/blogs/BlogsLayout";
import BlogList from "components/blogs/BlogList";
import BlogSidebar from "components/blogs/sidebar/BlogSidebar";
import Search from "components/blogs/sidebar/Search";
import Categories from "components/blogs/sidebar/Categories";
import Tags from "components/blogs/sidebar/Tags";
import PopularBlogs from "components/blogs/sidebar/PopularBlogs";

import useDevice from "lib/device";

const bgImage =
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

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
  padding: 4rem 0;

  @media screen and (min-width: 992px) {
    padding: 8rem 0;
  }
`;

export default function Blogs() {
  const [tag, setTag] = useState("black-coffee");
  const device = useDevice();

  return (
    <>
      <PageBanner bgImage={bgImage} />
      <KanoteBackground bgColor="#f3f1ed49">
        <IntroSection>
          <SectionInfo title="News and blogs" titleColor="#707070" />
        </IntroSection>
        <BlogsLayout
          device={device}
          content={<BlogList device={device} list={[]} />}
          aside={
            (device === "lg" || device === "xlg") && (
              <BlogSidebar
                search={<Search />}
                categories={<Categories list={categories} />}
                tags={<Tags active={tag} onChange={(value) => setTag(value)} />}
                populars={<PopularBlogs list={[1, 2, 3, 4, 5]} />}
              />
            )
          }
          pagination={
            <Pagination
              pos="flex-end"
              onChange={() => console.log("blog page change")}
            />
          }
        />
      </KanoteBackground>
    </>
  );
}
