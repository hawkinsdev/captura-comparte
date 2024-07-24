import React from "react";
import { Section } from "../atoms/section"
import { Image } from "../atoms/image"
import { Text } from "../atoms/text"
import { ButtonIcon } from "../atoms/button"
import { FaHeart, FaShare } from "react-icons/fa"

type Props = {
    publication: any
}

export const Card: React.FC<Props> = ({ publication }) => {
    return (
        <Section className="size-72 bg-white flex flex-col rounded-xl shadow shadow-slate-300">
            <Section className="w-full h-full max-h-48 shadow-sm shadow-slate-300">
                <Image src={publication?.url_photo} className="w-full h-full object-fill" />
            </Section>
            <Section className="h-full flex flex-col">
                <Section className="h-14 max-h-14 flex p-1">
                    <Text className="m-auto text-wrap text-sm">{publication?.description}</Text>
                </Section>
                <Section className="h-10 max-h-10 p-1 flex my-auto content-center justify-center">
                    <ButtonIcon onClick={() => alert("me encanta")} icon={FaHeart} text="123" />
                    <ButtonIcon onClick={() => alert("compartir")} icon={FaShare} text="123" />
                </Section>
            </Section>
        </Section>
    )
}