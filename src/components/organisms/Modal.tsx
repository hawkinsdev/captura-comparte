import React from "react";
import { Section } from "../atoms/section";
import { Text } from "../atoms/text";
import { ButtonOutlet } from "../atoms/button";

type Props = {
  children: React.ReactNode;
  title: string | "";
  setOpenModal: (active: boolean) => void;
};

export const Modal: React.FC<Props> = ({ children, setOpenModal, title }) => {
  return (
    <Section
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <Section
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      >
      </Section>
      <Section className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <Section className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <Section className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <Section className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <Section className="sm:flex sm:items-start">
                <Section className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                  <Text
                    className="text-base font-semibold leading-6 text-tertiary"
                    id="modal-title"
                  >
                    {title}
                  </Text>
                  <Section className="mt-2 w-full">{children}</Section>
                </Section>
              </Section>
            </Section>
            <Section className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <ButtonOutlet
                text="Cancelar"
                onClick={() => setOpenModal(false)}
              />
            </Section>
          </Section>
        </Section>
      </Section>
    </Section>
  );
};
