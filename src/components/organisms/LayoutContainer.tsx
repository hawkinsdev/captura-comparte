import React from "react";
import { Section } from "../atoms/section"
import { NavBar } from "../molecules/NavBar"
import { UserInfo } from  "../../types/user"

type Props = {
    children: React.ReactNode
    user_info: UserInfo
}

export const LayoutContainer: React.FC<Props> = ({children, user_info}) => {
    return (
        <Section className="bg-container h-full">
            <Section className="mx-auto bg-slate-300 h-14 justify-center content-center">
                <NavBar user_info={user_info}/>
            </Section>
            <Section className="container m-auto h-screen max-h-screen w-screen max-w-screen">
                {children}
            </Section>
        </Section>
    )
}