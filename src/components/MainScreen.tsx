import React, { ReactNode } from "react";

interface MainScreenProps{
  children: ReactNode[] | ReactNode;
}
export default function MainScreen( {children} : MainScreenProps) {
  return (
    <div style={{width:"100vw", height:"100vh"}}>{children}</div>
  )
}
