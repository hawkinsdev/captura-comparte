import React from "react";
import { Section } from "../../atoms/section"
import { BannerLogin } from "../../molecules/BannerLogin"
import { LoginForm } from "../../organisms/LoginForm"
import { Props } from "../../../types/login"

export const Login: React.FC<Props> = ({
    control,
    handleSocialLogin,
    onSubmit,
    handleLogin,
  }) => {

    return (
        <Section className="container h-screen max-h-screen mx-auto flex flex-col md:flex-row">
            <Section className="md:w-3/5">
                <BannerLogin />
            </Section>
            <Section className="md:w-2/4 bg-slate-100 flex justify-center content-center">
                <LoginForm
                    control={control}
                    onSubmit={onSubmit}
                    handleSocialLogin={handleSocialLogin}
                    handleLogin={handleLogin}
                />
            </Section>
        </Section>
    )
}