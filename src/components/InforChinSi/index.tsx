import React from "react";
import CardCustom from "../../custom/Card";
import { ChienSi } from "../../interface/chienSi";
import Avatar from '../../asset/avt.png'
interface InforChienSiProps {
  chienSi: ChienSi;
}

const InforChienSi: React.FC<InforChienSiProps> = ({ chienSi }) => {
  return (
    <CardCustom>
      <div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "flex-start",
          padding: "16px",
        }}
      >
        <div style={{ flexShrink: 0 }}>
          <img
            src={Avatar}
            alt={chienSi.HoTen}
            style={{ 
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #A81010",
            }}
          />
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <h3 style={{ margin: 0, color: "#A81010" }}>{chienSi.HoTen}</h3>

          <p style={{ margin: "4px 0", fontWeight: 600 }}>
            Năm hy sinh: {chienSi.NamHySinh}
          </p>
          
          <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
            {`${chienSi.PhuongXa}, ${chienSi.QuanHuyen}, ${chienSi.TinhThanh}`}
          </p>
        </div>
      </div>
    </CardCustom>
  );
};

export default InforChienSi;
