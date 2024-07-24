import React from "react";
import { Text } from "../atoms/text";
import { Image } from "../atoms/image";
import { Section } from "../atoms/section";
import banner_login from "../../assets/banner_login.png";

export const BannerLogin: React.FC = () => {
  return (
    <Section className="flex flex-col h-full gap-2 justify-center content-center">
      <Section className="flex flex-col h-4/6">
        <Text className="font-bold text-3xl font-serif">
          Captura y comparte!
        </Text>
        <Image src={banner_login} className="h-full w-full" />
      </Section>
      <Section className="flex flex-col h-1/5 mt-5">
        <Section>
          <Text className="text-xl font-bold font-serif ">
            ¡Únete a la Aventura Digital!
          </Text>
        </Section>
        <Section>
          <Text className="text-sm font-serif">
            Descubre, Captura y Comparte tus momentos más especiales con nuestra
            comunidad. Inspírate y Conéctate con otros exploradores. ¡Tu próxima
            gran historia comienza aquí!
          </Text>
        </Section>
      </Section>
    </Section>
  );
};
