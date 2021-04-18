import React, { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  name?: string;
  className?: string;
}

export const Input: FC<Props> = ({
  label,
  type,
  name,
  className = "",
  ...otherInputProps
}) => (
  <div className={className}>
    {!!label && (
      <label htmlFor={name} className="uppercase text-xs font-bold opacity-50">
        {label}
      </label>
    )}
    <br />
    <input type={type} name={name} className="w-full" {...otherInputProps} />
  </div>
);
