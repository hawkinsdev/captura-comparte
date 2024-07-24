import React from "react";
import { Controller } from "react-hook-form"
import { Text } from "./text";

type InputProps = {
  name: string;
  control: any;
  type: string;
  placeholder: string;
  disabled?: boolean;
};

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  disabled = false,
  name,
  control
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({field, fieldState: { error }}) => (
        <div>
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            className={`px-4 py-2 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent disabled:bg-gray-200`}
          />
          {error && <Text className="text-xs text-red-600">{error.message}</Text>}
        </div>
      )}
    />
  );
};
