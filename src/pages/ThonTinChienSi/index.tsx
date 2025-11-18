import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChienSi } from "../../api/getData";
import { ChienSi } from "../../interface/chienSi";
import InforChienSi from "../../components/InforChinSi";
import XinLoiPage from "../page404/thieuThongTin";
import LoadingSpin from "../../custom/LoadingSpin/loadSoin";
import CustomButton from "../../custom/Button/btnCustom";

interface ThongTinChienSiProps {
  searchData?: {
    name?: string;
    year?: string;
  } | null;
}

const ITEMS_PER_PAGE = 51;

const ThongTinChienSi: React.FC<ThongTinChienSiProps> = ({ searchData }) => {
  const { nam } = useParams<{ nam: string }>();

  let startYear: number;
  let endYear: number;

  if (searchData?.year) {
    const parts = searchData.year.split("-");
    startYear = Number(parts[0]);
    endYear = Number(parts[1] ?? parts[0]);
  } else if (nam) {
    const years = nam.split("-").map(Number);
    startYear = years[0];
    endYear = years[1] ?? years[0];
  } else {
    startYear = 1858;
    endYear = 2000;
  }

  const [data, setData] = useState<ChienSi[]>([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isNaN(startYear) || isNaN(endYear)) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

        const responses = await Promise.all(
          years.map((year) => getChienSi({ namHySinh: `${year}` }))
        );

        let allItems: ChienSi[] = responses.flatMap((res) => res.items || res);

        const filterName = searchData?.name?.toLowerCase() || "";
        if (filterName) {
          allItems = allItems.filter((x) => x.HoTen.toLowerCase().includes(filterName));
        }

        setData(allItems);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [startYear, endYear, searchData?.name, searchData?.year]);

  const handleLoadMore = () => setVisibleCount((prev) => prev + ITEMS_PER_PAGE);

  return (
    <div
      className="thongtinchiensihysinh"
      style={{ backgroundColor: "#A81010", minHeight: "100vh", padding: "30px 20px" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", color: "#fff" }}>
        {loading ? (
          <LoadingSpin />
        ) : data.length === 0 ? (
          <XinLoiPage />
        ) : (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "16px",
              }}
            >
              {data.slice(0, visibleCount).map((chienSi) => (
                <InforChienSi key={chienSi.Id} chienSi={chienSi} />
              ))}
            </div>

            {visibleCount < data.length && (
              <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <CustomButton
                  text="Xem thêm"
                  bgColor="#fff"
                  textColor="#A81010"
                  style={{
                    fontWeight: "bold",
                    padding: "10px 20px",
                  }}
                  onClick={handleLoadMore}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ThongTinChienSi;
