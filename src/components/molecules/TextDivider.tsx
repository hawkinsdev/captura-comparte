import React from "react";
import { Text } from "../atoms/text";
import { Section } from "../atoms/section";

type Props = {
    children: string;
}

export const TextDivider: React.FC<Props> = ({children}) => {
    return (
        <Section className="divider">
            <Text className="text-sm">{children}</Text>
        </Section>
    )
}