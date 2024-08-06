import React, { ReactNode } from "react";

interface FooterListProps {
  title: string;
  children: ReactNode; 
}

export const FooterList: React.FC<FooterListProps> = ({ title, children }) => {
  return (
    <div>
      <h3 className="uppercase text-lg font-semibold text-gray-500 mb-3">
        {title}
      </h3>
      <ul className="text-gray-500 uppercase">{children}</ul>
    </div>
  );
};
