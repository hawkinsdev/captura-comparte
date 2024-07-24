import React from "react";
import {Section} from './section';

type Props = {
    children: React.ReactNode;
}

export const Avatar: React.FC<Props> = ({children}) => {
    return (
        <Section className="flex ">
            {children}
        </Section>
    )
}