import React from "react";

type LabelProps = {
  children: string;
};

export const Label: React.FC<LabelProps> = ({
  children,
}) => {
  return (
    <label className="block text-gray-700 font-semibold mb-2">{children}</label>
  );
};