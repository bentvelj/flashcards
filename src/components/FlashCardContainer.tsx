import React, { ReactNode } from "react";

interface FlashCardContainerProps{
  children: ReactNode[] | ReactNode;
}

const style = {
    width : "50%",
    height: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}
export default function FlashCardContainer( { children } : FlashCardContainerProps) {
  return (
    <div style={style}>{children}</div>
  )
}
