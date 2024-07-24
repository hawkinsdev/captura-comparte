import React from "react";
import { IconType } from "react-icons";

type SocialMediaButtonProps = {
  platform: string;
  icon: IconType;
  onClick: () => void;
};

export const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  platform,
  icon: Icon,
  onClick,
}) => {
  const platformStyles: { [key: string]: string } = {
    Google: "bg-blue-600 hover:bg-inherit",
    Github: "bg-black hover:bg-inherit",
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center px-4 py-2 font-semibold text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-75 hover:text-inherit ${
        platformStyles[platform] || "bg-gray-500 hover:bg-inherit"
      }`}
    >
      <Icon className="mr-2" />
      {platform}
    </button>
  );
};
