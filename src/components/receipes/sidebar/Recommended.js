import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 6px;
  box-shadow: 0 0 3px #00000029;

  h3 {
    font-size: var(--text-6);
    color: #222222;
    margin-bottom: 1.5rem;
  }
`;

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
      margin-top: 0.5rem;
      font-size: var(--text-1);
      color: var(--primary-color);
      line-height: 1;
    }
  }
`;

export default function RecommendedReceipes({ list }) {
  return (
    <Div>
      <h3>Recommended Reeceipes</h3>
      <List>
        {list.map((item, i) => (
          <ListItem key={i}>
            <div className="image"></div>
            <div className="info">
              <h4>
                <Link to="/receipes/receipes-one">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
