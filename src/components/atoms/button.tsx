import React from "react";
import { IconType } from "react-icons";

type Props = {
  text?: string;
  icon?: IconType;
  onClick: () => void;
  disabled?: boolean;
};

export const Button: React.FC<Props> = ({ text, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 font-semibold text-white bg-primary rounded-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:bg-blue-300`}
    >
      {text}
    </button>
  );
};

export const ButtonOutlet: React.FC<Props> = ({ text, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 font-semibold text-tertiary rounded-lg disabled:bg-blue-300`}
    >
      {text}
    </button>
  );
};

export const ButtonOptions: React.FC<Props> = ({ text, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`hover:bg-secondary  px-4 py-2 font-semibold text-tertiary rounded-lg disabled:bg-blue-300`}
    >
      {text}
    </button>
  );
};


export const ButtonIcon: React.FC<Props> = ({
  icon: Icon,
  onClick,
  text,
  ...props
}) => {

  return (
    <button
      onClick={onClick}
      className={`flex items-center px-4 py-2 font-semibold text-primary rounded-lg hover:text-inherit`}
    >
      { Icon && <Icon className="mr-2 size-8" />}
      {text}
    </button>
  );
};