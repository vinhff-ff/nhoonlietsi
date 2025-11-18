import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../asset/logo.png";
import { NAM_LIST } from "../../../data/year";
import InputCustom from "../../../custom/Input/InputCustom";
import SelectCustom from "../../../custom/Input/SelectCustom";
import CustomButton from "../../../custom/Button/btnCustom";
import { SearchOutlined } from "@ant-design/icons";
import { HeaderProps } from "../interface";

export default function HeaderSearch({ onSearch }: HeaderProps) {
  const [name, setName] = useState("");
  const [year, setYear] = useState<number | undefined>();

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleSubmit = () => {
    onSearch({
      name,
      year: year?.toString() || "1858-2000",
    });
  };
  return (
    <header className="header scrolled">
      <div className="header-content">
        <img
          src={Logo}
          alt="Logo"
          className="logo"
          onClick={handleLogoClick}
        />

        <div className="search-form">
          <InputCustom
            placeholder="Tên liệt sĩ..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <SelectCustom
            options={NAM_LIST.map((y) => ({ value: y, label: y.toString() }))}
            placeholder="Năm hy sinh"
            value={year}
            onChange={(val) => setYear(Number(val))}
          />

          <CustomButton
            text="Tìm kiếm"
            bgColor="#A81010"
            onClick={handleSubmit}
            icon={<SearchOutlined />}
          />
        </div>
      </div>
    </header>
  );
}
