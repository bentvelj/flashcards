import React, { ReactNode, useState } from "react";

interface FlashCardProps {
  children: ReactNode[] | ReactNode;
}

const textStyle = {
  color: "#ff0000",
};

const cardStyle = {
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
};

export default function FlashCard({ children }: FlashCardProps) {
  const [flip, setFlip] = useState(false);
  return (
    <div style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
      <div style={textStyle}>{children}</div>
    </div>
  );
}
