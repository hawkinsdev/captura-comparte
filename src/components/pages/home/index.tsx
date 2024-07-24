import React from "react";
import { Section } from "../../atoms/section";
import { Text } from "../../atoms/text";
import { Card } from "../../molecules/Card"
import { Publications } from "../../../types/publications"

type Props = {
    publications: Publications
}

export const Home: React.FC<Props> = ({publications}) => {
    return (
        <Section className="container m-auto flex flex-col gap-1 h-full max-h-full w-full">
            <Section className="h-14 flex content-center">
                <Text className="text-2xl text-tertiary font-semibold my-auto">Galeria</Text>
            </Section>
            <Section className="h-full flex flex-wrap p-6 gap-5 w-full max-w-full overflow-scroll">
                {publications?.map((publication, index: number) => (
                    <Card key={index} publication={publication}/>
                ))}
            </Section>
        </Section>
    )
}