import React from "react";
import BlogItem from "./BlogItem";

export default function BlogList({device}) {
  return (
    <div>
      {[1, 2, 3].map((_) => (
        <BlogItem key={_} device={device}/>
      ))}
    </div>
  );
}
