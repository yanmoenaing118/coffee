import React from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: ${({ pos }) => pos || "center"};
  .pagination {
    display: flex;
    gap: 1rem;
    align-items: center;
    --link-size: 40px;
    --arr-size: 6px;
    .link {
      display: block;
      cursor: pointer;
      width: var(--link-size);
      height: var(--link-size);
      background-color: ${({color}) => color ? color : "#fafafa"};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .link-active {
      border: 1px solid var(--primary-color);
      color: var(--primary-color);
    }

    .next-link,
    .prev-link {
      cursor: pointer;
      display: block;
      background-color: ${({color}) => color ? color : "#fafafa"};
      border-radius: 50%;
      width: var(--link-size);
      height: var(--link-size);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .next-link::after,
    .prev-link::after {
      content: "";
      display: block;
      width: var(--arr-size);
      height: var(--arr-size);
    }

    .next-link::after {
      border-top: 2px solid #b7b7b7;
      border-right: 2px solid #b7b7b7;
      transform: rotate(45deg);
    }

    .prev-link::after {
      border-top: 2px solid #b7b7b7;
      border-left: 2px solid #b7b7b7;
      transform: rotate(-45deg);
    }
  }
`;

export default function Pagination({ onChange, pos, color }) {
  return (
    <Container pos={pos} color={color}>
      <ReactPaginate
        breakLabel="..."
        onPageChange={onChange}
        pageRangeDisplayed={5}
        pageCount={3}
        renderOnZeroPageCount={null}
        className="pagination"
        pageLinkClassName="link"
        activeLinkClassName="link-active"
        nextLinkClassName="next-link"
        previousLinkClassName="prev-link"
        nextLabel=""
        previousLabel=""
      />
    </Container>
  );
}
