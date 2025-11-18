import React, { ReactNode } from "react";

interface CardCustomProps {
  children: ReactNode;
}

const CardCustom: React.FC<CardCustomProps> = ({ children }) => {
  return <div className="card-custom">{children}</div>;
};

export default CardCustom;
