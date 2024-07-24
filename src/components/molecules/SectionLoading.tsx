import React from "react";
import { Section } from "../atoms/section"
import { Loading } from "../atoms/loading"

export const SectionLoading: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
    return (
        <Section>
            <Loading />
        </Section>
    )
}