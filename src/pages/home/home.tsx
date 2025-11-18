import { useState, useEffect } from "react";
import banner1 from "../../asset/banner.png";
import ImgMain from "../../components/ImgMain/ImgMain";
import IndexTimeLine from "../../components/MocThoiGian";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1023);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="banner">
        <img src={banner1} alt="Banner" className="banner-bg" />
        
        <div className="content-wrap">
          <div className="container">
            <h1 className="font-dancing">
              Muôn đời ghi nhớ công ơn {isMobile ? "" : <br />} dựng nước và giữ nước của cha ông
            </h1>
            <p className="font-kodchasan">
              Khám phá các trận chiến qua từng năm lịch sử <br />
              Tưởng nhớ những chiến sĩ đã hy sinh <br />
              Ghi danh người thân, tưởng nhớ mãi mãi
            </p>
          </div>

          <div className="anhMain">
            <ImgMain />
          </div>
        </div>
      </div>

      <div className="banner2">
        <IndexTimeLine/>
      </div>
    </div>
  );
}
