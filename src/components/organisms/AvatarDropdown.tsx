import React, { useState } from "react";
import { Section } from "../atoms/section";
import { AvatarImage } from "../molecules/AvatarImage";

type Props = {
  imgUrl: string;
  fullname: string;
  options: React.ReactNode[];
};

export const AvatarDropdown: React.FC<Props> = ({
  imgUrl,
  fullname,
  options,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Section className=" flex justify-center content-center">
      <Section className="m-auto flex justify-center">
        <AvatarImage
          imgUrl={imgUrl}
          fullname={fullname}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />
      </Section>
      {dropdownOpen && (
        <Section
          className="origin-top-right absolute right-0 mt-16  w-48 rounded-md shadow-lg shadow-gray-300  ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <Section className="py-1 flex flex-col gap-1" role="none" >
            {options.map((x, i) => x)}
          </Section>
        </Section>
      )}
    </Section>
  );
};
