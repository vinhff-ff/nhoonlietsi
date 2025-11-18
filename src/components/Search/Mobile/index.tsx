import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../asset/logo.png";
import { NAM_LIST } from "../../../data/year";
import InputCustom from "../../../custom/Input/InputCustom";
import SelectCustom from "../../../custom/Input/SelectCustom";
import CustomButton from "../../../custom/Button/btnCustom";
import DrawerCustom from "../../../custom/Drawer/index";
import { SearchOutlined } from "@ant-design/icons";
import { HeaderProps } from "../interface";

const HeaderSearchMobile: React.FC<HeaderProps> = ({ onSearch }) => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [name, setName] = useState("");
  const [year, setYear] = useState<number | undefined>();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleSubmit = () => {
    onSearch({ name, year: year?.toString() || "1858-2000" });
    setDrawerOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <header className="header scrolled" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5px 15px" }}>
      <img
        src={Logo}
        alt="Logo"
        className="logo"
        style={{ height: 40, cursor: "pointer" }}
        onClick={handleLogoClick}
      />

      <SearchOutlined
        style={{ fontSize: 20, cursor: "pointer", color: "#A81010" }}
        onClick={() => setDrawerOpen(true)}
      />

      <DrawerCustom open={drawerOpen} onClose={() => setDrawerOpen(false)} placement="top" height={170} radius={{ bottomLeft: "8px", bottomRight: "8px" }}>
        <div className="form-search-mobile">
          <div className="form-search-mobile-input">
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
          </div>

          <div className="form-search-mobile-sub">
            <CustomButton
              text="Tìm kiếm"
              bgColor="#A81010"
              textColor="#fff"
              onClick={handleSubmit}
              icon={<SearchOutlined />}
            />
          </div>
        </div>
      </DrawerCustom>
    </header>
  );
};

export default HeaderSearchMobile;
