import React from 'react';
import { Props} from "../../types/home"
import { LayoutContainer } from "../../components/organisms/LayoutContainer"

export const HomeTemplate: React.FC<Props> = ({children, user_info}) => {
    return (
        <LayoutContainer user_info={user_info}>
            {children}
        </LayoutContainer>
    )
}