import React from "react";
import { InputLabel } from "../molecules/InputLabel";
import { TextDivider } from "../molecules/TextDivider";
import { Button } from "../atoms/button";
import { Section } from "../atoms/section";
import { SocialMediaButton } from "../atoms/buttonSocial";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Props } from "../../types/login"

export const LoginForm: React.FC<Props> = ({
  control,
  onSubmit,
  handleSocialLogin,
  handleLogin,
}) => {
  return (
    <Section className="w-full max-w-md p-8 flex justify-center content-center flex-col gap-2">
      <InputLabel
        control={control}
        name="email"
        label="Correo Electrónico"
        type="email"
        placeholder="Ingresa tu correo"
      />
      <InputLabel
        name="password"
        control={control}
        label="Contraseña"
        type="password"
        placeholder="Ingresa tu contraseña"
      />
      <Button text="Iniciar Sesión" onClick={handleLogin(onSubmit)} />
      <Section className="flex flex-col justify-between content-center mt-6 gap-2">
        <TextDivider>Otras opciones de inicio de sesión</TextDivider>
        <Section className="flex  content-center justify-center gap-2 mt-4">
          <SocialMediaButton
            platform="Google"
            onClick={() => handleSocialLogin("google")}
            icon={FaGoogle}
          />
          <SocialMediaButton
            platform="Github"
            onClick={() => handleSocialLogin("github")}
            icon={FaGithub}
          />
        </Section>
      </Section>
    </Section>
  );
};

export default LoginForm;
