import React from "react";
import { Avatar } from "../atoms/avatar";
import { Image } from "../atoms/image";
import { Section } from "../atoms/section";
import { stringAvatar, stringToColor } from "../../lib/utils/common";

type Props = {
  imgUrl: string;
  fullname: string | null;
  onClick: () => void;
};

export const AvatarImage: React.FC<Props> = ({ imgUrl, fullname, onClick }) => {
  return (
    <Avatar>
      {imgUrl && (
        <Image
          src={imgUrl}
          className="rounded-full size-10"
          onClick={onClick}
        />
      )}
      {fullname && !imgUrl && (
        <Section
          className="flex flex-col justify-center text-center content-center rounded-full size-10 h-full"
          onClick={onClick}
          style={{ backgroundColor: stringToColor(fullname) }}
        >
          {stringAvatar(fullname)}
        </Section>
      )}
    </Avatar>
  );
};
