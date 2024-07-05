import React from "react";
import Styles from "./styles.module.css";
import COIN from "../assets/ETH.svg";
import SvgContainer from "./SvgContainer";

interface TextProps {
  label: string;
  name: string;
  value: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  pattern?: string;
  icon?: React.ReactNode;
  width?: string | number;
  onWheel?: any;
  handleKeyUp?: any;
}

interface PrefixSuffixProps {
  name: string;
  label: string;
  currency?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  duration?: string;
  showDuration?: boolean;
  showCurrency?: boolean;
  placeholder: string;
}
interface Option {
  value: string | number;
  label: string;
}

interface SelectProps {
  options: Option[];
  label: string;
  name: string;
  value: string | number | null;
  onChange: any;
  width?: string | number;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  defaultValue?: string;
}

export function InputField({
  name,
  value,
  onChange,
  label,
  placeholder,
}: TextProps) {
  return (
    <label>
      <p>{label}</p>
      <input
        className={Styles.input}
        placeholder={placeholder}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export function CustomSelectField({ label, name, options }: SelectProps) {
  return (
    <label>
      <p>{label}</p>
      <select name={name} className={Styles.input}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function PrefixSuffixInputField({
  name,
  label,
  value,
  onChange,
  duration,
  showDuration,
  placeholder,
}: PrefixSuffixProps) {
  return (
    <div className={Styles.prefixWrap}>
      <label htmlFor={name} className={Styles.label}>
        <p>{label}</p>
        <div className={Styles.PrefixInput}>
          <SvgContainer src={COIN} /> <span>ETH</span>
          <input
            className={Styles.prefixNoInput}
            placeholder={placeholder}
            type={"text"}
            name={name}
            value={value}
            onChange={onChange}
          />
          {showDuration && <p className={Styles.suffix}>{duration}</p>}
        </div>
      </label>
    </div>
  );
}
