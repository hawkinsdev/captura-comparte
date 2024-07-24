import { SubmitHandler } from "react-hook-form"

export type IFromLogin = {
    email: string
    password: string
}

export type Props = {
    control: any,
    handleLogin: any
    onSubmit: SubmitHandler<IFromLogin>;
    handleSocialLogin: (provider: string) => void;
  };