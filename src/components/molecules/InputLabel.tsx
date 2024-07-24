import React from "react";
import { Label } from "../atoms/label";
import { Input } from "../atoms/input";
import { Section } from "../atoms/section";

type InputLabelProps = {
  label: string;
  name: string;
  control: any;
  type: string;
  placeholder: string;
  disabled?: boolean;
};

export const InputLabel: React.FC<InputLabelProps> = ({
  label,
  control,
  name,
  type,
  placeholder,
  disabled = false,
}) => {
  return (
    <Section className="mb-4">
      <Label>{label}</Label>
      <Input
        control={control}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
      />
    </Section>
  );
};
