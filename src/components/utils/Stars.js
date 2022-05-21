import React from "react";

import { ReactComponent as IconStar } from "assets/icons/star.svg";
import { ReactComponent as IconHalfStar } from "assets/icons/half-star.svg";
import { ReactComponent as IconEmptyStar } from "assets/icons/empty-star.svg";

export default function Stars({ count }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
      }}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        if (star <= count) return <IconStar  key={star} />;
        if (star - count === 0.5) return <IconHalfStar key={star} />;
        return <IconEmptyStar key={star} />;
      })}
    </div>
  );
}
