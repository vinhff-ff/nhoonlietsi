import React from "react";
import { Select, SelectProps } from "antd";

const { Option } = Select;

interface SelectCustomProps extends SelectProps<any> {
  options: { value: string | number; label: string }[];
}

const SelectCustom: React.FC<SelectCustomProps> = ({ options, ...rest }) => {
  return (
    <Select
      showSearch
      {...rest}
      className="select-custom"
      dropdownClassName="select-custom-dropdown"
    >
      {options.map((opt) => (
        <Option key={opt.value} value={opt.value}>
          {opt.label}
        </Option>
      ))}
    </Select>
  );
};

export default SelectCustom;
