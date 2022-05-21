import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Div from "./Wrapper";

const List = styled.ul`
    width: 90%;
`;

const ListItem = styled.li`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  .image {
    flex-basis: 80px;
    min-height: 70px;
    align-self: stretch;
    background-color: #eeeeee;
    border-radius: 4px;
  }

  .info {
    flex: 1;
    h4 {
      line-height: 1;
    }
    h4 a {
      text-decoration: none;
      color: #434343;
      font-size: var(--text-3);
    }

    p {
        margin-top: .5rem;
      font-size: var(--text-1);
      color: var(--primary-color);
      line-height: 1;
    }
  }
`;

export default function PopularBlogs({ list }) {
  return (
    <Div>
      <h3>Popular Blogs</h3>
      <List>
        {list.map((item, i) => (
          <ListItem key={i}>
            <div className="image"></div>
            <div className="info">
              <h4>
                <Link to="/blogs/blog-one">
                  Americano Pure Grades product coffee community blog
                </Link>
              </h4>
              <p>Dec 16,2021</p>
            </div>
          </ListItem>
        ))}
      </List>
    </Div>
  );
}
